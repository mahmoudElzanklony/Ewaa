<?php


namespace App\Services;


use App\Models\User;

class get_admin_info
{
    public static function get_info(){
        $admin = User::query()->whereHas('role',function($r){
            $r->where('name','=','admin');
        })->first();
        return $admin;
    }
}
