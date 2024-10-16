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
        Schema::create('infos', function (Blueprint $table) {
            $table->id();
            $table->string('followers')->nullable();
            $table->string('followers_growth')->nullable();
            $table->string('views')->nullable();
            $table->string('accounts_reached')->nullable();
            $table->string('watch_time')->nullable();
            $table->string('profile_activity')->nullable();
            $table->string('interaction')->nullable();
            $table->string('accounts_engaged')->nullable();
            $table->string('likes')->nullable();
            $table->string('comments')->nullable();
            $table->string('saves')->nullable();
            $table->string('shares')->nullable();

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
        Schema::dropIfExists('infos');
    }
};
