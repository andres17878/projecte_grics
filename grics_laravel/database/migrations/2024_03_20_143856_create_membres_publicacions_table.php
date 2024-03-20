<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('membres_publicacions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('membre_id');
            $table->unsignedBigInteger('publicacio_id');

            $table->foreign('membre_id')->references('id')->on('membres');
            $table->foreign('publicacio_id')->references('id')->on('publicacions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('membres_publicacions');
    }
};
