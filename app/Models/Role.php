<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    // Relationship Many-to-Many

    public function admin()
    {
        return $this
            ->belongsToMany('App\Models\Admin')
            ->withTimestamps();
    }
}
