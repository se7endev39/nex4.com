<?php

namespace App\Http\Controllers\Users;

use App\Models\Episode;
use App\Helpers\Helpers;
use App\Http\Controllers\Controller;
use App\Models\Recently_watched;
use App\Models\Report;
use App\Models\Series;
use App\Models\Subtitle;
use App\Models\Video;
use App\Models\Live_tv;
use Carbon\Carbon;
use App;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Aws\CloudFront\CloudFrontClient;

class VideoPlayerController extends Controller
{


    /**
     * Undocumented function
     *
     * @param [type] $id
     * @return void
     */
    public function getMovieVideo(Request $request)
    {
        $request->validate([
            'movie_id' => 'required|uuid',
        ]);

        // Check this movie is exist
        $checkMovie = DB::table('movies')
            ->select('m_id AS id', 'm_cloud AS cloud', 'm_name AS name', 'm_desc AS overview', 'm_poster AS poster', 'm_runtime AS runtime', 'm_year AS year', 'm_genre AS genre', 'show', 'recently_watcheds.current_time', 'recently_watcheds.duration_time', 'm_category AS category')
            ->leftJoin('recently_watcheds', function ($join) {
                $join->on('recently_watcheds.movie_id', '=', 'movies.m_id')
                    ->where('recently_watcheds.uid', '=', Auth::id());
            })
            ->where('m_id', $request->input('movie_id'))
            ->first();

        if (is_null($checkMovie)) {
            return response()->json(['status' => 404], 404);
        }



        $getVideo = Video::select('video_format', 'video_cloud', 'resolution', 'video_url', 'embed_code', 'embed_sites.name AS embed_name', 'embed_sites.image AS embed_image', 'embed_sites.id AS embed_id')
            ->leftJoin('embed_sites', 'embed_sites.id', '=', 'videos.embed_id')
            ->where('movie_id', $checkMovie->id)
            ->get();


        $getSchedulesAds = DB::table('ads_schedules')
            ->select('ads_schedules.offset', 'ads_schedules.id AS schedules_id', 'ads.id AS ads_id', 'ads_schedules.movie_id', 'ads.ad_name', 'ads.client', 'ads.tags')
            ->join('ads', 'ads.id', '=', 'ads_schedules.ads_id')
            ->where('ads_schedules.movie_id', $checkMovie->id)
            ->get();
        $getSubtitle = Subtitle::where('movie_id', $checkMovie->id)->get();

        // Get Similar and Create Playlist
        $getSimilarMovies = DB::table('movies')
            ->selectRaw('m_id AS id, m_name AS name,m_poster AS poster, m_cloud AS cloud, m_desc AS overview, m_genre AS genre, created_at')
            ->where('m_category', '=', $checkMovie->category)
            ->where('m_id', '<>', $checkMovie->id)
            ->limit(7)
            ->get();

        $videoArray = [];
        $adsArray = [];
        $subArray = [];

        if ($getVideo->isEmpty()) {
            $getVideo = null;
        } else {
            foreach ($getVideo as $key => $videoValue) {
                if ($videoValue->video_format == 'hls') {
                    if ($videoValue->video_cloud === 'local') {
                        $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                    } elseif ($videoValue->video_cloud === 'link') {
                        $videoArray[$key]['file'] = $videoValue->video_url;
                    } else {
                        $videoArray[$key]['file'] = config('aws.cloudfront_private_url')  . '/' . $videoValue->video_url;
                    }

                    $videoArray[$key]['type'] = 'application/vnd.apple.mpegurl';
                } elseif ($videoValue->video_format == 'mp4') {
                    if ($videoValue->video_cloud === 'local') {
                        $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                    } elseif ($videoValue->video_cloud === 'link') {
                        $videoArray[$key]['file'] = $videoValue->video_url;
                    } else {
                        $videoArray[$key]['file'] = config('aws.cloudfront_private_url') . '/' . $videoValue->video_url;
                    }
                    if ($videoValue->resolution == '4k') {
                        $videoArray[$key]['label'] = '4K';
                    } else {
                        $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                    }
                    $videoArray[$key]['type'] = 'video/mp4';
                } elseif ($videoValue->video_format === 'embed') {
                    if ($getSimilarMovies->isEmpty()) {
                        $getSimilarMovies = null;
                    } else {
                        foreach ($getSimilarMovies as $key => $value) {
                            if ($value->cloud === 'local') {
                                $value->poster = url('/') . '/storage/posters/600_' . $value->poster;
                            } else {
                                $value->poster = config('aws.cloudfront_public_url') . '/posters/' . $value->poster;
                            }
                        }
                    }

                    foreach ($getVideo as $keyEmbed => $videoValueEmbed) {
                        $videoArray[$keyEmbed]['embed_provider_logo'] = url('/') . '/storage/production/' . $videoValueEmbed->embed_image;
                        $videoArray[$keyEmbed]['embed_provider_name'] = $videoValueEmbed->embed_name;
                        $videoArray[$keyEmbed]['embed_code'] = $videoValueEmbed->embed_code;
                        $videoArray[$keyEmbed]['embed_id'] = $keyEmbed;
                    }

                    return response()->json(
                        [
                            'status' => 'success',
                            'data' => [
                                'playlist' => $videoArray,
                                'suggestion' => $getSimilarMovies,
                                'current_movie' => $checkMovie,
                                'embed' => true
                            ]
                        ]
                    );
                } else {
                    if ($videoValue->resolution == '4k') {
                        $videoArray[$key]['label'] = '4K';
                    } else {
                        $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                    }
                    $videoArray[$key]['file'] = $videoValue->video_url;
                }
            }
        }


        if ($getSchedulesAds->isEmpty()) {
            $getSchedulesAds = null;
        } else {
            foreach ($getSchedulesAds as $key => $adsValue) {
                $adsArray[$key] = [
                    'offset' => $adsValue->offset . '%',
                    'tag' => $adsValue->tags
                ];
            }
        }

        if ($getSubtitle->isEmpty()) {
            $getSubtitle = null;
        } else {
            foreach ($getSubtitle as $key => $subValue) {
                $subArray[] = [
                    'file' => url('/') . $subValue->name,
                    'label' => ucwords($subValue->language),
                    "kind" => "captions"
                ];
            }
        }

        if ($checkMovie->cloud === 'local') {
            $checkMovie->poster = url('/') . '/storage/posters/600_' . $checkMovie->poster;
        } else {
            $checkMovie->poster = config('aws.cloudfront_public_url') . '/posters/' . $checkMovie->poster;
        }

        $playlist[0] = [
            'VideoNumber' => 1,
            'title' => $checkMovie->name,
            'description' => $checkMovie->overview,
            'image' => $checkMovie->poster,
            'adschedule' => $adsArray,
            'sources' => $videoArray,
            'tracks' => $subArray,
            'withCredentials' => true

        ];


        if ($getSimilarMovies->isEmpty()) {
            $getSimilarMovies = null;
        } else {
            foreach ($getSimilarMovies as $key => $value) {
                $getVideo = Video::select('video_format', 'video_cloud', 'resolution', 'video_url')->where('movie_id', $value->id)->get();
                $getSchedulesAds = DB::table('ads_schedules')
                    ->select('ads_schedules.offset', 'ads_schedules.id AS schedules_id', 'ads.id AS ads_id', 'ads_schedules.movie_id', 'ads.ad_name', 'ads.client', 'ads.tags')
                    ->join('ads', 'ads.id', '=', 'ads_schedules.ads_id')
                    ->where('ads_schedules.movie_id', $value->id)
                    ->get();
                $getSubtitle = Subtitle::where('movie_id', $value->id)->get();
                $videoArray = [];
                $subArray = [];

                if ($getVideo->isEmpty()) {
                    $getVideo = null;
                } else {
                    foreach ($getVideo as $key => $videoValue) {
                        if ($videoValue->video_format == 'hls') {
                            if ($videoValue->video_cloud === 'local') {
                                $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                            } elseif ($videoValue->video_cloud === 'link') {
                                $videoArray[$key]['file'] = $videoValue->video_url;
                            } else {
                                $videoArray[$key]['file'] = config('aws.cloudfront_private_url') . '/' . $videoValue->video_url;
                            }

                            $videoArray[$key]['type'] = 'application/vnd.apple.mpegurl';
                        } elseif ($videoValue->video_format == 'mp4') {
                            if ($videoValue->video_cloud === 'local') {
                                $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                            } elseif ($videoValue->video_cloud === 'link') {
                                $videoArray[$key]['file'] = $videoValue->video_url;
                            } else {
                                $videoArray[$key]['file'] = config('aws.cloudfront_private_url') . '/' . $videoValue->video_url;
                            }
                            if ($videoValue->resolution == '4k') {
                                $videoArray[$key]['label'] = '2160p';
                            } else {
                                $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                            }
                            $videoArray[$key]['type'] = 'video/mp4';
                        } else {
                            if ($videoValue->resolution == '4k') {
                                $videoArray[$key]['label'] = '2160p';
                            } else {
                                $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                            }
                            $videoArray[$key]['file'] = $videoValue->video_url;
                        }
                    }
                }

                if ($getSchedulesAds->isEmpty()) {
                    $getSchedulesAds = null;
                } else {
                    foreach ($getSchedulesAds as $key => $adsValue) {
                        $adsArray[$key] = [
                            'offset' => $adsValue->offset . '%',
                            'tag' => $adsValue->tags
                        ];
                    }
                }

                if ($getSubtitle->isEmpty()) {
                    $getSubtitle = null;
                } else {
                    foreach ($getSubtitle as $key => $subValue) {
                        $subArray[] = [
                            'file' => url('/') . $subValue->name,
                            'label' => ucwords($subValue->language),
                            "kind" => "captions"
                        ];
                    }
                }

                if ($value->cloud === 'local') {
                    $value->poster = url('/') . '/storage/posters/600_' . $value->poster;
                } else {
                    $value->poster = config('aws.cloudfront_public_url') . '/posters/' . $value->poster;
                }

                $playlist[] = [
                    'title' => $value->name,
                    'VideoNumber' => $key + 1,
                    'description' => $value->overview,
                    'image' => $value->poster,
                    'adschedule' => $adsArray,
                    'sources' => $videoArray,
                    'tracks' => $subArray,
                    'withCredentials' => true

                ];
            }
        }


        return response()->json(
            [
                'status' => 'success',
                'data' => [
                    'playlist' => [
                        'playlist' => $playlist
                    ],
                    'suggestion' => $getSimilarMovies,
                    'current_movie' => $checkMovie,
                    'embed' => false
                ]
            ]
        );
    }


    /**
     * Get Episode Video
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getEpisodeVideo(Request $request)
    {
        $request->validate([
            'episode_id' => 'nullable|uuid',
            'series_id' => 'nullable|uuid',
        ]);




        if ($request->has('series_id') && !$request->has('episode_id')) {
            // Check if the series is exist already
            $checkAlreadySeries = Series::where('t_id', $request->input('series_id'))->first();
            $getFirstSeason = Episode::where('series_id', $request->input('series_id'))->first();

            if (is_null($checkAlreadySeries)) {
                return response()->json(['status' => 404], 404);
            }

            // Get Season One
            $getSeasonOne = DB::table('episodes')
                ->selectRaw('episodes.*, recently_watcheds.current_time, recently_watcheds.duration_time')
                ->leftJoin('recently_watcheds', function ($join) {
                    $join->on('recently_watcheds.episode_id', '=', 'episodes.id')
                        ->where('recently_watcheds.uid', '=', Auth::id());
                })
                ->where('episodes.series_id', $request->input('series_id'))
                ->where('episodes.season_number', $getFirstSeason->season_number)
                ->where('episodes.show', '<>', 0)
                ->orderByRaw('episodes.season_number, episode_number + 0 ASC')
                ->get();


            // Get All Seasons
            $getAllSeason = DB::table('episodes')
                ->select('season_number', 'series_id')
                ->where('series_id', $request->input('series_id'))
                ->where('show', '<>', 0)
                ->groupBy('season_number', 'series_id')
                ->orderBy('season_number', 'ASC')
                ->get();


            // SORT
            $season = [];
            $playlist = [];

            // Check if there is no cast
            if ($getSeasonOne->isEmpty()) {
                $season = null;
            } else {

                // Sort season and episode
                foreach ($getSeasonOne as $key => $value) {

                    $getVideo = Video::select('video_format', 'video_cloud', 'resolution', 'video_url', 'embed_code', 'embed_sites.name AS embed_name', 'embed_sites.image AS embed_image', 'embed_sites.id AS embed_id')
                        ->leftJoin('embed_sites', 'embed_sites.id', '=', 'videos.embed_id')
                        ->where('episode_id', $value->id)
                        ->get();

                    $getSchedulesAds = DB::table('ads_schedules')
                        ->select('ads_schedules.offset', 'ads_schedules.id AS schedules_id', 'ads.id AS ads_id', 'ads_schedules.episode_id', 'ads.ad_name', 'ads.client', 'ads.tags')
                        ->join('ads', 'ads.id', '=', 'ads_schedules.ads_id')
                        ->where('ads_schedules.episode_id', $value->id)
                        ->get();
                    $getSubtitle = Subtitle::where('episode_id', $value->id)->get();

                    $videoArray = [];
                    $adsArray = [];
                    $subArray = [];


                    if ($getVideo->isEmpty()) {
                        $getVideo = null;
                    } else {
                        foreach ($getVideo as $key => $videoValue) {
                            if ($videoValue->video_format == 'hls') {
                                if ($videoValue->video_cloud === 'local') {
                                    $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                                } elseif ($videoValue->video_cloud === 'link') {
                                    $videoArray[$key]['file'] = $videoValue->video_url;
                                } else {
                                    $videoArray[$key]['file'] = config('aws.cloudfront_private_url') . '/' . $videoValue->video_url;
                                }

                                $videoArray[$key]['type'] = 'application/vnd.apple.mpegurl';
                            } elseif ($videoValue->video_format == 'mp4') {
                                if ($videoValue->video_cloud === 'local') {
                                    $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                                } elseif ($videoValue->video_cloud === 'link') {
                                    $videoArray[$key]['file'] = $videoValue->video_url;
                                } else {
                                    $videoArray[$key]['file'] = config('aws.cloudfront_private_url') . '/' . $videoValue->video_url;
                                }

                                if ($videoValue->resolution == '4k') {
                                    $videoArray[$key]['label'] = '4K';
                                } else {
                                    $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                                }
                                $videoArray[$key]['type'] = 'video/mp4';
                            } elseif ($videoValue->video_format === 'embed') {

                                foreach ($getSeasonOne as $keyCurrentEmbed => $valueCurrentEmbed) {
                                    if ($valueCurrentEmbed->id == $request->input('episode_id')) {
                                        $current_episode = $valueCurrentEmbed;
                                    }
                                    if ($valueCurrentEmbed->cloud === 'local') {
                                        $valueCurrentEmbed->backdrop = url('/') . '/storage/backdrops/300_' . $value->backdrop;
                                    } else {
                                        $valueCurrentEmbed->backdrop = config('aws.cloudfront_public_url') . '/backdrops/' . $value->backdrop;
                                    }
                                }

                                foreach ($getVideo as $keyEmbed => $videoValueEmbed) {

                                    $videoArray[$keyEmbed]['embed_provider_logo'] = url('/') . '/storage/production/' . $videoValueEmbed->embed_image;
                                    $videoArray[$keyEmbed]['embed_provider_name'] = $videoValueEmbed->embed_name;
                                    $videoArray[$keyEmbed]['embed_code'] = $videoValueEmbed->embed_code;
                                    $videoArray[$keyEmbed]['embed_id'] = $keyEmbed;
                                }


                                $seasonArrayEmbed = [];
                                if ($getSeasonOne->isEmpty()) {
                                    $seasonArrayEmbed = null;
                                } else {
                                    foreach ($getSeasonOne as $keySeason => $valueSeason) {
                                        array_push($seasonArrayEmbed, $valueSeason);
                                    }
                                }

                                return response()->json(
                                    [
                                        'status' => 'success',
                                        'data' => [
                                            'playlist' => $videoArray,
                                            'series' => $checkAlreadySeries,
                                            'seasons' => $getAllSeason,
                                            'current_season' => $getSeasonOne,
                                            'current_episode' => $seasonArrayEmbed[0],
                                            'embed' => true
                                        ]
                                    ]
                                );
                            } else {
                                if ($videoValue->resolution == '4k') {
                                    $videoArray[$key]['label'] = '4K';
                                } else {
                                    $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                                }
                                $videoArray[$key]['file'] = $videoValue->video_url;
                            }
                        }
                    }

                    if ($getSchedulesAds->isEmpty()) {
                        $getSchedulesAds = null;
                    } else {
                        foreach ($getSchedulesAds as $key => $adsValue) {
                            $adsArray[$key] = [
                                'offset' => $adsValue->offset . '%',
                                'tag' => $adsValue->tags
                            ];
                        }
                    }

                    if ($getSubtitle->isEmpty()) {
                        $getSubtitle = null;
                    } else {
                        foreach ($getSubtitle as $key => $subValue) {
                            $subArray[] = [
                                'file' => url('/') . $subValue->name,
                                'label' => ucwords($subValue->language),
                                "kind" => "captions"
                            ];
                        }
                    }

                    if ($value->cloud === 'local') {
                        $value->backdrop = url('/') . '/storage/backdrops/300_' . $value->backdrop;
                    } else {
                        $value->backdrop = config('aws.cloudfront_public_url') . '/backdrops/' . $value->backdrop;
                    }

                    $playlist[] = [
                        'title' => $value->name,
                        'VideoNumber' => $value->episode_number,
                        'description' => $value->overview,
                        'image' => $value->backdrop,
                        'adschedule' => $adsArray,
                        'sources' => $videoArray,
                        'tracks' => $subArray,
                        'withCredentials' => true
                    ];
                }
            }


            $seasonArray = [];
            if ($getSeasonOne->isEmpty()) {
                $seasonArray = null;
            } else {
                foreach ($getSeasonOne as $key => $value) {
                    array_push($seasonArray, $value);
                }
            }

            return response()->json(
                [
                    'status' => 'success',
                    'data' => [
                        'playlist' => [
                            'playlist' => $playlist
                        ],
                        'series' => $checkAlreadySeries,
                        'seasons' => $getAllSeason,
                        'current_season' => $getSeasonOne,
                        'current_episode' => $seasonArray[0],
                        'embed' => false
                    ]
                ]
            );
        }


        // Get Episode When Click To Episode
        if ($request->has('series_id') && $request->has('episode_id')) {

            // Check if the series is exist already
            $checkAlreadyEpisode = Episode::select('series.t_name AS name', 'episodes.*')
                ->join('series', 'series.t_id', 'episodes.series_id')
                ->where('episodes.id', $request->input('episode_id'))
                ->first();

            if (is_null($checkAlreadyEpisode)) {
                return response()->json(['status' => 404], 404);
            }

            // Get Season One
            $getSeasonOne = DB::table('episodes')
                ->selectRaw('episodes.*, recently_watcheds.current_time, recently_watcheds.duration_time')
                ->leftJoin('recently_watcheds', function ($join) {
                    $join->on('recently_watcheds.episode_id', '=', 'episodes.id')
                        ->where('recently_watcheds.uid', '=', Auth::id());
                })
                ->where('episodes.series_id', $request->input('series_id'))
                ->where('episodes.season_number', $checkAlreadyEpisode->season_number)
                ->where('episodes.show', '<>', 0)
                ->orderByRaw('episodes.season_number, episode_number + 0 ASC')
                ->get();

            $getAllSeason = DB::table('episodes')
                ->selectRaw('season_number, series_id')
                ->where('series_id', $request->input('series_id'))
                ->where('show', '<>', 0)
                ->groupBy('season_number', 'series_id')
                ->orderBy('season_number', 'ASC')
                ->get();

            // SORT

            $season = [];
            $playlist = [];
            $current_episode = null;

            // Check if there is no cast
            if ($getSeasonOne->isEmpty()) {
                $season = null;
            } else {

                // Sort season and episode
                foreach ($getSeasonOne as $key => $value) {
                    $getVideo = Video::select('video_format', 'video_cloud', 'resolution', 'video_url', 'embed_code', 'embed_sites.name AS embed_name', 'embed_sites.image AS embed_image', 'embed_sites.id AS embed_id')
                        ->leftJoin('embed_sites', 'embed_sites.id', '=', 'videos.embed_id')
                        ->where('episode_id', $value->id)
                        ->get();

                    $getSchedulesAds = DB::table('ads_schedules')
                        ->select('ads_schedules.offset', 'ads_schedules.id AS schedules_id', 'ads.id AS ads_id', 'ads_schedules.episode_id', 'ads.ad_name', 'ads.client', 'ads.tags')
                        ->join('ads', 'ads.id', '=', 'ads_schedules.ads_id')
                        ->where('ads_schedules.episode_id', $value->id)
                        ->get();
                    $getSubtitle = Subtitle::where('episode_id', $value->id)->get();
                    $videoArray = [];
                    $adsArray = [];
                    $subArray = [];


                    if ($getVideo->isEmpty()) {
                        $getVideo = null;
                    } else {
                        foreach ($getVideo as $key => $videoValue) {
                            if ($videoValue->video_format == 'hls') {
                                if ($videoValue->video_cloud === 'local') {
                                    $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                                } elseif ($videoValue->video_cloud === 'link') {
                                    $videoArray[$key]['file'] = $videoValue->video_url;
                                } else {
                                    $videoArray[$key]['file'] = config('aws.cloudfront_private_url') . '/' . $videoValue->video_url;
                                }

                                $videoArray[$key]['type'] = 'application/vnd.apple.mpegurl';
                            } elseif ($videoValue->video_format == 'mp4') {

                                if ($videoValue->video_cloud === 'local') {
                                    $videoArray[$key]['file'] = url('/') . $videoValue->video_url;
                                } elseif ($videoValue->video_cloud === 'link') {
                                    $videoArray[$key]['file'] = $videoValue->video_url;
                                } else {
                                    $videoArray[$key]['file'] = config('aws.cloudfront_private_url') . '/' . $videoValue->video_url;
                                }

                                if ($videoValue->resolution == '4k') {
                                    $videoArray[$key]['label'] = '4K';
                                } else {
                                    $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                                }
                                $videoArray[$key]['type'] = 'video/mp4';
                            } elseif ($videoValue->video_format === 'embed') {

                                foreach ($getSeasonOne as $keyCurrentEmbed => $valueCurrentEmbed) {
                                    if ($valueCurrentEmbed->id == $request->input('episode_id')) {
                                        $current_episode = $valueCurrentEmbed;
                                    }
                                    if ($valueCurrentEmbed->cloud === 'local') {
                                        $valueCurrentEmbed->backdrop = url('/') . '/storage/backdrops/300_' . $value->backdrop;
                                    } else {
                                        $valueCurrentEmbed->backdrop = config('aws.cloudfront_public_url') . '/backdrops/' . $value->backdrop;
                                    }
                                }


                                foreach ($getVideo as $keyEmbed => $videoValueEmbed) {
                                    $videoArray[$keyEmbed]['embed_provider_logo'] = url('/') . '/storage/production/' . $videoValueEmbed->embed_image;
                                    $videoArray[$keyEmbed]['embed_provider_name'] = $videoValueEmbed->embed_name;
                                    $videoArray[$keyEmbed]['embed_code'] = $videoValueEmbed->embed_code;
                                    $videoArray[$keyEmbed]['embed_id'] = $keyEmbed;
                                }


                                return response()->json(
                                    [
                                        'status' => 'success',
                                        'data' => [
                                            'playlist' => $videoArray,
                                            'series' => $checkAlreadyEpisode,
                                            'seasons' => $getAllSeason,
                                            'current_season' => $getSeasonOne,
                                            'current_episode' => $current_episode,
                                            'embed' => true
                                        ]
                                    ]
                                );
                            } else {
                                if ($videoValue->resolution == '4k') {
                                    $videoArray[$key]['label'] = '4K';
                                } else {
                                    $videoArray[$key]['label'] = $videoValue->resolution . 'p';
                                }
                                $videoArray[$key]['file'] = $videoValue->video_url;
                            }
                        }
                    }

                    if ($getSchedulesAds->isEmpty()) {
                        $getSchedulesAds = null;
                    } else {
                        foreach ($getSchedulesAds as $key => $adsValue) {
                            $adsArray[$key] = [
                                'offset' => $adsValue->offset . '%',
                                'tag' => $adsValue->tags
                            ];
                        }
                    }

                    if ($getSubtitle->isEmpty()) {
                        $getSubtitle = null;
                    } else {
                        foreach ($getSubtitle as $key => $subValue) {
                            $subArray[] = [
                                'file' => url('/') . $subValue->name,
                                'label' => ucwords($subValue->language),
                                "kind" => "captions"
                            ];
                        }
                    }

                    if ($value->cloud === 'local') {
                        $value->backdrop = url('/') . '/storage/backdrops/300_' . $value->backdrop;
                    } else {
                        $value->backdrop = config('aws.cloudfront_public_url') . '/backdrops/' . $value->backdrop;
                    }

                    if ($value->id == $request->input('episode_id')) {
                        $current_episode = $value;
                        $playlist[0] = [
                            'title' => $value->name,
                            'VideoNumber' => $value->episode_number,
                            'description' => $value->overview,
                            'image' => $value->backdrop,
                            'adschedule' => $adsArray,
                            'sources' => $videoArray,
                            'tracks' => $subArray,
                            'withCredentials' => true

                        ];
                    } else {
                        $playlist[] = [
                            'title' => $value->name,
                            'VideoNumber' => $value->episode_number,
                            'description' => $value->overview,
                            'image' => $value->backdrop,
                            'adschedule' => $adsArray,
                            'sources' => $videoArray,
                            'tracks' => $subArray,
                            'withCredentials' => true

                        ];
                    }
                }
            }

            $seasonArray = [];
            if ($getSeasonOne->isEmpty()) {
                $seasonArray = null;
            } else {
                foreach ($getSeasonOne as $key => $value) {
                    array_push($seasonArray, $value);
                }
            }

            return response()->json(
                [
                    'status' => 'success',
                    'data' => [
                        'playlist' => [
                            'playlist' => $playlist
                        ],
                        'series' => $checkAlreadyEpisode,
                        'seasons' => $getAllSeason,
                        'current_season' => $getSeasonOne,
                        'current_episode' => $current_episode,
                        'embed' => false

                    ]
                ]
            );
        }
    }


    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function movieReport(Request $request)
    {
        $request->validate([
            'type' => 'required|numeric',
            'details' => 'nullable|max:100',
            'id' => 'required|uuid',
        ]);

        $add = new Report();
        $add->report_type = $request->type;
        $add->report_details = $request->details;
        $add->report_userid = Auth::user()->id;
        $add->report_movie = $request->id;
        $add->save();

        return response()->json(['status' => 'success']);
    }

    public function seriesReport(Request $request)
    {
        $request->validate([
            'type' => 'required|numeric',
            'details' => 'nullable|max:100',
            'episode_id' => 'required|uuid',
            'series_id' => 'required|uuid',
        ]);

        $add = new Report();
        $add->report_type = $request->type;
        $add->report_details = $request->details;
        $add->report_userid = Auth::user()->id;
        $add->report_episode = $request->episode_id;
        $add->report_series = $request->series_id;
        $add->save();

        return response()->json(['status' => 'success']);
    }

    /**
     * Store recently time episode
     *
     * @return \Illuminate\Http\Response
     */
    public
    function setRecentlyTimeEpiosde(Request $request)
    {
        $request->validate([
            'current_time' => 'required|numeric',
            'duration_time' => 'required|numeric',
            'episode_id' => 'required|uuid',
            'series_id' => 'required|uuid',
        ]);

        $recently = Recently_watched::select('recently_watcheds.*')
            ->join('episodes', 'episodes.id', '=', 'recently_watcheds.episode_id')
            ->where('recently_watcheds.uid', Auth::id())
            ->where('episodes.id', '=', $request->episode_id)
            ->where('episodes.series_id', '=', $request->series_id)
            ->orderBy('episodes.episode_number', 'DESC')
            ->first();

        if (!is_null($recently)) {
            $update = Recently_watched::find($recently->id);
            $update->episode_id = $request->episode_id;
            $update->current_time = $request->current_time;
            $update->duration_time = $request->duration_time;
            $update->save();
            return response()->json(['status' => 'success update - ' . $request->current_time]);
        } else {
            $store = new Recently_watched();
            $store->episode_id = $request->episode_id;
            $store->series_id = $request->series_id;
            $store->uid = Auth::id();
            $store->current_time = $request->current_time;
            $store->duration_time = $request->duration_time;
            $store->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'failed'], 404);
    }

    /**
     * Store recently time episode
     *
     * @return \Illuminate\Http\Response
     */
    public
    function setRecentlyTimeMovie(Request $request)
    {
        $request->validate([
            'current_time' => 'required|numeric',
            'duration_time' => 'required|numeric',
            'movie_id' => 'required|uuid',
        ]);

        $recently = Recently_watched::select('recently_watcheds.*')
            ->where('uid', Auth::id())
            ->where('movie_id', $request->movie_id)
            ->first();

        if (!is_null($recently)) {
            $update = Recently_watched::find($recently->id);
            $update->current_time = $request->current_time;
            $update->save();
            return response()->json(['status' => 'success update']);
        } else {
            $store = new Recently_watched();
            $store->movie_id = $request->movie_id;
            $store->uid = Auth::id();
            $store->current_time = $request->current_time;
            $store->duration_time = $request->duration_time;
            $store->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'failed'], 404);
    }


    /**
     * Get All Seasons Content
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSeason(Request $request)
    {
        $request->validate([
            'season_number' => 'required|numeric',
            'series_id' => 'required|uuid',
        ]);

        $getSeason = DB::table('episodes')
            ->selectRaw('episodes.*, recently_watcheds.current_time, recently_watcheds.duration_time')
            ->leftJoin('recently_watcheds', function ($join) {
                $join->on('recently_watcheds.episode_id', '=', 'episodes.id')
                    ->where('recently_watcheds.uid', '=', Auth::id());
            })
            ->where('episodes.series_id', $request->input('series_id'))
            ->where('episodes.season_number', $request->input('season_number'))
            ->where('episodes.show', '<>', 0)
            ->orderByRaw('episodes.season_number, episode_number + 0 ASC')
            ->get();


        $seasonArray = [];
        if ($getSeason->isEmpty()) {
            $seasonArray = null;
        } else {
            foreach ($getSeason as $key => $value) {
                if ($value->show == 3) {
                    if (Carbon::now() >= $value->publish_date && Carbon::now() <= $value->expire_date) {
                        if ($value->cloud === 'local') {
                            $value->backdrop = url('/') . '/storage/backdrops/300_' . $value->backdrop;
                        } else {
                            $value->backdrop = config('aws.cloudfront_public_url') . '/backdrops/' . $value->backdrop;
                        }

                        array_push($seasonArray, $value);
                    }
                } else {
                    if ($value->cloud === 'local') {
                        $value->backdrop = url('/') . '/storage/backdrops/300_' . $value->backdrop;
                    } else {
                        $value->backdrop = config('aws.cloudfront_public_url') . '/backdrops/' . $value->backdrop;
                    }

                    array_push($seasonArray, $value);
                }
            }
        }

        return response()->json(
            [
                'status' => 'success',
                'data' => $seasonArray
            ]
        );
    }
}
