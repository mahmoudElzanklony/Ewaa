<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class answers extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','question_id','ar_name','en_name','tu_name'];

    public function question(){
        return $this->belongsTo(questions::class);
    }
}
