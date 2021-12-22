<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tmdb;

class TmdbSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $theme = new Tmdb();
        $theme->api = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
        $theme->language = 'en
        ';
        $theme->save();
    }
}
