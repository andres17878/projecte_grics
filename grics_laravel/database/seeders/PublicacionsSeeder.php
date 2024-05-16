<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PublicacionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 3; $i++) {
            \DB::table('publicacions')->insert([
                'cognom' => $faker->lastName,
                'nom' => $faker->firstName,
                'anyo' => $faker->year,
                'titol' => $faker->sentence,
                'revista' => $faker->word,
                'numero' => $faker->numberBetween(1, 100),
                'volum' => $faker->numberBetween(1, 100),
                'resum' => $faker->text,
                'link' => $faker->url,
                // 'data' => $faker->date,
                'created_at' => now(),
                'updated_at'=> now(),
            ]);
        }
    }
}
