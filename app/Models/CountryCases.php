<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountryCases extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'country_code',
        'new_confirmed',
        'total_confirmed',
        'new_deaths',
        'total_deaths',
        'new_recovered',
        'total_recovered'

    ];
}
