<?php

namespace App\Http\Controllers;
use App\Enums\UserRole;

class NavigationController extends Controller
{
    public static function getLinks(): array
    {
        $links = [
            ['name' => 'Welcome', 'route' => 'dashboard'],
            ['name' => 'About', 'route' => 'about'],
            ['name' => 'Portfolio', 'route' => 'portfolio'],
            ['name' => 'Shop Example', 'route' => 'shop.index'],
            ['name' => 'Contact', 'route' => 'contact.index'],
        ];

        $user = auth()->user();

        if (!$user) 
        {
            $links = array_merge($links, [['name' => 'Login', 'route' => 'login']]);
            return $links;
        }

        if ($user->role->value >= UserRole::Admin->value) 
        {
            $links = array_merge($links, [
                ['name' => 'Control Panel', 'route' => 'users'],
            ]);
        }

        return $links;
    }
}