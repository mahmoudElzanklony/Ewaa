<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class packages_prices_places extends Model
{
    use HasFactory;

    protected $fillable = ['package_id','type','place_id','price'];

    public function package(){
        return $this->belongsTo(packages::class);
    }
}
