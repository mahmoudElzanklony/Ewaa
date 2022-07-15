<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class governments extends Model
{
    use HasFactory;

    protected $fillable = ['country_id','ar_name','en_name','tu_name'];

    public function country(){
        return $this->belongsTo(countries::class);
    }

}
