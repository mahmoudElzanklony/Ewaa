<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class listing_questions_answers extends Model
{
    use HasFactory;

    protected $fillable = ['listing_id','question_id','answer','type'];

    public function listing(){
        return $this->belongsTo(listings_info::class,'listing_id');
    }

    public function question(){
        return $this->belongsTo(questions::class);
    }

    public function answers_collections(){
        return $this->hasMany(answers::class,'question_id','question_id');
    }
}
