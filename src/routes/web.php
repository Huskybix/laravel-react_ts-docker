<?php
use App\Http\Controllers\ProfileController;
use App\Enums\UserRole;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\ShopController;

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('dashboard');

Route::get('/login', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/about', fn() => Inertia::render('About'))->name('about');
Route::get('/portfolio', fn() => Inertia::render('Portfolio'))->name('portfolio');
Route::get('/shop', [ShopController::class, 'index'])->name('shop.index');
Route::get('/shop/cart', fn() => Inertia::render('Shop/Cart'))->name('shop.cart');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::middleware('role:' . UserRole::Moderator->value)->group(function () {
        Route::get('/reports', [ReportsController::class, 'index'])->name('reports');
    });

    Route::middleware('role:' . UserRole::Admin->value)->group(function () {
        Route::get('/admin/users', fn() => Inertia::render('Users'))->name('users');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

require __DIR__.'/auth.php';