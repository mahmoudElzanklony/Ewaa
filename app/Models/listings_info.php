<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class listings_info extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = ['user_id','category_id','area_id','ar_name','en_name','tu_name','ar_info','en_info','tu_info',
        'ar_address','en_address','tu_address','rent_or_sale','price','meters_number',
        'youtube_link','whatapp_status','contact_email_status','client_payment_status',
        'payment_status','coordinates','type'];

    protected $dates = ['deleted_at'];

    public static function selection(){
        return self::query()->select('id','user_id','category_id','area_id'
            ,app()->getLocale().'_name as name',app()->getLocale().'_info as info',
            app()->getLocale().'_address as address',
            'price','meters_number','youtube_link','whatapp_status',
            'contact_email_status','payment_status','client_payment_status','type','coordinates','created_at');
    }


    public function user(){
        return $this->belongsTo(User::class);
    }



    public function category(){
        return $this->belongsTo(categories::class);
    }

    public function area(){
        return $this->belongsTo(areas::class,'area_id');
    }

    public function images(){
        return $this->hasMany(listing_photos::class,'listing_id');
    }
    public function first_image(){
        return $this->hasOne(listing_photos::class,'listing_id');
    }

    public function favourite(){
        return $this->hasOne(favourites::class,'listing_id');
    }

    public function note(){
        return $this->hasOne(listings_notes::class,'listing_id');
    }

    public function statistics(){
        return $this->hasOne(listing_statistics::class,'listing_id');
    }

    public function answers(){
        return $this->hasMany(listing_questions_answers::class,'listing_id');
    }
}
