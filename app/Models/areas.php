<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class areas extends Model
{
    use HasFactory;

    protected $fillable = ['city_id','ar_name','en_name','tu_name'];

    public function city(){
        return $this->belongsTo(cities::class);
    }
}
