<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {
        return Inertia::render('Shop/Checkout');
    }

    public function success()
    {
        return Inertia::render('Shop/CheckoutSuccess');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'email'    => ['required', 'email'],
            'name'     => ['required', 'string', 'max:255'],
            'address'  => ['required', 'string', 'max:255'],
            'city'     => ['required', 'string', 'max:255'],
            'postcode' => ['required', 'string', 'max:20'],
            'items'    => ['required', 'array', 'min:1'],
            'items.*.id'       => ['required', 'integer', 'exists:products,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
        ]);

        DB::transaction(function () use ($validated) {
            $productIds = collect($validated['items'])->pluck('id');
            $products = Product::whereIn('id', $productIds)
                ->lockForUpdate()
                ->get()
                ->keyBy('id');

            foreach ($validated['items'] as $item) 
            {
                $product = $products->get($item['id']);

                if ($product->stock < $item['quantity']) {
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        'items' => "'{$product->name}' does not have enough stock.",
                    ]);
                }

                $product->decrement('stock', $item['quantity']);
            }
        });

        return redirect()->route('checkout.success');
    }
}