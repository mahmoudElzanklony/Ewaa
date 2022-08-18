<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class countries extends Model
{
    use HasFactory;

    protected $fillable = ['ar_name','en_name','tu_name','ar_info','en_info','tu_info'];

    public static function selection(){
        return self::query()->select('id',app()->getLocale().'_name as name',app()->getLocale().'_info as info');
    }

    public function my_cities(){
        return  $this->hasManyThrough(cities::class,governments::class,'country_id','government_id');
    }

    public function my_rent_cities(){
        return $this->hasManyThrough(cities::class,governments::class,'country_id',
            'government_id')
            ->selectRaw('areas.'.app()->getLocale().'_name as area_name,cities.id,cities.'.app()->getLocale().'_name as city_name')
            ->join('areas','cities.id','=','areas.city_id')
            ->addSelect([
                'count_listings'=>listings_info::query()
                    ->whereColumn('areas.id','listings_infos.area_id')
                    ->selectRaw('count(listings_infos.rent_or_sale) as total')
                    ->where('listings_infos.rent_or_sale','=','sale')
                    ->limit(1)
            ]);
    }

    public function my_sale_cities(){
        return $this->hasManyThrough(cities::class,governments::class,'country_id',
            'government_id')
            ->join('areas','cities.id','=','areas.city_id')
            ->selectRaw('areas.'.app()->getLocale().'_name as area_name,cities.id,cities.'.app()->getLocale().'_name as city_name')
            ->addSelect([
                'count_listings'=>listings_info::query()
                    ->whereColumn('areas.id','listings_infos.area_id')
                    ->selectRaw('count(listings_infos.rent_or_sale) as total')
                    ->where('listings_infos.rent_or_sale','=','sale')
                    ->limit(1)
            ]);
    }

    public function my_areas(){
        return $this->hasManyThrough(cities::class,governments::class,'country_id',
            'government_id')->join('areas','cities.id','=','areas.city_id')
            ->selectRaw('areas.id,areas.'.app()->getLocale().'_name as name')
            ->addSelect([
                'count_listings'=>listings_info::query()
                                    ->whereColumn('areas.id','listings_infos.area_id')
                                    ->selectRaw('count(listings_infos.id) as total')->limit(1)
            ]);
    }

    public function country_listings(){
        return $this->hasManyThrough(cities::class,governments::class,'country_id',
            'government_id')->join('areas','cities.id','=','areas.city_id')
            ->join('listings_infos','areas.id','=','listings_infos.area_id')
            ->selectRaw('listings_infos.id,listings_infos.'.app()->getLocale().'_name as name');
    }

    public function governments(){
        return $this->hasMany(governments::class,'country_id');
    }

    public function map_images(){
        return $this->hasMany(map_images::class,'map_id');
    }

}
