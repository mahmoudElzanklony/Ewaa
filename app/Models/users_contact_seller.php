<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class users_contact_seller extends Model
{
    use HasFactory;

    protected $fillable = ['listing_id','username','email','phone'];

    public function listing(){
        return $this->belongsTo(listings_info::class,'listing_id');
    }
}
