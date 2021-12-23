<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\MangaChapters;
use App\Models\Mangas;

class MangaController extends Controller
{
    public function chapter($manga_id, $chapter_id)
    {
        $cmanga = Mangas::where('mangas_id', $manga_id)->first();

        if (is_null($cmanga)) {
            abort(404);
        }

        $getManga = Mangas::with(['chapters' => function ($query) {
            $query->orderBy('manga_chapters_number', 'ASC');
        }])
            ->where('mangas_id', $cmanga->mangas_id)
            ->first();

        $getLastChapter = MangaChapters::with(['images' => function ($query) {
            $query->orderBy('manga_chapters_images_page', 'ASC');
        }])->where('manga_chapters_id', $chapter_id)->first();

        return response()->json([
            'status' => 'success',
            'data' => [
                'chapters' => $getManga,
                'current' => $getLastChapter
            ]
        ], 200);
    }

    public function oneChapter($manga_id, $chapter_id)
    {
        $cmanga = Mangas::where('mangas_id', $manga_id)->first();

        if (is_null($cmanga)) {
            abort(404);
        }

        $getLastChapter = MangaChapters::with(['images' => function ($query) {
            $query->orderBy('manga_chapters_images_page', 'ASC');
        }])
            ->where('manga_chapters_id', $chapter_id)
            ->first();

        return response()->json([
            'status' => 'success',
            'data' => [
                'current' => $getLastChapter
            ]
        ], 200);
    }
}
