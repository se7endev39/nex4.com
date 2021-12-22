<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('series', function (Blueprint $table) {
            $table->uuid('t_id');
            $table->primary('t_id');
            $table->integer('t_moviedbid');
            $table->string('t_name');
            $table->text('t_desc');
            $table->string('t_genre', 40);
            $table->integer('t_year');
            $table->string('t_age', 5);
            $table->float('t_rate');
            $table->string('t_cloud', 10);
            $table->string('t_poster');
            $table->integer('t_category');
            $table->string('t_backdrop');
            $table->boolean('t_users_only')->default(0);
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
        Schema::dropIfExists('series');
    }
}
