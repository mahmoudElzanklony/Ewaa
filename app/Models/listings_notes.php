<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class listings_notes extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','listing_id','note'];

    public function listing(){
        return $this->belongsTo(listings_info::class,'listing_id');
    }
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
