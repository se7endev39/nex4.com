<?php

namespace App\Http\Controllers\Admin;

use App\Jobs\ConvertVideoToHLS;
use App\Jobs\ConvertVideoToMp4;
use App\Models\Casts;
use App\Models\Casts_rules;
use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\Subtitle;
use App\Models\Tmdb;
use App\Traits\FFmpegTranscoding;
use App\Models\Video;
use App\Models\Ads_schedule;
use Auth;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use \Done\Subtitles\Subtitles;
use Illuminate\Support\Facades\App;

class MovieController extends Controller
{
    use FFmpegTranscoding;

    public $number = 0;
    public $name;


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->admin = Auth::user()->authorizeRoles(['admin', 'manager']);
            return $next($request);
        });
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getAllMovies()
    {
        $getMovies = Movie::selectRaw('
                        movies.m_id AS id,
                        movies.m_name AS name,
                        movies.m_poster AS poster,
                        movies.m_year AS year,
                        categories.name AS category,
                        movies.show,
                        movies.m_cloud,
                        movies.m_users_only,
                        movies.created_at,
                        movies.updated_at,
                        tops.movie_id')
            ->leftJoin('tops', 'tops.movie_id', '=', 'movies.m_id')
            ->leftJoin('categories', 'categories.id', '=', 'movies.m_category')
            ->orderBy('movies.created_at', 'DESC')
            ->paginate(15);

        // Check if there is no result
        if (empty($getMovies->all())) {
            $getMovies = null;
        }


        return response()->json(
            ['data' => [
                'movies' => $getMovies,
            ]],
            200
        );
    }

    /**
     * Upload using Themoviedb API
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function movieTmdbAPI(Request $request)
    {


        // Upload To Local Or AWS Cloud
        if ($request->cloud_type == 'local') {
            return $this->uploadMovieTmdbInfoToLocal($request);
        } elseif ($request->cloud_type == 'aws') {
            return $this->uploadMovieTmdbInfoToAWS($request);
        } else {
            return response()->json(['data' => 'Error cloud not found'], 422);
        }
    }

    /**
     *  Upload To local
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function movieUpload(Request $request)
    {

        // Upload To Local Or AWS Cloud
        if ($request->cloud_type == 'local') {
            return $this->uploadMovieVideoToLocal($request);
        } elseif ($request->cloud_type == 'aws') {
            return $this->uploadMovieVideoToAWS($request);
        } else {
            return response()->json(['data' => 'Error cloud not found'], 422);
        }
    }

    /**
     * Upload Subtitle To local
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function subtitleUpload(Request $request)
    {
        $request->validate([
            'id' => 'required|uuid',
        ]);

        $update = Movie::find($request->id);

        if (is_null($update)) {
            return response()->json(['status' => 'faild', 'message' => 'There is no movie found'], 404);
        }



        if (!empty($request->file('subtitleUpload'))) {
            if ($update->m_cloud === 'local') {
                foreach ($request->file('subtitleUpload') as $key => $value) {
                    $file = file_get_contents($value);
                    $subtitles = Subtitles::load($file, 'srt');
                    $name = uniqid('subtitle_') . '.vtt';
                    Storage::disk('public')->put('subtitles/' . $update->m_name . '/' . $name, $subtitles->content('vtt'));

                    // Store Data
                    $sub = new Subtitle();
                    $sub->name = '/storage/subtitles/' . $update->m_name . '/' . $name;
                    $sub->language = substr($value->getClientOriginalName(), 0, -4);
                    $sub->movie_id = $request->id;
                    $sub->save();
                }

                return response()->json(['status' => 'success', 'message' => 'Successful upload subtitles', 'data' => $sub]);
            } elseif ($update->m_cloud === 'aws') {
                foreach ($request->file('subtitleUpload') as $key => $value) {
                    $file = file_get_contents($value);
                    $subtitles = Subtitles::load($file, 'srt');
                    $name = uniqid('subtitle_') . '.vtt';
                    Storage::disk('s3')->put('subtitles/' . $update->m_name . '/' . $name, $subtitles->content('vtt'));

                    // Store Data
                    $sub = new Subtitle();
                    $sub->name =  $update->m_name . '/' . $name;
                    $sub->language = substr($value->getClientOriginalName(), 0, -4);
                    $sub->movie_id = $request->id;
                    $sub->save();
                }

                return response()->json(['status' => 'success', 'message' => 'Successful upload subtitles', 'data' => $sub]);
            }
        }
    }

    /**
     * Upload To local Custom Function
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function customUploadMovieDetails(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'overview' => 'required',
            'year' => 'required|numeric|between:0,2030',
            'runtime' => 'required|numeric|between:0,500',
            'rate' => 'required|numeric|between:0,99.99',
            'genres' => 'required|max:100',
            'poster' => 'required|mimes:jpeg,jpg,png',
            'backdrop' => 'required|mimes:jpeg,jpg,png',
            'video' => 'mimes:mp4,x-flv,x-mpegURL,MP2T,3gpp,quicktime,x-msvideo,x-ms-wmv,webm',
            'video_link' => 'nullable|url',
        ]);

        // Upload To Local Or AWS Cloud
        if ($request->cloud_type == 'local') {
            return $this->uploadMovieCustomInfoToLocal($request);
        } elseif ($request->cloud_type == 'aws') {
            return $this->uploadMovieCustomInfoToAWS($request);
        } else {
            return response()->json(['data' => 'Error cloud not found'], 422);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function getMovieDetails($id)
    {
        $getMovie = DB::table('movies')
            ->selectRaw('movies.m_id AS id, movies.m_name AS name, movies.m_poster AS poster, movies.m_desc AS overview, movies.m_runtime AS runtime, movies.m_year AS year, movies.m_genre AS genre, movies.m_age AS age , movies.m_rate AS rate, movies.m_backdrop AS backdrop,movies.m_youtube AS youtube, movies.m_age AS age, movies.m_cloud AS cloud, videos.video_url,categories.id AS category')
            ->leftJoin('categories', 'categories.id', '=', 'movies.m_category')
            ->join('videos', 'videos.movie_id', '=', 'movies.m_id')
            ->where('m_id', $id)
            ->first();

        if (is_null($getMovie)) {
            return response()->json(['status' => 'failed', 'message' => 'This movie have not any video, remove it and upload it again.'], 422);
        }

        $getCastOfMovie = DB::table(DB::raw('casts'))
            ->select('casts.credit_id', 'casts.c_name AS name', 'casts.c_image AS image', 'casts.c_cloud AS cloud')
            ->join('casts_rules', 'casts_rules.casts_id', '=', 'casts.credit_id')
            ->where('casts_rules.casts_movies', $id)
            ->orderBy('c_name', 'ASC')
            ->get();

        $getVideos = DB::table('videos')->where('movie_id', $id)->get();

        return response()->json([
            'data' => [
                'movie' => $getMovie,
                'cast' => $getCastOfMovie,
                'videos' => $getVideos,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update(Request $request)
    {

        //Validate
        $request->validate([
            'id' => 'required|uuid',
            'year' => 'nullable|numeric',
            'runtime' => 'nullable|numeric',
            'rate' => 'nullable|numeric|between:0,99.99',
            'youtube' => 'nullable|max:300',
        ]);

        $update = Movie::find($request->id);

        if (is_null($update)) {
            return response()->json(['status' => 'faild', 'message' => 'There is no movie found'], 404);
        }

        // Update AWS Movie

        if ($update->m_cloud == 'local') {
            $update->m_name = $request->name;
            $update->m_year = $request->year;
            $update->m_desc = $request->overview;
            $update->m_age = $request->age;
            if ($request->genres !== 'undefined') {
                $update->m_genre = $request->genres;
            }
            $update->m_category = $request->category;
            $update->m_runtime = $request->runtime;
            $update->m_rate = $request->rate;
            $update->m_youtube = $request->youtube;
            $update->m_category = $request->input('category');

            if (!empty($request->file('poster'))) {
                $posterName = Str::random(20) . '.jpg';

                // Resize image and upload it to local Storage
                $encodePoster300 = Image::make($request->poster)->resize(300, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode('jpg');
                $encodePoster600 = Image::make($request->poster)->resize(600, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode('jpg');
                $encodePosterOriginal = Image::make($request->poster)->encode('jpg');

                $uploadPoster300 = Storage::disk('public')->put('posters/300_' . $posterName, $encodePoster300->__toString());
                $uploadPoster600 = Storage::disk('public')->put('posters/600_' . $posterName, $encodePoster600->__toString());
                $uploadOriginalPoster = Storage::disk('public')->put('posters/original_' . $posterName, $encodePosterOriginal->__toString());

                $update->m_poster = $posterName;
            }
            if (!empty($request->file('backdrop'))) {
                $backdropName = Str::random(20) . '.jpg';

                $encodeBackdrop300 = Image::make($request->backdrop)->resize(300, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode('jpg');
                $encodeBackdrop600 = Image::make($request->backdrop)->resize(600, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode('jpg');
                $encodeBackdropOriginal = Image::make($request->backdrop)->encode('jpg');

                $uploadBackdrop300 = Storage::disk('public')->put('backdrops/300_' . $backdropName, $encodeBackdrop300->__toString());
                $uploadBackdrop600 = Storage::disk('public')->put('backdrops/600_' . $backdropName, $encodeBackdrop600->__toString());
                $uploadOriginalBackdrop = Storage::disk('public')->put('backdrops/original_' . $backdropName, $encodeBackdropOriginal->__toString());

                $update->m_backdrop = $backdropName;
            }

            // Cast decode
            $casts = json_decode($request->cast);
            // Delete all cast and add new update
            $checkCasts = Casts_rules::where('casts_movies', $request->id)->first();
            if (!is_null($checkCasts)) {
                $delete = Casts_rules::where('casts_movies', $request->id)->delete();
                if (!$delete) {
                    return response()->json(['status' => 'failed', 'message' => 'Failed to delete casts'], 422);
                }
            }

            foreach ($casts as $key => $value) {
                $cast = new Casts_rules;
                $cast->casts_id = $value->credit_id;
                $cast->casts_movies = $request->id;
                $cast->save();
            }


            $update->save();

            // Video decode
            $videos = json_decode($request->videos);
            foreach ($videos as $key => $value) {
                $video = Video::where('v_id', $value->v_id)->first();
                if (!is_null($video)) {
                    if ($value->video_format === 'embed') {
                        $video->embed_code = $value->embed_code;
                    } else {
                        $video->video_url = $value->video_url;
                    }
                }
                $video->save();
            }
        } else {
            $update->m_name = $request->name;
            $update->m_year = $request->year;
            $update->m_desc = $request->overview;
            $update->m_age = $request->age;
            if ($request->genres !== 'undefined') {
                $update->m_genre = $request->genres;
            }
            $update->m_category = $request->category;
            $update->m_runtime = $request->runtime;
            $update->m_rate = $request->rate;
            $update->m_youtube = $request->youtube;
            $update->m_category = $request->input('category');

            if (!empty($request->file('poster'))) {
                $posterName = Str::random(20) . '.jpg';
                $posterEncode = \Image::make($request->file('poster'))->encode('jpg');
                Storage::disk('s3')->put('posters/' . $posterName, $posterEncode->__toString());
                $update->m_poster = $posterName;
            }
            if (!empty($request->file('backdrop'))) {
                $backdropName = Str::random(20) . '.jpg';
                $backdropEncode = \Image::make($request->file('backdrop'))->encode('jpg');
                Storage::disk('s3')->put('backdrops/' . $backdropName, $backdropEncode->__toString());
                $update->m_backdrop = $backdropName;
            }



            // Cast decode
            $casts = json_decode($request->cast);
            // Delete all cast and add new update
            $checkCasts = Casts_rules::where('casts_movies', $request->id)->first();
            if (!is_null($checkCasts)) {
                $delete = Casts_rules::where('casts_movies', $request->id)->delete();
                if (!$delete) {
                    return response()->json(['status' => 'failed', 'message' => 'Failed to delete casts'], 422);
                }
            }

            foreach ($casts as $key => $value) {
                $cast = new Casts_rules;
                $cast->casts_id = $value->credit_id;
                $cast->casts_movies = $request->id;
                $cast->save();
            }


            $update->save();

            // Video decode
            $videos = json_decode($request->videos);
            foreach ($videos as $key => $value) {
                $video = Video::where('v_id', $value->v_id)->first();

                if (!is_null($video)) {
                    if ($value->video_format === 'embed') {
                        $video->embed_code = $value->embed_code;
                    } else {
                        $video->video_url = $value->video_url;
                    }
                }
                $video->save();
            }
        }

        return response()->json(['status' => 'success', 'message' => 'Successful update ' . $request->name]);
    }

    /**
     * Delete the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function deleteMovie(Request $request)
    {
        foreach ($request->list as $value) {
            $delete = Movie::find($value['id']);

            if (is_null($delete)) {
                return response()->json(['status' => 'faild', 'message' => 'There is no movie found'], 404);
            }

            if ($delete->m_cloud == 'aws') {
                // Remove video
                Storage::disk('s3')->deleteDirectory('videos/' . $delete->m_name . '/');
                // Remove subtitle
                Storage::disk('s3')->deleteDirectory('subtitles/' . $delete->m_name  . '/');
                $delete->delete();
            } else {
                // Remove video
                Storage::disk('public')->deleteDirectory('videos/' . $delete->m_name . '/');
                // Remove subtitle
                Storage::disk('public')->deleteDirectory('subtitles/' . $delete->m_name . '/');
                $delete->delete();
            }
        }

        return response()->json(['status' => 'success', 'message' => 'successful delete movies']);
    }

    /**
     * Search movies by name or id
     *
     * @param  int $id
     * @return Response
     */
    public function searchMovie(Request $request)
    {
        $request->validate([
            'query' => 'required',
        ]);

        $getMovie = Movie::selectRaw('
                movies.m_id AS id,
                movies.m_name AS name,
                movies.m_poster AS poster,
                movies.m_year AS year,
                movies.m_cloud,
                categories.name AS category,
                movies.show,
                movies.m_users_only,
                movies.created_at,
                movies.updated_at,
                tops.movie_id')
            ->leftJoin('categories', 'categories.id', '=', 'movies.m_category')
            ->leftJoin('tops', 'tops.movie_id', '=', 'movies.m_id')
            ->where('m_name', 'like', $request->input('query') . '%')
            ->get();

        if ($getMovie->isEmpty()) {
            $getMovie = null;
        }

        return response()->json(
            ['data' => [
                'movies' => $getMovie,
            ]],
            200
        );
    }

    /**
     *  Make movie avaliable or unavalibale
     *
     * @param Request $request
     * @return ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function availableMovie(Request $request)
    {
        // Check if there id in episode table

        $array = [];
        foreach ($request->list as $value) {
            $check = Movie::find($value['id']);

            if (is_null($check)) {
                return response(['status' => 'failed', 'message' => 'There is no id for this movie on database'], 422);
            }

            if ($check->show) {
                $check->show = 0;
                $check->save();
                array_push($array, ['key' => $value['key'], 'show' => 0]);
            } else {
                $check->show = 1;
                $check->save();
                array_push($array, ['key' => $value['key'], 'show' => 1]);
            }
        }

        return response(['status' => 'success', 'message' => 'Successful Request', 'list' => $array], 200);
    }

    /**
     *  Make movie for users only 
     *
     * @param Request $request
     * @return ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function userOnlyUpdate(Request $request)
    {
        // Check if there id in episode table

        $array = [];
        foreach ($request->list as $value) {
            $check = Movie::find($value['id']);

            if (is_null($check)) {
                return response(['status' => 'failed', 'message' => 'There is no id for this movie on database'], 422);
            }

            $check->m_users_only = $request->input('users_only');
            $check->save();
            array_push($array, ['key' => $value['key'], 'show' => $request->input('users_only')]);
        }

        return response(['status' => 'success', 'message' => 'Successful Request', 'list' => $array], 200);
    }



    /**
     * Upload Info Of Movie To Local Cloud
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadMovieTmdbInfoToLocal($request)
    {

        // Check if there is api of moviedb in config file
        $getApi = Tmdb::find(1);

        if ($getApi->api === null || empty($getApi->api)) {
            return response()->json(['status' => 'failed', 'message' => 'There is no api key in config'], 422);
        }


        $client = new \GuzzleHttp\Client();

        // Get details from themoviedb
        $detils = 'https://api.themoviedb.org/3/movie/' . $request->id . '?api_key=' . $getApi->api . '&language=' . $getApi->language;
        $trailer = 'https://api.themoviedb.org/3/movie/' . $request->id . '/videos?api_key=' . $getApi->api . '&language=' . $getApi->language;

        // Check if there movie or not
        try {
            $res_movies = $client->get($detils)->getBody();
            $data_movies = json_decode($res_movies, true);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return response()->json(['status' => 'failed', 'message' => 'There is no movie like this id.'], 422);
        }

        // Get video trailer
        $res_trailer = $client->get($trailer)->getBody();
        $data_trailer = json_decode($res_trailer, true);

        // Get the backdrop and poster image from api themoviedb and
        $newPosterName = (!isset($data_movies['poster_path']) ? 'none' : Str::random(20) . '.jpg');
        $poster = (!isset($data_movies['poster_path']) ? 'none' : $client->get('https://image.tmdb.org/t/p/w500' . $data_movies['poster_path'])->getBody());

        $newBackdropName = (!isset($data_movies['backdrop_path']) ? 'none' : Str::random(20) . '.jpg');
        $backdrop = (!isset($data_movies['backdrop_path']) ? 'none' : $client->get('https://image.tmdb.org/t/p/w1280' . $data_movies['backdrop_path'])->getBody());

        // If there no movies image @return json "Error"
        if ($newPosterName === 'none' || $newBackdropName === 'none') {
            return response()->json(['status' => 'error', 'message' => 'Please use custom upload, because no image for this movie.'], 422);
        } else {

            // Resize image and upload it to local Storage

            $encodePoster300 = Image::make($poster)->resize(300, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode('jpg');
            $encodePoster600 = Image::make($poster)->resize(600, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode('jpg');
            $encodePosterOriginal = Image::make($poster)->encode('jpg');

            $uploadPoster300 = Storage::disk('public')->put('posters/300_' . $newPosterName, $encodePoster300->__toString());
            $uploadPoster600 = Storage::disk('public')->put('posters/600_' . $newPosterName, $encodePoster600->__toString());
            $uploadOriginalPoster = Storage::disk('public')->put('posters/original_' . $newPosterName, $encodePosterOriginal->__toString());

            $encodeBackdrop300 = Image::make($backdrop)->resize(300, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode('jpg');
            $encodeBackdrop600 = Image::make($backdrop)->resize(600, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode('jpg');
            $encodeBackdropOriginal = Image::make($backdrop)->encode('jpg');

            $uploadBackdrop300 = Storage::disk('public')->put('backdrops/300_' . $newBackdropName, $encodeBackdrop300->__toString());
            $uploadBackdrop600 = Storage::disk('public')->put('backdrops/600_' . $newBackdropName, $encodeBackdrop600->__toString());
            $uploadOriginalBackdrop = Storage::disk('public')->put('backdrops/original_' . $newBackdropName, $encodeBackdropOriginal->__toString());
        }

        //Store data
        $store = new Movie();
        $store->m_name = $data_movies['title'];
        $store->m_desc = $data_movies['overview'];
        $store->m_year = substr($data_movies['release_date'], 0, 4);
        $store->m_runtime = ($data_movies['runtime'] === null ? '0' : $data_movies['runtime']);
        $store->m_rate = ($data_movies['vote_average'] === null ? '0' : $data_movies['vote_average']);
        $store->m_youtube = (!isset($data_trailer['results'][0]['key']) ? null : 'https://www.youtube.com/watch?v=' . $data_trailer['results'][0]['key']);
        $store->m_backdrop = $newBackdropName;
        $store->m_poster = $newPosterName;
        $store->m_age = $request->age;
        $store->m_category = $request->category;
        $store->show = 2;
        $store->m_cloud = 'local';
        $store->m_category = $request->input('category');
        foreach ($data_movies['genres'] as $key => $value) {
            $genre1[] = $value['name'];
            $genre2 = implode(", ", $genre1);
        }
        $store->m_genre = $genre2;
        $store->save();

        // Get the casts details from TheMovieDB and store it in database
        $casts = 'https://api.themoviedb.org/3/movie/' . $request->id . '/credits?api_key=' . $getApi->api . '&language=' . $getApi->language;

        // Check if there cast or not
        try {
            $res_casts = $client->get($casts)->getBody();
            $data_casts = json_decode($res_casts, true);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return response()->json(['status' => 'failed', 'message' => 'There is no cast'], 422);
        }

        foreach ($data_casts['cast'] as $key => $value) {
            // Break if more than 8 cast
            if ($key > 7) {
                break;
            }

            //Check if image not empty
            if (!empty($value['profile_path'] && !empty($value['credit_id']))) {
                $image_name = Str::random(20) . '.jpg';
                $image_content = $client->get('http://image.tmdb.org/t/p/w500/' . $value['profile_path'])->getBody();
                $image_encode = \Image::make($image_content)->widen(200)->encode('jpg');
                $castUplaod = Storage::disk('public')->put('casts/' . $image_name, $image_encode->__toString());

                //If there same cast in db
                $check_cast = Casts::where('credit_id', $value['credit_id'])->first();
                if ($check_cast) {
                    $casts_rule = new Casts_rules;
                    $casts_rule->casts_id = $value['credit_id'];
                    $casts_rule->casts_movies = $store->m_id;
                    $casts_rule->save();
                } else {
                    $casts_store = new Casts;
                    $casts_store->credit_id = $value['credit_id'];
                    $casts_store->c_name = $value['name'];
                    $casts_store->c_image = '/storage/casts/' . $image_name;
                    $casts_store->c_cloud = 'local';
                    $casts_store->save();
                    //Casts rules
                    $casts_rule = new Casts_rules;
                    $casts_rule->casts_id = $value['credit_id'];
                    $casts_rule->casts_movies = $store->m_id;
                    $casts_rule->save();
                }
            }
        }

        return response()->json(['status' => 'success', 'message' => 'Successful store movie details in database', 'id' => $store->m_id], 200);
    }


    public function uploadMovieTmdbInfoToAWS($request)
    {
        // Check if there is api of moviedb in config file
        $getApi = Tmdb::find(1);
        if ($getApi->api === null || empty($getApi->api)) {
            return response()->json(['status' => 'failed', 'message' => 'There is no api key in config'], 422);
        }

        $client = new \GuzzleHttp\Client();

        // Get details from themoviedb
        $detils = 'https://api.themoviedb.org/3/movie/' . $request->id . '?api_key=' . $getApi->api  . '&language=' . $getApi->language;
        $trailer = 'https://api.themoviedb.org/3/movie/' . $request->id . '/videos?api_key=' . $getApi->api  . '&language=' . $getApi->language;

        // Check if there movie or not
        try {
            $res_movies = $client->get($detils)->getBody();
            $data_movies = json_decode($res_movies, true);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return response()->json(['status' => 'failed', 'message' => 'There is no movie like this id.'], 422);
        }
        // Get video trailer
        $res_trailer = $client->get($trailer)->getBody();
        $data_trailer = json_decode($res_trailer, true);
        // Get the backdrop and poster image from api themoviedb and
        $name_poster = (!isset($data_movies['poster_path']) ? 'none' : Str::random(20) . '.jpg');
        $poster = (!isset($data_movies['poster_path']) ? 'none' : $client->get('https://image.tmdb.org/t/p/w500' . $data_movies['poster_path'])->getBody());

        $name_backdrop = (!isset($data_movies['backdrop_path']) ? 'none' : Str::random(20) . '.jpg');
        $backdrop = (!isset($data_movies['backdrop_path']) ? 'none' : $client->get('https://image.tmdb.org/t/p/w1280' . $data_movies['backdrop_path'])->getBody());

        // If there no movies image @return json "Error"
        if ($name_poster === 'none' || $name_backdrop === 'none') {
            return response()->json(['status' => 'error', 'msg' => 'Please use custom upload, because no image for this movie.']);
        } else {
            // Change image size and upload it to S3 Storage
            $img1 = \Image::make($poster)->encode('jpg');
            $img2 = \Image::make($backdrop)->encode('jpg');
            Storage::disk('s3')->put('posters/' . $name_poster, $img1->__toString());
            Storage::disk('s3')->put('backdrops/' . $name_backdrop, $img2->__toString());
        }

        //Store data
        $store = new Movie;
        $store->m_name = $data_movies['title'];
        $store->m_desc = $data_movies['overview'];
        $store->m_year = substr($data_movies['release_date'], 0, 4);
        $store->m_runtime = ($data_movies['runtime'] === null ? '0' : $data_movies['runtime']);
        $store->m_rate = ($data_movies['vote_average'] === null ? '0' : $data_movies['vote_average']);
        $store->m_youtube = (!isset($data_trailer['results'][0]['key']) ? null : 'https://www.youtube.com/watch?v=' . $data_trailer['results'][0]['key']);
        $store->m_backdrop = $name_backdrop;
        $store->m_poster = $name_poster;
        $store->m_age = $request->age;
        $store->m_category = $request->category;
        $store->show = 2;
        $store->m_cloud = 'aws';
        $store->m_category = $request->input('category');

        foreach ($data_movies['genres'] as $key => $value) {
            $genre1[] = $value['name'];
            $genre2 = implode(", ", $genre1);
        }
        $store->m_genre = $genre2;
        $store->save();

        // Get the casts details from TheMovieDB and store it in database
        $casts = 'https://api.themoviedb.org/3/movie/' . $request->id . '/credits?api_key=' . $getApi->api . '&language=' . $getApi->language;
        $res_casts = $client->get($casts)->getBody();
        $data_casts = json_decode($res_casts, true);

        // Check if there cast or not
        try {
            $res_casts = $client->get($casts)->getBody();
            $data_casts = json_decode($res_casts, true);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return response()->json(['status' => 'failed', 'message' => 'There is no cast'], 422);
        }

        foreach ($data_casts['cast'] as $key => $value) {
            // Break if more than 8 cast
            if ($key > 7) {
                break;
            }

            //Check if image not empty
            if (!empty($value['profile_path'] && !empty($value['credit_id']))) {
                $image_name = Str::random(20) . '.jpg';
                $image_content = $client->get('http://image.tmdb.org/t/p/w500/' . $value['profile_path'])->getBody();
                $image_encode = \Image::make($image_content)->widen(200)->encode('jpg');
                Storage::disk('s3')->put('casts/'  . $image_name, $image_encode->__toString());

                //If there same cast in db
                $check_cast = Casts::where('credit_id', $value['credit_id'])->first();
                if ($check_cast) {
                    $casts_rule = new Casts_rules;
                    $casts_rule->casts_id = $value['credit_id'];
                    $casts_rule->casts_movies = $store->m_id;
                    $casts_rule->save();
                } else {
                    $casts_store = new Casts;
                    $casts_store->credit_id = $value['credit_id'];
                    $casts_store->c_name = $value['name'];
                    $casts_store->c_image = $image_name;
                    $casts_store->c_cloud = 'aws';

                    $casts_store->save();
                    //Casts rules
                    $casts_rule = new Casts_rules;
                    $casts_rule->casts_id = $value['credit_id'];
                    $casts_rule->casts_movies = $store->m_id;
                    $casts_rule->save();
                }
            }
        }

        return response()->json(['status' => 'success', 'message' => 'Successful store movie details in database', 'id' => $store->m_id], 200);
    }


    public function uploadMovieCustomInfoToLocal($request)
    {
        // Upload images to local
        $newPosterName = Str::random(20) . '.jpg';
        $newBackdropName = Str::random(20) . '.jpg';

        // Resize image and upload it to local Storage
        $encodePoster300 = Image::make($request->poster)->resize(300, null, function ($constraint) {
            $constraint->aspectRatio();
        })->encode('jpg');
        $encodePoster600 = Image::make($request->poster)->resize(600, null, function ($constraint) {
            $constraint->aspectRatio();
        })->encode('jpg');
        $encodePosterOriginal = Image::make($request->poster)->encode('jpg');

        $uploadPoster300 = Storage::disk('public')->put('posters/300_' . $newPosterName, $encodePoster300->__toString());
        $uploadPoster600 = Storage::disk('public')->put('posters/600_' . $newPosterName, $encodePoster600->__toString());
        $uploadOriginalPoster = Storage::disk('public')->put('posters/original_' . $newPosterName, $encodePosterOriginal->__toString());

        $encodeBackdrop300 = Image::make($request->backdrop)->resize(300, null, function ($constraint) {
            $constraint->aspectRatio();
        })->encode('jpg');
        $encodeBackdrop600 = Image::make($request->backdrop)->resize(600, null, function ($constraint) {
            $constraint->aspectRatio();
        })->encode('jpg');
        $encodeBackdropOriginal = Image::make($request->backdrop)->encode('jpg');

        $uploadBackdrop300 = Storage::disk('public')->put('backdrops/300_' . $newBackdropName, $encodeBackdrop300->__toString());
        $uploadBackdrop600 = Storage::disk('public')->put('backdrops/600_' . $newBackdropName, $encodeBackdrop600->__toString());
        $uploadOriginalBackdrop = Storage::disk('public')->put('backdrops/original_' . $newBackdropName, $encodeBackdropOriginal->__toString());

        //Store data
        $store = new Movie;
        $store->m_name = $request->name;
        $store->m_desc = $request->overview;
        $store->m_year = $request->year;
        $store->m_runtime = $request->runtime;
        $store->m_rate = $request->rate;
        $store->m_youtube = $request->youtube;
        $store->m_backdrop = $newBackdropName;
        $store->m_poster = $newPosterName;
        $store->m_age = $request->age;
        $store->m_category = $request->category;
        $store->show = 2;
        $store->m_genre = str_replace(",", "-", $request->genres);
        $store->m_cloud = 'local';
        $store->m_category = $request->input('category');

        $store->save();
        // Add casts

        $casts = [
            '1' => [
                'id' => Str::random(20),
                'name' => $request->cast1,
                'image' => $request->image1,
            ],
            '2' => [
                'id' => Str::random(20),
                'name' => $request->cast2,
                'image' => $request->image2,
            ],
            '3' => [
                'id' => Str::random(20),
                'name' => $request->cast3,
                'image' => $request->image3,
            ],
            '4' => [
                'id' => Str::random(20),
                'name' => $request->cast4,
                'image' => $request->image4,
            ],
        ];

        foreach ($casts as $key => $value) {
            if (!empty($value['image']) && $value['image'] !== 'undefined') {
                $newActorName = Str::random(20) . '.jpg';
                $img = \Image::make($value['image'])->widen(200)->encode('jpg');
                Storage::disk('public')->put('casts/' . $newActorName, $img->__toString());
                $casts_store = new Casts();
                $casts_store->credit_id = $value['id'];
                $casts_store->c_name = $value['name'];
                $casts_store->c_image = '/storage/casts/' . $newActorName;
                $casts_store->c_cloud = 'local';
                $casts_store->save();

                $casts_rule = new Casts_rules();
                $casts_rule->casts_id = $value['id'];
                $casts_rule->casts_movies = $store->m_id;
                $casts_rule->save();
            }
        }

        return response()->json(['status' => 'success', 'message' => 'Successful store movie details in database', 'id' => $store->m_id], 200);
    }


    public function uploadMovieCustomInfoToAWS($request)
    {
        // Upload images to s3
        $name_poster = md5($request->file('poster')->getClientOriginalName() . microtime()) . '.jpg';
        $name_backdrop = md5($request->file('backdrop')->getClientOriginalName() . microtime()) . '.jpg';
        $img1 = \Image::make($request->poster)->encode('jpg');
        $img2 = \Image::make($request->backdrop)->encode('jpg');
        Storage::disk('s3')->put('posters/' . $name_poster, $img1->__toString());
        Storage::disk('s3')->put('backdrops/' . $name_backdrop, $img2->__toString());

        //Store data
        $store = new Movie;
        $store->m_name = $request->name;
        $store->m_desc = $request->overview;
        $store->m_year = $request->year;
        $store->m_runtime = $request->runtime;
        $store->m_rate = $request->rate;
        $store->m_youtube = $request->youtube;
        $store->m_backdrop = $name_backdrop;
        $store->m_poster = $name_poster;
        $store->m_age = $request->age;
        $store->m_category = $request->category;
        $store->show = 2;
        $store->m_genre = str_replace(",", "-", $request->genres);
        $store->m_cloud = 'aws';
        $store->m_category = $request->input('category');

        $store->save();
        // Add casts
        $casts = [
            '1' => [
                'id' => Str::random(20),
                'name' => $request->cast1,
                'image' => $request->image1,
            ],
            '2' => [
                'id' => Str::random(20),
                'name' => $request->cast2,
                'image' => $request->image2,
            ],
            '3' => [
                'id' => Str::random(20),
                'name' => $request->cast3,
                'image' => $request->image3,
            ],
            '4' => [
                'id' => Str::random(20),
                'name' => $request->cast4,
                'image' => $request->image4,
            ],
        ];

        foreach ($casts as $key => $value) {
            if (!empty($value['image']) && $value['image'] !== 'undefined') {
                $img_name = Str::random(20) . '.jpg';
                $img = \Image::make($value['image'])->widen(200)->encode('jpg');
                Storage::disk('s3')->put('casts/' . $store->m_id . '/' . $img_name, $img->__toString());
                $casts_store = new Casts();
                $casts_store->credit_id = $value['id'];
                $casts_store->c_name = $value['name'];
                $casts_store->c_image = $store->m_id . '/' . $img_name;
                $casts_store->save();

                $casts_rule = new Casts_rules();
                $casts_rule->casts_id = $value['id'];
                $casts_rule->casts_movies = $store->m_id;
                $casts_rule->save();
            }
        }

        return response()->json(['status' => 'success', 'message' => 'Successful store movie details in database', 'id' => $store->m_id], 200);
    }

    /**
     * Upload Video To Local Cloud
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadMovieVideoToLocal($request)
    {
        if ($request->has('video_link')) {
            // Video decode
            $videos = json_decode($request->video_link);
            $movieUpdate = Movie::find($request->id);
            $movieUpdate->show = 1;
            $movieUpdate->save();
            foreach ($videos as $key => $value) {
                $video = new video();
                $video->video_cloud = 'link';
                $video->video_format = 'link';
                switch ($key) {
                    case 0:
                        $video->resolution = '320';
                        break;
                    case 1:
                        $video->resolution = '480';
                        break;
                    case 2:
                        $video->resolution = '720';
                        break;
                    case 3:
                        $video->resolution = '1080';
                        break;
                    case 4:
                        $video->resolution = '4K';
                        break;
                }
                $video->movie_id = $request->id;
                if (empty($value)) {
                    $video->video_url = null;
                } else {
                    $video->video_url = $value;
                }
                $video->save();
            }

            return response()->json(['status' => 'success', 'message' => 'Successful upload and transcode video to local', 'id' => $request->id], 200);
        } elseif ($request->has('video')) {
            // Decode Presets Json
            $resolution = json_decode($request->resolution, true);

            Log::alert($request);
            if ($resolution[0]['Container'] === 'ts') {
                // Upload video to Storage
                $file = $request->file('video');
                $path = Storage::disk('public')->put('temp', $file);
                $uploadPath = 'movies/' . $request->id . '/';

                $randomName = Str::random(20);
                $playlistName = $randomName . '.m3u8';
                Log::alert('run jobs--' . $request->id);
                ConvertVideoToHLS::dispatch($path, $request->id, $resolution, $uploadPath, $playlistName, $request->tmdb_id, 'local', 'movies');
            } elseif ($resolution[0]['Container'] === 'mp4') {
                $file = $request->file('video');
                $path = Storage::disk('public')->put('temp', $file);
                $uploadPath = 'movies/' . $request->id . '/';
                Log::alert('run jobs--' . $request->id);
                ConvertVideoToMp4::dispatch($path, $request->id, $resolution, $uploadPath, $request->tmdb_id, 'local', 'movies');
            }

            return response()->json(['status' => 'success', 'message' => 'Successful upload video, Encoding on progress', 'id' => $request->id], 200);
        } elseif ($request->has('embed_code')) {
            $EmbedLinks = json_decode($request->embed_code);
            $movieUpdate = Movie::find($request->id);
            $movieUpdate->show = 1;
            $movieUpdate->save();
            foreach ($EmbedLinks as $key => $value) {
                $video = new video();
                $video->video_cloud = 'embed';
                $video->video_format = 'embed';
                $video->movie_id = $request->id;
                $video->embed_code = $value->embed_code;
                $video->embed_id = $value->embed_provider;
                $video->save();
            }
            return response()->json(['status' => 'success', 'message' => 'Successful upload movie as embed code', 'id' => $request->id], 200);
        } else {
            return response()->json(['status' => 'failed', 'message' => 'There is something error with video'], 422);
        }
    }

    public function uploadMovieVideoToAWS($request)
    {
        if ($request->has('video_link')) {
            // Video decode
            $videos = json_decode($request->video_link);
            $movieUpdate = Movie::find($request->id);
            $movieUpdate->show = 1;
            $movieUpdate->save();

            foreach ($videos as $key => $value) {
                $video = new video();
                $video->video_cloud = 'link';
                $video->video_format = 'link';
                switch ($key) {
                    case 0:
                        $video->resolution = '320';
                        break;
                    case 1:
                        $video->resolution = '480';
                        break;
                    case 2:
                        $video->resolution = '720';
                        break;
                    case 3:
                        $video->resolution = '1080';
                        break;
                    case 4:
                        $video->resolution = '4K';
                        break;
                }
                $video->movie_id = $request->id;
                if (empty($value)) {
                    $video->video_url = null;
                } else {
                    $video->video_url = $value;
                }
                $video->save();
            }

            return response()->json(['status' => 'success', 'message' => 'Successful upload and transcode video to AWS S3', 'id' => $request->id], 200);
        } elseif ($request->has('embed_code')) {
            $EmbedLinks = json_decode($request->embed_code);
            $movieUpdate = Movie::find($request->id);
            $movieUpdate->show = 1;
            $movieUpdate->save();
            foreach ($EmbedLinks as $key => $value) {
                $video = new video();
                $video->video_cloud = 'embed';
                $video->video_format = 'embed';
                $video->movie_id = $request->id;
                $video->embed_code = $value->embed_code;
                $video->embed_id = $value->embed_provider;
                $video->save();
            }
            return response()->json(['status' => 'success', 'message' => 'Successful upload movie as embed code', 'id' => $request->id], 200);
        } elseif ($request->has('video')) {
            // Decode Persets Json
            $resolution = json_decode($request->resolution, true);

            if ($resolution[0]['Container'] === 'ts') {
                // Upload video to Storage
                $file = $request->file('video');
                $path = Storage::disk('public')->put('temp', $file);
                $uploadPath = 'movies/' . $request->id . '/';

                $randomName = Str::random(20);
                $playlistName = $randomName . '.m3u8';
                Log::alert('run jobs--' . $request->id);
                ConvertVideoToHLS::dispatch($path, $request->id, $resolution, $uploadPath, $playlistName, $request->tmdb_id, 's3', 'movies');
            } elseif ($resolution[0]['Container'] === 'mp4') {
                $file = $request->file('video');
                $path = Storage::disk('public')->put('temp', $file);
                $uploadPath = '/movies/' . $request->id . '/';
                Log::alert('run jobs--' . $request->id);
                ConvertVideoToMp4::dispatch($path, $request->id, $resolution, $uploadPath, $request->tmdb_id, 's3', 'movies');
            }
            return response()->json(['status' => 'success', 'message' => 'Successful upload and transcode video to AWS S3', 'id' => $request->id], 200);
        } else {
            return response()->json(['status' => 'failed', 'message' => 'There is something error with video'], 422);
        }
    }

    public function getSchedulesAds($id)
    {
        $getSchedulesAds = DB::table('ads_schedules')
            ->select('ads_schedules.offset', 'ads_schedules.id AS schedules_id', 'ads.id AS ads_id', 'ads_schedules.movie_id', 'ads.ad_name', 'ads.client', 'ads.tags')
            ->join('ads', 'ads.id', '=', 'ads_schedules.ads_id')
            ->where('ads_schedules.movie_id', $id)
            ->get();


        if ($getSchedulesAds->isEmpty()) {
            $getSchedulesAds = null;
        }

        return response()->json(
            [
                'status' => 'success',
                'data' => $getSchedulesAds
            ],
            200
        );
    }

    public function createSchedulesAds(Request $request, $id)
    {
        $check = Movie::find($id);

        if (is_null($check)) {
            return response()->json(['status' => 'success', 'message' => 'Error movie not found'], 422);
        }

        if (is_array($request->duplicate) && count($request->duplicate) > 0) {
            foreach ($request->duplicate as $key => $value) {
                $create = new Ads_schedule();
                $create->movie_id = $id;
                $create->ads_id = (isset($value['ads_id']) ? $value['ads_id'] : $value['id']);
                $create->offset = $value['range']['value'];
                $create->save();
            }
        }


        if (is_array($request->delete) && count($request->delete) > 0) {
            foreach ($request->delete as $key => $value) {
                $deleteAds = Ads_schedule::where('ads_id', $value['ads_id'])->first();
                $deleteAds->delete();
            }
        }

        if (is_array($request->update) && count($request->update) > 0) {
            foreach ($request->update as $key => $value) {
                if (!isset($value['type'])) {
                    if (isset($value['id'])) {
                        $create = new Ads_schedule();
                        $create->movie_id = $id;
                        $create->ads_id = $value['id'];
                        $create->offset = $value['range']['value'];
                        $create->save();
                    } else {
                        $checkAdsExitsUpdate = Ads_schedule::where('movie_id', $id)->where('id', $value['schedules_id'])->first();
                        if (!is_null($checkAdsExitsUpdate)) {
                            if ($checkAdsExitsUpdate->offset !== $value['range']['value']) {
                                $checkAdsExitsUpdate->offset = $value['range']['value'];
                                $checkAdsExitsUpdate->save();
                            }
                        }
                    }
                } else {
                    $checkdup = Ads_schedule::where('movie_id', $id)->where('offset', $value['range']['value'])->where('ads_id', $value['ads_id'])->first();

                    if (is_null($checkdup)) {
                        $create = new Ads_schedule();
                        $create->movie_id = $id;
                        $create->ads_id = $value['ads_id'];
                        $create->offset = $value['range']['value'];
                        $create->save();
                    }
                }
            }
        }

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Successful create schedules ads'
            ],
            200
        );
    }

    public function updateSchedulerDate(Request $request)
    {
        $request->validate([
            'id' => 'required|uuid',
            'publish_date' => 'required',
            'expire_date' => 'required',
        ]);

        $check = Movie::find($request->input('id'));

        // Abort if null
        if (is_null($check)) {
            return response()->json(['status' => 'failed', 'message' => 'There is no id'], 422);
        }

        $check->show = 3;
        $check->publish_date = $request->input('publish_date');
        $check->expire_date  = $request->input('expire_date');
        $check->save();
        return response()->json(['status' => 'success', 'message' => 'Successful update'], 200);

        abort(404);
    }

    public function analysisMovie($id)
    {
        if (preg_match('/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/', $id) !== 1) {
            return response()->json(['status' => 'faild', 'message' => 'Error in id'], 404);
        }

        $check = Movie::find($id);

        if (is_null($check)) {
            return response()->json(['status' => 'faild', 'message' => 'There is no movie found'], 404);
        }


        $viewsInDay = DB::table('recently_watcheds')
            ->selectRaw('"movie" AS type, count(recently_watcheds.movie_id) AS number, movies.m_name AS name, HOUR(recently_watcheds.created_at) AS hour')
            ->join('movies', 'movies.m_id', '=', 'recently_watcheds.movie_id')
            ->whereRaw('recently_watcheds.created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 DAY) AND CURRENT_DATE() AND movies.m_id= "' . $id . '"')
            ->groupBy('recently_watcheds.movie_id')
            ->limit(10)
            ->get();

        // Monthly
        $viewsInMonth = DB::table('recently_watcheds')
            ->selectRaw('"movie" AS type, count(recently_watcheds.movie_id) AS number, movies.m_name AS name, MONTHNAME(recently_watcheds.created_at) AS month')
            ->join('movies', 'movies.m_id', '=', 'recently_watcheds.movie_id')
            ->groupBy('recently_watcheds.movie_id')
            ->whereRaw('recently_watcheds.created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 MONTH) AND CURRENT_DATE() AND movies.m_id = "' . $id . '"')
            ->limit(10)
            ->get();

        // Yearly

        $viewsInYear = DB::table('recently_watcheds')
            ->selectRaw('"movie" AS type, count(recently_watcheds.movie_id) AS number, movies.m_name AS name, YEAR(recently_watcheds.created_at) AS year')
            ->join('movies', 'movies.m_id', '=', 'recently_watcheds.movie_id')
            ->whereRaw('recently_watcheds.created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 YEAR) AND CURRENT_DATE() AND movies.m_id = "' . $id . '"')
            ->groupBy('recently_watcheds.movie_id')
            ->limit(10)
            ->get();

        // Count Like
        $countLikeInDay = DB::table('likes')
            ->whereRaw('created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 DAY) AND CURRENT_DATE() AND movie_id = "' . $id . '"')
            ->count();

        $countLikeInMonth = DB::table('likes')
            ->whereRaw('created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 Month) AND CURRENT_DATE() AND movie_id = "' . $id . '"')
            ->count();

        $countLikeInYear = DB::table('likes')
            ->whereRaw('created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 Year) AND CURRENT_DATE() AND movie_id = "' . $id . '"')
            ->count();


        // Count Favor
        $countFavorInDay = DB::table('collection_lists')
            ->whereRaw('created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 DAY) AND CURRENT_DATE() AND movie_id = "' . $id . '"')
            ->count();

        $countFavorInMonth = DB::table('collection_lists')
            ->whereRaw('created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 Month) AND CURRENT_DATE() AND movie_id = "' . $id . '"')
            ->count();

        $countFavorInYear = DB::table('collection_lists')
            ->whereRaw('created_at BETWEEN (CURRENT_DATE() - INTERVAL 1 Year) AND CURRENT_DATE() AND movie_id = "' . $id . '"')
            ->count();



        $latestViews =  DB::table('recently_watcheds')
            ->selectRaw('users.name AS user_name, users.id AS user_id, recently_watcheds.created_at')
            ->join('movies', 'movies.m_id', '=', 'recently_watcheds.movie_id')
            ->join('users', 'users.id', '=', 'recently_watcheds.uid')
            ->whereRaw('movies.m_id = "' . $id . '"')
            ->orderBy('recently_watcheds.created_at', 'DESC')
            ->limit(20)
            ->get();


        return response()->json([
            'status' => 'success',
            'data' => [
                'views' => [
                    'day' =>  $viewsInDay,
                    'month' => $viewsInMonth,
                    'year' =>  $viewsInYear
                ],
                'like' => [
                    'day' =>  $countLikeInDay,
                    'month' => $countLikeInMonth,
                    'year' =>  $countLikeInYear
                ],
                'favor' => [
                    'day' =>  $countFavorInDay,
                    'month' => $countFavorInMonth,
                    'year' =>  $countFavorInYear
                ],
                'latest_views' => $latestViews,
                'all_views' => DB::table('recently_watcheds')->where('movie_id', $id)->count()
            ]
        ]);
    }
}
