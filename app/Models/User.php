<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $fillable = [
        'username',
        'email',
        'serial_number',
        'password',
        'phone',
        'address',
        'image',
        'block',
        'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public  function points(){
        return $this->hasOne('users_points');
    }

    public function products(){
        return $this->hasMany('products');
    }
    public function orders(){
        return $this->hasMany('orders');
    }
    public function seller_package(){
        return $this->hasOne(sellers_packages::class);
    }

    public function user_info(){
        return $this->hasOne(user_info::class);
    }
    public function photos_marketing(){
        return $this->hasMany(seller_photos::class);
    }
}
