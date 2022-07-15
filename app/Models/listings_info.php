<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class listings_info extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = ['user_id','category_id','area_id','ar_name','en_name','tu_name','ar_info','en_info','tu_info',
        'ar_address','en_address','tu_address','youtube_link','whatapp_status','contact_email_status'];

    protected $dates = ['deleted_at'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category(){
        return $this->belongsTo(categories::class);
    }

    public function area(){
        return $this->belongsTo(areas::class,'area_id');
    }
}
