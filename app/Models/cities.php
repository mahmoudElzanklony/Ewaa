<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cities extends Model
{
    use HasFactory;

    protected $fillable = ['government_id','ar_name','en_name','tu_name'];

    public function government(){
        return $this->belongsTo(governments::class);
    }

}
