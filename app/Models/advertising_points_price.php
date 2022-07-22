<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class advertising_points_price extends Model
{
    use HasFactory;

    protected $fillable = ['place_id','type','no_points'];
}
