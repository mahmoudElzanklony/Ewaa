<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class packages extends Model
{
    // make currencies table and linked to package == > make new column called currency_id
    // currencies === > ar_name,en_name , currency_code , country_code
    //  '',ryal,sr,ksa
    // remove required from inputs that are type text
    use HasFactory;
    protected $fillable = ['currency_id','image','min_value','max_value','price','is_visible','expiration_date'];

    public function currency(){
        return $this->belongsTo(currencies::class,'currency_id');
    }

    public function countries(){
        return $this->hasMany(packages_prices_places::class,'package_id');
    }
}
