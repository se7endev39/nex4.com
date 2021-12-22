<?php

namespace App\Http\Controllers\Ghost;

use App\Http\Controllers\Controller;
use App\Models\Genre;

class GenresController extends Controller
{
    public function getAllGenres()
    {
        $getAllGenre= Genre::select('id','name')->get();

        return response()->json(
            [
                'status' => 'success',
                'data' =>  $getAllGenre
            ],
            200
        );
    }

}
