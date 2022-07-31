<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class packages_prices_places extends Model
{
    use HasFactory;

    protected $fillable = ['package_id','country_id','price'];

    public function package(){
        return $this->belongsTo(packages::class);
    }

    public function country_info(){
        return $this->belongsTo(countries::class,'country_id');
    }
}
