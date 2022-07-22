<?php

namespace App\Http\Controllers;

use App\Services\users\favourite_toggle;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    //
    public function toggle_fav(){
        return favourite_toggle::toggle(request('id'));
    }
}
