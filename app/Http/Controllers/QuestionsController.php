<?php

namespace App\Http\Controllers;

use App\Http\traits\messages;
use App\Models\categories_questions;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    //
    public function get_questions(){
        $data = categories_questions::query()
            ->where('category_id','=',request('category_id'))
            ->with('question',function($q){
                $q->with('answers');
            })
            ->get();
        return messages::success_output('',$data);
    }
}
