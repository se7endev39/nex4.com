<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMangasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mangas', function (Blueprint $table) {
            $table->uuid('mangas_id');
            $table->primary('mangas_id');
            $table->string('mangas_name');
            $table->text('mangas_desc');
            $table->string('mangas_genre', 40)->nullable();
            $table->integer('mangas_year')->nullable();
            $table->float('mangas_rate')->nullable();
            $table->string('mangas_cloud', 10);
            $table->string('mangas_poster');
            $table->string('mangas_backdrop')->nullable();
            $table->boolean('mangas_users_only')->default(0);
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
        Schema::dropIfExists('mangas');
    }
}
