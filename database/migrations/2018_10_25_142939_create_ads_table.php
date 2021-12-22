<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ad_name', 50);
            $table->string('client', 25);
            $table->string('tags', 400);
            $table->integer('start_on')->default(1)->nullable();
            $table->integer('frequency')->default(1)->nullable();
            $table->string('start_on_seek', 10)->nullable();
            $table->integer('time_between_ads')->nullable();
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
        Schema::dropIfExists('ads');
    }
}
