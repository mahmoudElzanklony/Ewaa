<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subscriptions extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','package_id','points_ordered','min_points','max_points','point_price'];

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function package(){
        return $this->belongsTo(packages::class,'package_id');
    }
}
