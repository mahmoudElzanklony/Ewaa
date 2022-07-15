<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categories_questions extends Model
{
    use HasFactory;

    protected $fillable = ['category_id','question_id'];

    public function category(){
        return $this->belongsTo(categories::class);
    }
    public function question(){
        return $this->belongsTo(questions::class);
    }

}
