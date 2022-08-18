<?php

namespace App\Http\Controllers;

use App\Http\traits\messages;
use App\Models\areas;
use Illuminate\Http\Request;

class AreasController extends Controller
{
    //
    public function search(){
        $data = areas::selection()
            ->where('ar_name','LIKE','%'.request('search').'%')
            ->orWhere('en_name','LIKE','%'.request('search').'%')->get();
        return messages::success_output('',$data);
    }
}
