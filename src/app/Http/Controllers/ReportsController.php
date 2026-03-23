<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ReportsController extends Controller
{
    public function index()
    {
        return Inertia::render('Reports', [
            'products' => Product::all(),
        ]);
    }
}