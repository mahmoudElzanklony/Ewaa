<?php
namespace App\Http\traits;

trait messages {
    static function errors($data){
        $errors = [];
        foreach($data as $key => $val){
            $errors[$key] = $val;
        }
        return $errors;
    }


    static function error_output($errors){
        return response()->json(['errors'=>$errors]);
    }


    static function success_output($msg){
        return response()->json(['success'=>$msg]);
    }

}
