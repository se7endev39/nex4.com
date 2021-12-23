<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\Controller;
use App\Models\MangaChapters;
use App\Models\MangaChaptersImages;
use App\Models\Tmdb;
use App\Models\Mangas;
use Auth;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use ZipArchive;
use Spatie\PdfToImage\Pdf;

class MangaController extends Controller
{

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
    public function getAllManga()
    {
        $getMangas = Mangas::orderBy('mangas.created_at', 'DESC')
            ->paginate(15);

        // Check if there is no result
        if (empty($getMangas->all())) {
            $getMangas = null;
        }
        return response()->json(
            ['data' => [
                'manga' => $getMangas,
            ]],
            200
        );
    }

    /**
     * Display the chapters of mnaga.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getAllChapters($id)
    {
        $manga = Mangas::findOrFail($id);

        // Get season
        $getChapters = DB::table('manga_chapters')
            ->select('manga_chapters.*')
            ->where('manga_chapters.manga_chapters_mid', $manga->mangas_id)
            ->orderBy('manga_chapters.manga_chapters_number', 'DESC')
            ->paginate(30);

        // Check if there is no result
        if (empty($getChapters->all())) {
            $getChapters = null;
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'chapters' => $getChapters,
            ],
        ]);
    }

    /**
     * Upload using Themoviedb API
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function mangaTmdbAPI(Request $request)
    {
        // Upload To Local Or AWS Cloud
        if ($request->cloud_type == 'local') {
            return $this->uploadMangaTmdbInfoToLocal($request);
        } elseif ($request->cloud_type == 'aws') {
            return $this->uploadMangaTmdbInfoToAWS($request);
        } else {
            return response()->json(['data' => 'Error cloud not found'], 422);
        }
    }

    /**
     *  Upload To local
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadChapters(Request $request, $id)
    {
        $request->validate([
            'chapters' => 'required',
            'chapters.*' => 'mimes:zip,pdf'

        ]);

        // Upload To Local Or AWS Cloud
        if ($request->cloud_type == 'local') {
            return $this->uploadChapterToLocal($request, $id);
        } elseif ($request->cloud_type == 'aws') {
            return $this->uploadChapterToAWS($request, $id);
        } else {
            return response()->json(['data' => 'Error cloud not found'], 422);
        }
    }

    /**
     * Upload To local Custom Function
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadMangaInfoByCustom(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'overview' => 'required',
            'year' => 'required|numeric|between:0,2030',
            'rate' => 'required|numeric|between:0,99.99',
            'genres' => 'required|max:100',
            'poster' => 'required|mimes:jpeg,jpg,png',
            'backdrop' => 'nullable|mimes:jpeg,jpg,png',
        ]);

        // Upload To Local Or AWS Cloud
        if ($request->cloud_type == 'local') {
            return $this->uploadMangaCustomInfoToLocal($request);
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
    public function mangaEdit($id)
    {
        $getMovie = DB::table('mangas')
            ->where('mangas_id', $id)
            ->first();

        if (is_null($getMovie)) {
            return response()->json(['status' => 'failed', 'message' => 'This movie have not any video, remove it and upload it again.'], 422);
        }
        return response()->json([
            'data' => [
                'manga' => $getMovie,
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

        $update = Mangas::find($request->id);

        if (is_null($update)) {
            return response()->json(['status' => 'faild', 'message' => 'There is no movie found'], 404);
        }

        // Update AWS Movie

        if ($update->mangas_cloud == 'local') {
            $update->mangas_name = $request->name;
            $update->mangas_year = $request->year;
            $update->mangas_desc = $request->overview;
            if ($request->genres !== 'undefined') {
                $update->mangas_genre = $request->genres;
            }
            $update->mangas_rate = $request->rate;

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

                $update->mangas_poster = $posterName;
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

                $update->mangas_backdrop = $backdropName;
            }

            $update->save();
        } else {
            $update->mangas_name = $request->name;
            $update->mangas_year = $request->year;
            $update->mangas_desc = $request->overview;
            if ($request->genres !== 'undefined') {
                $update->mangas_genre = $request->genres;
            }
            $update->mangas_rate = $request->rate;

            if (!empty($request->file('poster'))) {
                $posterName = Str::random(20) . '.jpg';
                $posterEncode = \Image::make($request->file('poster'))->encode('jpg');
                Storage::disk('s3')->put('posters/' . $posterName, $posterEncode->__toString());
                $update->mangas_poster = $posterName;
            }
            if (!empty($request->file('backdrop'))) {
                $backdropName = Str::random(20) . '.jpg';
                $backdropEncode = \Image::make($request->file('backdrop'))->encode('jpg');
                Storage::disk('s3')->put('backdrops/' . $backdropName, $backdropEncode->__toString());
                $update->mangas_backdrop = $backdropName;
            }

            $update->save();
        }

        return response()->json(['status' => 'success', 'message' => 'Successful update ' . $request->name]);
    }

    /**
     * Delete the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function deleteManga(Request $request, $id)
    {
        $delete = Mangas::find($id);

        if (is_null($delete)) {
            return response()->json(['status' => 'faild', 'message' => 'There is no manga found'], 404);
        }

        $delete->delete();

        return response()->json(['status' => 'success', 'message' => 'successful delete manga']);
    }

    /**
     * Search manga by name or id
     *
     * @param  int $id
     * @return Response
     */
    public function searchManga(Request $request)
    {
        $request->validate([
            'query' => 'required',
        ]);

        $getMovie = Mangas::where('mangas_name', 'like', $request->input('query') . '%')
            ->get();

        if ($getMovie->isEmpty()) {
            $getMovie = null;
        }

        return response()->json(
            ['data' => [
                'manga' => $getMovie,
            ]],
            200
        );
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
            $check = Mangas::findOrFail($value['id']);

            $check->mangas_users_only = $request->input('users_only');
            $check->save();
            array_push($array, ['key' => $value['key'], 'show' => $request->input('users_only')]);
        }

        return response(['status' => 'success', 'message' => 'Successful update', 'list' => $array], 200);
    }



    /**
     * Upload Info Of Movie To Local Cloud
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadMangaTmdbInfoToLocal($request)
    {

        // Check if there is api of moviedb in config file
        $getApi = Tmdb::find(1);

        if ($getApi->api === null || empty($getApi->api)) {
            return response()->json(['status' => 'failed', 'message' => 'There is no api key in config'], 422);
        }


        $client = new \GuzzleHttp\Client();

        // Get details from themoviedb
        $detils = 'https://api.themoviedb.org/3/tv/' . $request->id . '?api_key=' . $getApi->api . '&language=' . $getApi->language;

        // Check if there movie or not
        try {
            $res_movies = $client->get($detils)->getBody();
            $data_movies = json_decode($res_movies, true);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return response()->json(['status' => 'failed', 'message' => 'There is no movie like this id.'], 422);
        }

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
        $store = new Mangas();
        $store->mangas_name = $data_movies['name'];
        $store->mangas_desc = $data_movies['overview'];
        $store->mangas_year = substr($data_movies['first_air_date'], 0, 4);
        $store->mangas_rate = ($data_movies['vote_average'] === null ? '0' : $data_movies['vote_average']);
        $store->mangas_backdrop = $newBackdropName;
        $store->mangas_poster = $newPosterName;
        $store->mangas_cloud = 'local';
        foreach ($data_movies['genres'] as $key => $value) {
            $genre1[] = $value['name'];
            $genre2 = implode(", ", $genre1);
        }
        $store->mangas_genre = $genre2;
        $store->save();


        return response()->json(['status' => 'success', 'message' => 'Successful store manga details in database', 'id' => $store->mangas_id], 200);
    }


    public function uploadMangaTmdbInfoToAWS($request)
    {
        // Check if there is api of moviedb in config file
        $getApi = Tmdb::find(1);
        if ($getApi->api === null || empty($getApi->api)) {
            return response()->json(['status' => 'failed', 'message' => 'There is no api key in config'], 422);
        }

        $client = new \GuzzleHttp\Client();

        // Get details from themoviedb
        $detils = 'https://api.themoviedb.org/3/tv/' . $request->id . '?api_key=' . $getApi->api  . '&language=' . $getApi->language;

        // Check if there movie or not
        try {
            $res_movies = $client->get($detils)->getBody();
            $data_movies = json_decode($res_movies, true);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return response()->json(['status' => 'failed', 'message' => 'There is no movie like this id.'], 422);
        }

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
        $store = new Mangas();
        $store->mangas_name = $data_movies['name'];
        $store->mangas_desc = $data_movies['overview'];
        $store->mangas_year = substr($data_movies['first_air_date'], 0, 4);
        $store->mangas_rate = ($data_movies['vote_average'] === null ? '0' : $data_movies['vote_average']);
        $store->mangas_backdrop = $name_backdrop;
        $store->mangas_poster = $name_poster;
        $store->mangas_cloud = 'aws';
        foreach ($data_movies['genres'] as $key => $value) {
            $genre1[] = $value['name'];
            $genre2 = implode(", ", $genre1);
        }
        $store->mangas_genre = $genre2;
        $store->save();


        return response()->json(['status' => 'success', 'message' => 'Successful store manga details in database', 'id' => $store->mangas_id], 200);
    }


    public function uploadMangaCustomInfoToLocal($request)
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

        if ($request->has('backdrop')) {
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
        }

        //Store data
        $store = new Mangas();
        $store->mangas_name = $request->name;
        $store->mangas_desc = $request->overview;
        $store->mangas_year = $request->year;
        $store->mangas_rate = $request->rate;
        if ($request->has('backdrop')) {
            $store->mangas_backdrop = $newBackdropName;
        }
        $store->mangas_poster = $newPosterName;
        $store->mangas_genre = str_replace(",", "-", $request->genres);
        $store->mangas_cloud = 'local';

        $store->save();

        return response()->json(['status' => 'success', 'message' => 'Successful store manga details in database', 'id' => $store->manga_id], 200);
    }


    public function uploadMovieCustomInfoToAWS($request)
    {
        // Upload images to s3
        $name_poster = md5($request->file('poster')->getClientOriginalName() . microtime()) . '.jpg';
        $name_backdrop = md5($request->file('backdrop')->getClientOriginalName() . microtime()) . '.jpg';
        if ($request->has('poster')) {
            $img1 = \Image::make($request->poster)->encode('jpg');
            Storage::disk('s3')->put('posters/' . $name_poster, $img1->__toString());
        }
        if ($request->has('backdrop')) {
            $img2 = \Image::make($request->backdrop)->encode('jpg');
            Storage::disk('s3')->put('backdrops/' . $name_backdrop, $img2->__toString());
        }

        //Store data
        $store = new Mangas();
        $store->mangas_name = $request->name;
        $store->mangas_desc = $request->overview;
        $store->mangas_year = $request->year;
        $store->mangas_rate = $request->rate;
        if ($request->has('backdrop')) {
            $store->mangas_backdrop = $name_backdrop;
        }
        if ($request->has('poster')) {
            $store->mangas_poster = $name_poster;
        }
        $store->mangas_genre = str_replace(",", "-", $request->genres);
        $store->mangas_cloud = 'aws';

        $store->save();

        return response()->json(['status' => 'success', 'message' => 'Successful store movie details in database', 'id' => $store->m_id], 200);
    }


    public function uploadChapterToLocal($request, $id)
    {
        if ($request->hasfile('chapters')) {
            $manga = Mangas::findOrFail($id);
            foreach ($request->file('chapters') as $key => $file) {
                // Get name and number from file
                $chapter_remove_dot = strtok($file->getClientOriginalName(), '.');
                $chapter_name = preg_replace('/[^a-zA-Z]+/', '', $chapter_remove_dot);
                $chapter_number = preg_replace('/[^0-9]/', '', $chapter_remove_dot);
                if ($file->getClientOriginalExtension() === 'zip') {
                    // The for images of zip
                    $zip = new ZipArchive();
                    if ($zip->open($file) === TRUE) {
                        $dir_file = storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number;
                        $zip->extractTo($dir_file);

                        // Create chapter 
                        $create_chapter = new MangaChapters();
                        $create_chapter->manga_chapters_name = $chapter_name;
                        $create_chapter->manga_chapters_number = $chapter_number;
                        $create_chapter->manga_chapters_cloud = 'local';
                        $create_chapter->manga_chapters_poster = '/storage/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/' . File::files($dir_file)[0]->getFilename();
                        $create_chapter->manga_chapters_mid = $manga->mangas_id;
                        $create_chapter->save();

                        // Get all files 
                        $pages_files = collect(File::allFiles($dir_file));

                        foreach ($pages_files as $pfile) {
                            $create_chapter_pages = new MangaChaptersImages();
                            $create_chapter_pages->manga_chapters_images_path = '/storage/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/' . $pfile->getFilename();
                            $create_chapter_pages->manga_chapters_images_cloud = 'local';
                            $create_chapter_pages->manga_chapters_images_mcid = $create_chapter->manga_chapters_id;
                            $create_chapter_pages->manga_chapters_images_page = strtok($pfile->getFilename(), '.');
                            $create_chapter_pages->save();
                        }
                    }
                    $zip->close();
                } elseif ($file->getClientOriginalExtension() === 'pdf') {

                    // Dir create and extract
                    if (!File::exists(storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_'))) {
                        File::makeDirectory(storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_'));
                    }
                    File::makeDirectory(storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number);

                    // Create chapter 
                    $create_chapter = new MangaChapters();
                    $create_chapter->manga_chapters_name = $chapter_name;
                    $create_chapter->manga_chapters_number = $chapter_number;
                    $create_chapter->manga_chapters_cloud = 'local';
                    $create_chapter->manga_chapters_poster = '/storage/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/1.jpg';
                    $create_chapter->manga_chapters_mid = $manga->mangas_id;
                    $create_chapter->save();

                    // The for pdf chapters
                    $pdf = new Pdf($file);

                    $imagick = new \Imagick();
                    $imagick->pingImage($file);
                    $pagesCount = $imagick->getNumberImages();
                    for ($i = 1; $i <= $pagesCount; $i++) {
                        $imageName = $i . '.jpg';
                        $pdf->setPage($i)->saveImage(storage_path('/app/public/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/' . $imageName));

                        // Save images
                        $create_chapter_pages = new MangaChaptersImages();
                        $create_chapter_pages->manga_chapters_images_path = '/storage/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/' . $imageName;
                        $create_chapter_pages->manga_chapters_images_cloud = 'local';
                        $create_chapter_pages->manga_chapters_images_mcid = $create_chapter->manga_chapters_id;
                        $create_chapter_pages->manga_chapters_images_page = $i;
                        $create_chapter_pages->save();
                    }
                }
            }
        }
        return response()->json(['status' => 'success', 'message' => 'Successful store chapter'], 200);
    }

    public function uploadChapterToAWS($request, $id)
    {


        if ($request->hasfile('chapters')) {
            $manga = Mangas::findOrFail($id);
            foreach ($request->file('chapters') as $key => $file) {
                // Get name and number from file
                $chapter_remove_dot = strtok($file->getClientOriginalName(), '.');
                $chapter_name = preg_replace('/[^a-zA-Z]+/', '', $chapter_remove_dot);
                $chapter_number = preg_replace('/[^0-9]/', '', $chapter_remove_dot);
                if ($file->getClientOriginalExtension() === 'zip') {
                    // The for images of zip
                    $zip = new ZipArchive();
                    if ($zip->open($file) === TRUE) {
                        $dir_file = storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number;
                        $zip->extractTo($dir_file);

                        // Create chapter 
                        $create_chapter = new MangaChapters();
                        $create_chapter->manga_chapters_name = $chapter_name;
                        $create_chapter->manga_chapters_number = $chapter_number;
                        $create_chapter->manga_chapters_cloud = 'aws';
                        $create_chapter->manga_chapters_poster = '/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/' . File::files($dir_file)[0]->getFilename();
                        $create_chapter->manga_chapters_mid = $manga->mangas_id;
                        $create_chapter->save();

                        // Get all files 
                        $pages_files = File::files($dir_file);
                        foreach ($pages_files as $pfile) {
                            $create_chapter_pages = new MangaChaptersImages();
                            $create_chapter_pages->manga_chapters_images_path = '/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/' . $pfile->getFilename();
                            $create_chapter_pages->manga_chapters_images_cloud = 'aws';
                            $create_chapter_pages->manga_chapters_images_mcid = $create_chapter->manga_chapters_id;
                            $create_chapter_pages->manga_chapters_images_page = strtok($pfile->getFilename(), '.');
                            $create_chapter_pages->save();

                            // Upload to s3
                            $content = File::get($pfile);
                            Storage::disk('s3')->put('/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/'  . $pfile->getFilename(), $content);
                        }
                    }
                    $zip->close();
                } elseif ($file->getClientOriginalExtension() === 'pdf') {

                    // Dir create and extract
                    if (!File::exists(storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_'))) {
                        File::makeDirectory(storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_'));
                    }
                    $chapter_dir = storage_path() . '/app/public/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number;
                    File::makeDirectory($chapter_dir);

                    // Create chapter 
                    $create_chapter = new MangaChapters();
                    $create_chapter->manga_chapters_name = $chapter_name;
                    $create_chapter->manga_chapters_number = $chapter_number;
                    $create_chapter->manga_chapters_cloud = 'aws';
                    $create_chapter->manga_chapters_poster = '/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/1.jpg';
                    $create_chapter->manga_chapters_mid = $manga->mangas_id;
                    $create_chapter->save();

                    // The for pdf chapters
                    $pdf = new Pdf($file);

                    $imagick = new \Imagick();
                    $imagick->pingImage($file);
                    $pagesCount = $imagick->getNumberImages();
                    for ($i = 1; $i <= $pagesCount; $i++) {
                        $imageName = $i . '.jpg';
                        $pdf->setPage($i)->saveImage($chapter_dir . '/' . $imageName);

                        // Save images
                        $create_chapter_pages = new MangaChaptersImages();
                        $create_chapter_pages->manga_chapters_images_path = '/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/' . $imageName;
                        $create_chapter_pages->manga_chapters_images_cloud = 'aws';
                        $create_chapter_pages->manga_chapters_images_mcid = $create_chapter->manga_chapters_id;
                        $create_chapter_pages->manga_chapters_images_page = $i;
                        $create_chapter_pages->save();

                        // Upload to s3
                        $content = File::get($chapter_dir . '/' . $imageName);
                        Storage::disk('s3')->put('/manga/' . Str::slug($manga->mangas_name, '_') . '/' . $chapter_number . '/'  . $imageName, $content);
                    }

                    // Delete dir
                    File::deleteDirectory($chapter_dir);
                }
            }
        }
        return response()->json(['status' => 'success', 'message' => 'Successful store chapter'], 200);


        return response()->json(['status' => 'success', 'message' => 'Successful store chapter'], 200);
    }

    public function availableChapter(Request $request, $id)
    {
        $array = [];
        foreach ($request->list as $value) {
            $chapter = MangaChapters::findOrFail($value['id']);
            $chapter->show = $chapter->show ? 0 : 1;
            $chapter->save();
            array_push($array, ['key' => $value['key'], 'show' =>  $chapter->show]);
        }

        return response(['status' => 'success', 'message' => 'Successful update chapters', 'list' => $array], 200);
    }

    public function deleteChapters(Request $request, $id)
    {
        $array = [];
        foreach ($request->list as $value) {
            MangaChapters::findOrFail($value['id'])->delete();
        }

        return response(['status' => 'success', 'message' => 'Successful update chapters', 'list' => $array], 200);
    }

    public function chpaterEdit($id)
    {
        $cchapter = MangaChapters::findOrFail($id);
        $chapters = MangaChapters::with('images')
            ->where('manga_chapters.manga_chapters_id', $cchapter->manga_chapters_id)
            ->first();
        return response(['status' => 'success', 'data' => $chapters], 200);
    }

    public function chapterUpdate(Request $request, $id)
    {
        $request->validate([
            'number' => 'required|numeric'
        ]);
        $chapter = MangaChapters::findOrFail($id);
        $chapter->manga_chapters_name = $request->input('name');
        $chapter->manga_chapters_number = $request->input('number');
        $chapter->save();

        return response(['status' => 'success', 'message' => 'Successful update chapters'], 200);
    }
}
