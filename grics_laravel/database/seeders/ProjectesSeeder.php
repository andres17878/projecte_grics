<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            \DB::table("projectes")->insert([
                'foto' => $faker->imageUrl,
                'titol' => $faker->sentence,
                'resum' => $faker->text,
                'entitats' => $faker->company,
                'resultats' => $faker->text,
                'logos_entitats' => $faker->imageUrl,
                'integrants' => $faker->name,
                'created_at' => now(),
                'updated_at'=> now(),
            ]);
        }

    }
}
