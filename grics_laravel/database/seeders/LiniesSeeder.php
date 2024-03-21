<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LiniesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 10; $i++) {
            \DB::table('linies')->insert([
                'foto' => $faker->imageUrl(),
                'titol' => $faker->sentence(),
                'descripcio' => $faker->paragraph(),
                'data' => $faker->date(),
            ]);
        }
    }
}
