<?php

namespace App\Http\Controllers;
use App\Enums\UserRole;

class NavigationController extends Controller
{
    public static function getLinks(): array
    {
        $links = [
            ['name' => 'Welcome',      'route' => 'welcome', 'fragment' => 'intro-section'],
            ['name' => 'About',        'route' => 'welcome', 'fragment' => 'about-section'],
            ['name' => 'Contact',      'route' => 'welcome', 'fragment' => 'contact-section'],
            ['name' => 'Portfolio',    'route' => 'portfolio'],
            ['name' => 'Shop Example', 'route' => 'shop.index'],
        ];

        $user = auth()->user();

        if ($user && $user->role->value >= UserRole::Admin->value) 
        {
            /*$links = array_merge($links, [
                ['name' => 'Control Panel', 'route' => 'users'],
            ]);*/
        }

        return $links;
    }
}