<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'logo_path', 'logo_class', 'stack', 'sections', 'sort_order'];

    protected $casts = [
        'id'       => 'string',
        'stack'    => 'array',
        'sections' => 'array',
    ];

    public function toInertiaArray(): array
    {
        return [
            'id'        => $this->id,
            'name'      => $this->name,
            'logo'      => asset('storage/' . $this->logo_path),
            'logoClass' => $this->logo_class,
            'stack'     => $this->stack,
            'sections'  => $this->sections,
        ];
    }
}