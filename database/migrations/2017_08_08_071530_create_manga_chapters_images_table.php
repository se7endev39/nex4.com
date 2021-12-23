<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMangaChaptersImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manga_chapters_images', function (Blueprint $table) {
            $table->id('manga_chapters_images_id');
            $table->string('manga_chapters_images_path');
            $table->tinyInteger('manga_chapters_images_page');
            $table->bigInteger('manga_chapters_images_mcid')->unsigned();
            $table->boolean('show')->default(0);
            $table->timestamps();

            $table->foreign('manga_chapters_images_mcid')->references('manga_chapters_id')->on('manga_chapters')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manga_chapters_images');
    }
}
