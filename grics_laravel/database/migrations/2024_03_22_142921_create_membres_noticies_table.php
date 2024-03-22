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
        Schema::create('membres_noticies', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('membre_id');
            $table->unsignedBigInteger('noticia_id');

            $table->foreign('membre_id')->references('id')->on('membres');
            $table->foreign('noticia_id')->references('id')->on('noticies');
            

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('membres_noticies');
    }
};
