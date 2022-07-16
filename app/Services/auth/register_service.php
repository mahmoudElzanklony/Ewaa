<?php


namespace App\Services\auth;


use App\Models\roles;
use App\Models\User;
use App\Http\traits\messages;

class register_service
{
    use messages;
    public static function register_process($req,$validated){
        $user_info = $validated;
        // check if role exist in roles or not
        if($req['type'] != 'admin') {
            $role = roles::query()->where('name', $req['type'])->first();
            // role is correct
            if ($role != null) {
                $user_info['address'] = '';
                $user_info['serial_number'] = time();
                $user_info['role_id'] = $role->id;
                User::query()->create($user_info);
                return self::success_output(['message'=>trans('messages.registered_user')]);
            } else {
                // role isn't correct
                return self::error_output(self::errors(['type' => trans('messages.err_invalid_type')]));
            }
        }else{
            return self::error_output(self::errors(['type' => trans('messages.err_invalid_type')]));
        }
    }
}
