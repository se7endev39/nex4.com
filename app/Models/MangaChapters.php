<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Staudenmeir\EloquentEagerLimit\HasEagerLimit;

class MangaChapters extends Model
{
    use HasEagerLimit;

    protected $primaryKey = "manga_chapters_id";

    public function images()
    {
        return $this->hasMany(MangaChaptersImages::class, 'manga_chapters_images_mcid', 'manga_chapters_id');
    }
}
