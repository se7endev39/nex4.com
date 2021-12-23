<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Genre;

class GenresController extends Controller
{
    public function getAllGenres()
    {
        $getAllGenre= Genre::get();


        return response()->json(
            [
                'status' => 'success',
                'data' =>  $getAllGenre
            ],
            200
        );
    }


    public function createGenre(Request $request)
    {
        $create  = new Genre();
        $create->name = $request->input('name');
        $create->save();


        return response()->json(
        [
            'status' => 'success',
            'data' => $create,
            'message' =>  'Successful create genre'
        ],
        200
    );
    }


    public function deleteGenre($id)
    {
        $checkGenre = Genre::find($id);


        if (is_null($checkGenre)) {
            return response()->json(['status' => 'failed', 'message' => 'Error, input failed'], 422);
        }

        $checkGenre->delete();

        return response()->json(
        [
            'status' => 'success',
            'message' =>  'Successful delete genre'
        ],
        200
    );
    }
}
