<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class listing_statistics extends Model
{
    use HasFactory;

    protected $fillable = ['listing_id','no_search','no_seen','no_contact_tried'];

    public function listing(){
        return $this->belongsTo(listings_info::class,'listing_id');
    }
}
