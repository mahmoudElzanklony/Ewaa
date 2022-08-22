<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class discussion_questions extends Model
{
    use HasFactory;

    protected $table = 'discussion-questions';

    protected $fillable = ['user_id','area_id','category_id','question'];

    public function area(){
        return $this->belongsTo(areas::class,'area_id');
    }

    public function category(){
        return $this->belongsTo(categories::class,'category_id');
    }

    public function answers(){
        return $this->hasMany(discussion_answers::class,'question_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
