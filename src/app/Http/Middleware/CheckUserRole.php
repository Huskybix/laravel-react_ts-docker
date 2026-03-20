<?php

namespace App\Http\Middleware;

use App\Enums\UserRole;
use Closure;
use Illuminate\Http\Request;

class CheckUserRole
{
    public function handle(Request $request, Closure $next, string $role)
    {
        $requiredRole = UserRole::from((int) $role);

        if ($request->user()?->role->value < $requiredRole->value) {
            abort(403);
        }

        return $next($request);
    }
}