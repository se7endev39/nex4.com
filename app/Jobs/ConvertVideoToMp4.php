<?php

namespace App\Jobs;

use App\Models\Episode;
use App\Models\Movie;
use App\Models\Video;
use FFMpeg\Format\Video\X264;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use ProtoneMedia\LaravelFFMpeg\Exporters\EncodingException;
use ProtoneMedia\LaravelFFMpeg\Exporters\HLSExporter;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class ConvertVideoToMp4 implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $video;
    public $videoID;
    public $resolution;
    public $encodingDestination;
    public $playlistFileName;
    public $tmdbID;
    public $Bucket;
    public $Cloud;
    public $Type;


    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($video, $videoID, $resolution, $encodingDestination, $tmdbID, $Cloud, $Type)
    {
        Log::alert('id--' . $videoID);
        $this->video = $video;
        $this->videoID = $videoID;
        $this->resolution = $resolution;
        $this->encodingDestination = $encodingDestination;
        $this->tmdbID = $tmdbID;
        $this->Cloud = $Cloud;
        $this->Type = $Type;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $lowBitrate = (new X264('aac', 'libx264'))->setKiloBitrate(400);
        $midBitrate = (new X264('aac', 'libx264'))->setKiloBitrate(700);
        $highBitrate = (new X264('aac', 'libx264'))->setKiloBitrate(1500);
        $veryHighBitrate = (new X264('aac', 'libx264'))->setKiloBitrate(3000);
        $ultraHighBitrate = (new X264('aac', 'libx264'))->setKiloBitrate(10000);

        try {
            Log::alert( 'encoding now -' . $this->videoID);

            foreach ($this->resolution as $key => $value) {

                if ($value['Resolution'] === '4k') {
                    $newNameMP4 = Str::random(20) . '.mp4';
                    $converVeryHigh = FFMpeg::fromDisk('public')
                        ->open($this->video)
                        ->export()
                        ->toDisk('public')
                        ->inFormat($ultraHighBitrate)
                        ->save( $this->encodingDestination .  $newNameMP4);

                    // Store video data
                    $video = new Video();
                    if($this->Type === 'series') {
                        $video->episode_id = $this->videoID;
                    }else{
                        $video->movie_id = $this->videoID;
                    }
                    $video->resolution = '4k';
                    $video->video_url =  $this->Cloud === 's3' ? $this->encodingDestination . $newNameMP4 : '/storage/' . $this->encodingDestination  . $newNameMP4;
                    $video->video_cloud = $this->Cloud === 's3' ? 'aws' : 'local';
                    $video->video_format = 'mp4';
                    $video->save();
                }

                if ($value['Resolution'] === '1080') {
                    $newNameMP4 = Str::random(20) . '.mp4';
                    $converVeryHigh = FFMpeg::fromDisk('public')
                        ->open($this->video)
                        ->export()
                        ->toDisk('public')
                        ->inFormat($veryHighBitrate)
                        ->save( $this->encodingDestination .  $newNameMP4);

                    // Store video data
                    $video = new Video();
                    if($this->Type === 'series') {
                        $video->episode_id = $this->videoID;
                    }else{
                        $video->movie_id = $this->videoID;
                    }
                    $video->resolution = '1080';
                    $video->video_url =  $this->Cloud === 's3' ? $this->encodingDestination . $newNameMP4 : '/storage/' . $this->encodingDestination  . $newNameMP4;
                    $video->video_cloud = $this->Cloud === 's3' ? 'aws' : 'local';
                    $video->video_format = 'mp4';
                    $video->save();
                }

                if ($value['Resolution'] === '720') {
                    $newNameMP4 = Str::random(20) . '.mp4';
                    $convertHigh = FFMpeg::fromDisk('public')
                        ->open($this->video)
                        ->export()
                        ->toDisk('public')
                        ->inFormat($highBitrate)
                        ->save( $this->encodingDestination .  $newNameMP4);

                    // Store video data
                    $video = new Video();
                    if($this->Type === 'series') {
                        $video->episode_id = $this->videoID;
                    }else{
                        $video->movie_id = $this->videoID;
                    }
                    $video->resolution = '720';
                    $video->video_url =  $this->Cloud === 's3' ? $this->encodingDestination . $newNameMP4 : '/storage/' . $this->encodingDestination  . $newNameMP4;
                    $video->video_cloud = $this->Cloud === 's3' ? 'aws' : 'local';
                    $video->video_format = 'mp4';
                    $video->save();
                }

                if ($value['Resolution'] === '480') {
                    $newNameMP4 = Str::random(20) . '.mp4';
                    $convertMid = FFMpeg::fromDisk('public')
                        ->open($this->video)
                        ->export()
                        ->toDisk('public')
                        ->inFormat($midBitrate)
                        ->save( $this->encodingDestination .  $newNameMP4);

                    // Store video data
                    $video = new Video();
                    if($this->Type === 'series') {
                        $video->episode_id = $this->videoID;
                    }else{
                        $video->movie_id = $this->videoID;
                    }
                    $video->resolution = '480';
                    $video->video_url =  $this->Cloud === 's3' ? $this->encodingDestination . $newNameMP4 : '/storage/' . $this->encodingDestination  . $newNameMP4;
                    $video->video_cloud = $this->Cloud === 's3' ? 'aws' : 'local';
                    $video->video_format = 'mp4';
                    $video->save();
                }

                if ($value['Resolution'] === '320') {
                    $newNameMP4 = Str::random(20) . '.mp4';
                    $convertLow = FFMpeg::fromDisk('public')
                        ->open($this->video)
                        ->export()
                        ->toDisk('public')
                        ->inFormat($lowBitrate)
                        ->save( $this->encodingDestination .  $newNameMP4);

                    // Store video data
                    $video = new Video();
                    if($this->Type === 'series') {
                        $video->episode_id = $this->videoID;
                    }else{
                        $video->movie_id = $this->videoID;
                    }
                    $video->resolution = '320';
                    $video->video_url =  $this->Cloud === 's3' ? $this->encodingDestination . $newNameMP4 : '/storage/' . $this->encodingDestination  . $newNameMP4;
                    $video->video_cloud = $this->Cloud === 's3' ? 'aws' : 'local';
                    $video->video_format = 'mp4';
                    $video->save();
                }
            }

            if($this->Cloud === 's3') {
                $s3 = App::make('aws')->createClient('s3');
                $s3->uploadDirectory(storage_path('/app/public/' . $this->encodingDestination), config('aws.private_bucket'), $this->encodingDestination, []);
            }

            //Update episode
            if($this->Type === 'series') {
                $updateEpisode = Episode::find($this->videoID);
                $updateEpisode->show = 1;
                $updateEpisode->save();
            }else{
                $updateMovie = Movie::find($this->videoID);
                $updateMovie->show = 1;
                $updateMovie->save();
            }

        } catch (EncodingException $exception) {
            Log::alert('error');
            Log::alert($exception->getErrorOutput());
            if($this->Type === 'series') {
                $updateEpisode = Episode::find($this->videoID);
                $updateEpisode->show = 3;
                $updateEpisode->save();
            }else{
                $updateMovie = Movie::find($this->videoID);
                $updateMovie->show = 3;
                $updateMovie->save();
            }
        }

    }
}
