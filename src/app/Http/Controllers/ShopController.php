<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        // TODO: Replace with real product data from database
        $products = [
            ['id' => 1, 'name' => 'Wireless Headphones', 'price' => 79.99, 'image' => 'https://placehold.co/300x300'],
            ['id' => 2, 'name' => 'Mechanical Keyboard Cleaning Kit', 'price' => 129.99, 'image' => 'https://placehold.co/300x300'],
            ['id' => 3, 'name' => 'USB-C Hub',           'price' => 49.99,  'image' => 'https://placehold.co/300x300'],
            ['id' => 4, 'name' => 'Webcam HD',            'price' => 89.99,  'image' => 'https://placehold.co/300x300'],
            ['id' => 5, 'name' => 'Mouse Pad XL',         'price' => 24.99,  'image' => 'https://placehold.co/300x300'],
            ['id' => 6, 'name' => 'Monitor Light',        'price' => 39.99,  'image' => 'https://placehold.co/300x300'],
        ];

        return Inertia::render('Shop/Index', [
            'products' => $products,
        ]);
    }
}