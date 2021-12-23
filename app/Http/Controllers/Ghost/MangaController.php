<?php

namespace App\Http\Controllers\Ghost;

use App\Http\Controllers\Controller;
use App\Models\MangaChapters;
use App\Models\Mangas;

class MangaController extends Controller
{
    public function index()
    {
        $getMangas = Mangas::orderBy('mangas.created_at', 'DESC')
            ->limit(50)
            ->get();

        if (empty($getMangas->all())) {
            $getMangas = null;
        }
        return response()->json([
            'status' => 'success',
            'data' => [
                'manga' => $getMangas
            ]
        ], 200);
    }

    public function show($id)
    {
        $cmanga = Mangas::findOrFail($id);

        if (is_null($cmanga)) {
            abort(404);
        }

        $getManga = Mangas::with(['chapters' => function ($query) {
            $query->where('show', 1);
            $query->limit(4)->orderBy('manga_chapters_number', 'DESC');
        }])
            ->where('mangas_id', $cmanga->mangas_id)
            ->first();

        return response()->json([
            'status' => 'success',
            'data' => $getManga
        ], 200);
    }
    public function chapter($manga_id, $chapter_id)
    {
        $cmanga = Mangas::where('mangas_id', $manga_id)->where('mangas_users_only', 0)->first();

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
        $cmanga = Mangas::where('mangas_id', $manga_id)->where('mangas_users_only', 0)->first();

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
