<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Inertia\Inertia;

class ReportsController extends Controller
{
    public function index()
    {
        return Inertia::render('Reports', [
            'reports' => Report::all(),
        ]);
    }
}