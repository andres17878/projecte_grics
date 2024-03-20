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
        Schema::create('publicacions', function (Blueprint $table) {
            $table->id();
            $table->string('cognom');
            $table->string('nom');
            $table->integer('anyo');
            $table->string('titol');
            $table->string('revista');
            $table->integer('numero');
            $table->integer('volum');
            $table->string('resum');
            $table->string('link');
            $table->date('data');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publicacions');
    }
};
