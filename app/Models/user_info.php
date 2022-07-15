<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_info extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','full_name','whatapp_status','age','gender','marital_status','education',
        'industry','position'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
