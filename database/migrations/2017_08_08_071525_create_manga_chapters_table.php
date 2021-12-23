<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMangaChaptersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manga_chapters', function (Blueprint $table) {
            $table->id('manga_chapters_id');
            $table->string('manga_chapters_name')->nullable();
            $table->mediumInteger('manga_chapters_number');
            $table->string('manga_chapters_cloud', 10);
            $table->string('manga_chapters_poster');
            $table->boolean('manga_chapters_users_only')->default(0);
            $table->char('manga_chapters_mid', 36);
            $table->boolean('show')->default(0);

            $table->foreign('manga_chapters_mid')->references('mangas_id')->on('mangas')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manga_chapters');
    }
}
