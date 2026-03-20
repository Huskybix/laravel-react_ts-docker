<?php
use App\Http\Controllers\ProfileController;
use App\Enums\UserRole;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('/about', fn() => Inertia::render('About'))->name('about');
    Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');

    Route::middleware('role:' . UserRole::Moderator->value)->group(function () {
        Route::get('/reports', fn() => Inertia::render('Reports'))->name('reports');
    });

    Route::middleware('role:' . UserRole::Admin->value)->group(function () {
        Route::get('/admin/users', fn() => Inertia::render('Users'))->name('users');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';