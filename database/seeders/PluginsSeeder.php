<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Plugin;

class PluginsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $theme = new Plugin();
        $theme->name = 'default';
        $theme->thumbnail = '/themes/default/thumbnail.png';
        $theme->status = 0;
        $theme->type = 'theme';
        $theme->save();
    }
}
