<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
         $this->call(AdminsSeeder::class);
         $this->call(PublicacionsSeeder::class);
         $this->call(MembresSeeder::class);
         $this->call(LiniesSeeder::class);
         $this->call(NoticiesSeeder::class);
         $this->call(ProjectesSeeder::class);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
