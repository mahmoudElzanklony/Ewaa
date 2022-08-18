<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class questions extends Model
{
    use HasFactory;

    protected $fillable = ['ar_name','en_name','tu_name','required_status','icon','cover_appearance','type'];

    public static function selection(){
        return self::query()->select('id',app()->getLocale().'_name as name','required_status'
            ,'icon','cover_appearance','type');
    }

    public function answers(){
        return $this->hasMany(answers::class,'question_id');
    }
}
