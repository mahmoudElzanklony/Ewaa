<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categories extends Model
{
    use HasFactory;

    protected $fillable = ['ar_name','en_name','tu_name','ar_info','en_info','tu_info','parent_id'];



    public function questions(){
        return $this->belongsToMany(questions::class,categories_questions::class,'category_id','question_id');
    }

    public function branches(){
        return $this->hasMany(categories::class,'parent_id');
    }
}
