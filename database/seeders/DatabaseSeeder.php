<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $this->call([
            RoleSeeder::class,
            AdminsSeeder::class,
            PluginsSeeder::class,
            TmdbSeeder::class,
            TranscodersSeeder::class,
            SiteinfosSeeder::class,
        ]);
    }


}
