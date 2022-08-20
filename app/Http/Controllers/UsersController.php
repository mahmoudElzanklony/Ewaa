<?php

namespace App\Http\Controllers;

use App\Models\users_contact_seller;
use App\Services\users\favourite_toggle;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    //
    public function toggle_fav(){
        return favourite_toggle::toggle(request('id'));
    }

    public function show_seller_phone(){
        users_contact_seller::query()->create(request()->all());
    }
}
