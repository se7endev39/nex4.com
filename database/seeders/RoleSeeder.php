<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_user = new Role();
        $role_user->name = 'admin';
        $role_user->description = 'A Admin';
        $role_user->save();

        $role_user = new Role();
        $role_user->name = 'manager';
        $role_user->description = 'A User';
        $role_user->save();

        $role_manager = new Role();
        $role_manager->name = 'blocked';
        $role_manager->description = 'A blocked User';
        $role_manager->save();
    }
}
