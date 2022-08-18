<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class discussion_answers extends Model
{
    use HasFactory;

    protected $table = 'discussion-answers';

    protected $fillable = ['question_id','answer','likes','dis_likes'];

    public function question(){
        return $this->belongsTo(discussion_questions::class,'question_id');
    }
}
