<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Staudenmeir\EloquentEagerLimit\HasEagerLimit;

class Mangas extends Model
{
    use Uuids, HasEagerLimit;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
    protected $primaryKey = 'mangas_id';

    public function chapters()
    {
        return $this->hasMany(MangaChapters::class, 'manga_chapters_mid', 'mangas_id');
    }
}
