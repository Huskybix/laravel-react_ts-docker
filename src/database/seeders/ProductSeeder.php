<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::insert([
            [
                'name' => 'Wireless Headphones',
                'price' => 79.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 12,
                'enabled' => true,
            ],
            [
                'name' => 'Mechanical Keyboard Cleaning Kit',
                'price' => 29.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 8,
                'enabled' => true,
            ],
            [
                'name' => 'USB-C Hub',
                'price' => 49.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 42,
                'enabled' => true,
            ],
            [
                'name' => 'HD Webcam',
                'price' => 89.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 21,
                'enabled' => true,
            ],
            [
                'name' => 'Mouse Pad XL',
                'price' => 24.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 45,
                'enabled' => true,
            ],
            [
                'name' => '4k Monitor',
                'price' => 324.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 4,
                'enabled' => true,
            ],
            [
                'name' => 'Mechanical Keyboard',
                'price' => 144.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 19,
                'enabled' => true,
            ],
            [
                'name' => 'Error Detection Board',
                'price' => 4.04,
                'image' => 'https://placehold.co/300x300',
                'stock' => 404,
                'enabled' => true,
            ],
            [
                'name' => 'Strawberry Pi',
                'price' => 179.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 21,
                'enabled' => true,
            ],
            [
                'name' => 'Ball Mouse',
                'price' => 10.99,
                'image' => 'https://placehold.co/300x300',
                'stock' => 50,
                'enabled' => false,
            ],
        ]);
    }
}
