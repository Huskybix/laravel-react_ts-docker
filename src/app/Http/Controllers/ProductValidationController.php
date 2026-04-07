<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductValidationController extends Controller
{
    public function validateIds(Request $request): JsonResponse
    {
        $ids = $request->input('ids', []);

        $validIds = Product::whereIn('id', $ids)
            ->where('enabled', true)
            ->where('stock', '>', 0)
            ->pluck('id');

        return response()->json(['validIds' => $validIds]);
    }
}