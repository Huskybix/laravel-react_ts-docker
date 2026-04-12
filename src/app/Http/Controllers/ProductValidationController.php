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

        $validProducts = Product::whereIn('id', $ids)
            ->where('enabled', true)
            ->where('stock', '>', 0)
            ->get(['id', 'name', 'stock']);

        $validIds = $validProducts->pluck('id');
        $removedIds = collect($ids)->diff($validIds);
        $removedNames = Product::whereIn('id', $removedIds)->pluck('name');

        return response()->json([
            'validProducts' => $validProducts,
            'removedNames' => $removedNames,
        ]);
    }
}