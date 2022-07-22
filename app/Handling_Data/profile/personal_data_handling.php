<?php


namespace App\Handling_Data\profile;


use App\Models\User;
use App\Models\user_company_info;
use App\Models\user_info;

class personal_data_handling
{
    public static function handle_data(){
        $role = User::query()->find(auth()->id())->role;
        $ages = [
            '18:25'=>'18 - 25',
            '26:30'=>'26 - 30',
            '31:40'=>'31 - 40',
            '41:50'=>'41 - 50',
            '51:70'=>'51 - 70',
        ];
        if($role->name == 'brokerage_company'){
            return [
                'personal_data'=>user_info::query()->where('user_id','=',auth()->user()->id)->first(),
                'company_info'=>user_company_info::query()->where('user_id','=',auth()->user()->id)->first(),
                'ages'=>$ages
            ];
        }else{
            return [
                'personal_data'=>user_info::query()->where('user_id','=',auth()->user()->id)->first(),
                'ages'=>$ages
            ];
        }

    }
}
