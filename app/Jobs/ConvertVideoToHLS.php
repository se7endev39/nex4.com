<?php

namespace App\Jobs;

use App\Models\Episode;
use App\Models\Movie;
use App\Models\Video;
use FFMpeg\Format\Video\X264;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use ProtoneMedia\LaravelFFMpeg\Exporters\EncodingException;
use ProtoneMedia\LaravelFFMpeg\Exporters\HLSExporter;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;
use Illuminate\Support\Str;

class ConvertVideoToHLS implements ShouldQueue
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
    public function __construct($video, $videoID, $resolution, $encodingDestination, $playlistFileName, $tmdbID, $Cloud, $Type)
    {
        $this->video = $video;
        $this->videoID = $videoID;
        $this->resolution = $resolution;
        $this->encodingDestination = $encodingDestination;
        $this->playlistFileName = $playlistFileName;
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
            $encryptionKey = HLSExporter::generateEncryptionKey();
            $convert = FFMpeg::fromDisk('public')
                ->open($this->video)
                ->exportForHLS()
                ->withRotatingEncryptionKey(function ($filename, $contents) {
                    Storage::disk('public')->put($this->encodingDestination . $filename, $contents);
                }, 10)
                ->toDisk('public');

            foreach ($this->resolution as $key => $value) {
                if ($value['Resolution'] === '4k') {
                    $convert->addFormat($ultraHighBitrate);
                }
                if ($value['Resolution'] === '1080') {
                    $convert->addFormat($veryHighBitrate, function ($media) {
                        $media->addFilter('scale=1920:1080');
                    });
                }
                if ($value['Resolution'] === '720') {
                    $convert->addFormat($highBitrate, function ($media) {
                        $media->addFilter('scale=1280:720');
                    });
                }
                if ($value['Resolution'] === '480') {
                    $convert->addFormat($midBitrate, function ($media) {
                        $media->addFilter('scale=858:480');
                    });
                }
                if ($value['Resolution'] === '320') {
                    $convert->addFormat($lowBitrate, function ($media) {
                        $media->addFilter('scale=480:360');
                    });
                }
            }
            $convert->save($this->encodingDestination . $this->playlistFileName);


            if ($this->Cloud === 's3') {
                Log::alert('upload to s3');
                $s3 = App::make('aws')->createClient('s3');
                $s3->uploadDirectory(storage_path('/app/public/' . $this->encodingDestination), config('aws.private_bucket'), $this->encodingDestination, []);
            }

            //Update episode
            if ($this->Type === 'series') {
                $updateEpisode = Episode::find($this->videoID);
                $updateEpisode->show = 1;
                $updateEpisode->save();
            } else {
                $updateMovie = Movie::find($this->videoID);
                $updateMovie->show = 1;
                $updateMovie->save();
            }

            $video = new Video();
            $video->video_format = 'hls';
            $video->video_cloud = $this->Cloud === 's3' ? 'aws' : 'local';
            if ($this->Type === 'series') {
                $video->episode_id = $this->videoID;
            } else {
                $video->movie_id = $this->videoID;
            }
            $video->resolution = '720';
            $video->video_url =  $this->Cloud === 's3' ? $this->encodingDestination . $this->playlistFileName : '/storage/' . $this->encodingDestination  . $this->playlistFileName;
            $video->save();
        } catch (EncodingException $exception) {
            Log::alert('error');
            Log::alert($exception->getErrorOutput());

            if ($this->Type === 'series') {
                $updateEpisode = Episode::find($this->videoID);
                $updateEpisode->show = 3;
                $updateEpisode->save();
            } else {
                $updateMovie = Movie::find($this->videoID);
                $updateMovie->show = 3;
                $updateMovie->save();
            }
        }
    }
}
