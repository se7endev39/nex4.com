<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Transcoder;
class TranscodersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $create = new Transcoder();
        $create->watermark_url = NULL;
        $create->watermark_position = NULL;
        $create->segment_duration = 10;
        $create->save();
    }
}
