<?php

namespace App\Http\Controllers;
use App\Enums\UserRole;

class NavigationController extends Controller
{
    public static function getLinks(): array
    {
        $links = [
            ['name' => 'Dashboard', 'route' => 'dashboard'],
            ['name' => 'About', 'route' => 'about'],
            ['name' => 'Contact', 'route' => 'contact.show'],
            ['name' => 'Shop', 'route' => 'shop.index'],
        ];

        $user = auth()->user();

        if (!$user) 
        {
            $links = array_merge($links, [['name' => 'Login', 'route' => 'login']]);
            return $links;
        }

        if ($user->role->value >= UserRole::Moderator->value) 
        {
            $links = array_merge($links, [
                ['name' => 'Reports', 'route' => 'reports'],
            ]);
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