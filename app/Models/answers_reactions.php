<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class answers_reactions extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','answer_id','type'];

    public function answer(){
        return $this->belongsTo(discussion_answers::class,'answer_id');
    }
}
