<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'category', 'revenue', 'trend_bars', 'status'];

    protected $casts = [
        'trend_bars' => 'array',
    ];
}
