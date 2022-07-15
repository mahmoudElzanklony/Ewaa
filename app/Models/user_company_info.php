<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_company_info extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','bio','image'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
