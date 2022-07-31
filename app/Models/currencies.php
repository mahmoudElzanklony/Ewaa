<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class currencies extends Model
{
    use HasFactory;

    protected $table = 'currencies';

    protected $fillable = ['ar_name','en_name','tu_name','currency_code','country_code'];

    public static function selection(){
        return self::query()->select('id',app()->getLocale().'_name as name','currency_code','country_code');
    }
}
