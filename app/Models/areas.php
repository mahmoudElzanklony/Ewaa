<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class areas extends Model
{
    use HasFactory;

    protected $fillable = ['city_id','ar_name','en_name','tu_name','ar_info','en_info','tu_info'];

    public static function selection(){
        return self::query()->select('id',app()->getLocale().'_name as name','city_id',app()->getLocale().'_info as info');
    }

    public function city(){
        return $this->belongsTo(cities::class);
    }

    public function map_images(){
        return $this->hasMany(map_images::class,'map_id');
    }
}
