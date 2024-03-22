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
        Schema::create('membres_projectes', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('membre_id');
            $table->unsignedBigInteger('projecte_id');

            $table->foreign('membre_id')->references('id')->on('membres');
            $table->foreign('projecte_id')->references('id')->on('projectes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('membres_projectes');
    }
};
