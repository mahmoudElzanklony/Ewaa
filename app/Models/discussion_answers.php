<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class discussion_answers extends Model
{
    use HasFactory;

    protected $table = 'discussion-answers';

    protected $fillable = ['user_id','question_id','answer'];

    public function question(){
        return $this->belongsTo(discussion_questions::class,'question_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function reactions(){
        return $this->hasMany(answers_reactions::class,'answer_id');
    }
}
