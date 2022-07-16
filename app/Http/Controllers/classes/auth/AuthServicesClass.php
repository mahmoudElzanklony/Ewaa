<?php

namespace App\Http\Controllers\classes\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\usersFormRequest;
use App\Services\auth\register_service;
use Illuminate\Http\Request;

class AuthServicesClass extends Controller
{
    //
    // post
    public function register_post(usersFormRequest $request){
        return register_service::register_process(request(),$request->validated());
    }
}
