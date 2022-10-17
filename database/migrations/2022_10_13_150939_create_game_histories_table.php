<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId("game_id")->constrained("games");
            $table->string("winner")->nullable();
            $table->string("looser")->nullable();
            $table->smallIncrements("game_round")->nullable();
            $table->tinyInteger("status")->nullable()->comment("WIN=1,LOSE=2,DRAW=0");
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
        Schema::dropIfExists('game_histories');
    }
};
