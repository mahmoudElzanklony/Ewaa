<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class map_images extends Model
{
    use HasFactory;

    protected $fillable = ['map_id','image','type'];
}
