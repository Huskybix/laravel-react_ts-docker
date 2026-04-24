<?php
namespace App\Http\Controllers;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        $projects = Project::orderBy('sort_order')
            ->get()
            ->map(fn($p) => $p->toInertiaArray())
            ->all();

        return Inertia::render('Portfolio', [
            'projects' => $projects,
        ]);
    }
}