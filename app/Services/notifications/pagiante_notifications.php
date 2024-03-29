<?php


namespace App\Services\notifications;


use App\Models\notifications;

class pagiante_notifications
{
    public static function get_notifications($id = 0 , $type = ''){
        return notifications::selection()->with('sender',function($e){
            $e->with('role');
        })
            ->when($id != 0 , function($e) use($id){
                $e->where('receiver_id','=',$id);
            })
            ->when($type != '' , function($e) use($type){
                $e->whereHas('receiver',function($e) use ($type){
                    $e->whereHas('role',function($role) use ($type){
                        $role->where('name','=',$type);
                    });
                });
            })->orderBy('id','DESC')
            ->get();
           // ->paginate(12);
    }
}
