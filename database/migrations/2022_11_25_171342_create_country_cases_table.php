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
        Schema::create('country_cases', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('slug')->nullable();
            $table->string('country_code')->nullable();
            $table->integer('new_confirmed')->nullable();
            $table->integer('total_confirmed')->nullable();
            $table->integer('new_deaths')->nullable();
            $table->integer('total_deaths')->nullable();
            $table->integer('new_recovered')->nullable();
            $table->integer('total_recovered')->nullable();
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
        Schema::dropIfExists('country_cases');
    }
};
