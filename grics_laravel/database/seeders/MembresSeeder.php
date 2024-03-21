<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MembresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        for($i = 0; $i < 3; $i++) {
            \DB::table('membres')->insert([
                'email' => $faker->email,
                'nom' => $faker->firstName,
                'cognom' => $faker->lastName,
                'carrec' => $faker->word,
                'foto' => $faker->imageUrl,
                'info' => $faker->text,
            ]);
        }
    }
}