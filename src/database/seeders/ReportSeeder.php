<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Report;

class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Report::insert([
            [
                'name' => 'Horizon Pro',
                'category' => 'Analytics',
                'revenue' => 84200,
                'trend_bars' => json_encode([2, 1, 4, 2, 3, 4, 5]),
                'status' => 'Active',
            ],
            [
                'name' => 'Slate UI',
                'category' => 'Design',
                'revenue' => 61500,
                'trend_bars' => json_encode([4, 3, 2, 3, 1, 3, 5]),
                'status' => 'Active',
            ],
            [
                'name' => 'CloudSync',
                'category' => 'Storage',
                'revenue' => 132800,
                'trend_bars' => json_encode([1, 1, 2, 3, 3, 4, 5]),
                'status' => 'Active',
            ],
            [
                'name' => 'Vertices',
                'category' => 'Platform',
                'revenue' => 27600,
                'trend_bars' => json_encode([3, 2, 1, 3, 4, 3, 4]),
                'status' => 'Active',
            ],
            [
                'name' => 'Flowmail',
                'category' => 'Comms',
                'revenue' => 122500,
                'trend_bars' => json_encode([5, 4, 2, 4, 3, 2, 3]),
                'status' => 'Active',
            ],
        ]);
    }
}
