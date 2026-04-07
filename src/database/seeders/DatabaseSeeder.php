<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::insert([
            [
                'name' => 'Admin User', 
                'email' => 'admin@test.com', 
                'password' => bcrypt('password'), 
                'role' => 3,
            ],
            [
                'name' => 'Mod User', 
                'email' => 'mod@test.com', 
                'password' => bcrypt('password'), 
                'role' => 2,
            ],
            [
                'name' => 'Standard User', 
                'email' => 'user@test.com', 
                'password' => bcrypt('password'), 
                'role' => 1,
            ],
        ]);

        $this->call(ProductSeeder::class);
        $this->call(ReportSeeder::class);
    }
}
