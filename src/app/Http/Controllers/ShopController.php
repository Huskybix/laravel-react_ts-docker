<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        $products = Product::where('enabled', true)
            ->select(['id', 'name', 'price', 'image', 'stock'])
            ->get();

        return Inertia::render('Shop/Index', [
            'products' => $products,
        ]);
    }
}