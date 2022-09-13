<?php

namespace App\Http\Controllers\Api\categories;

use App\Http\Controllers\Controller;
use App\Http\traits\messages;
use App\Models\categories;
use App\Services\categories\categories_data;
use App\Services\questions_category\get_questions;
use Illuminate\Http\Request;

class CategoriesControllerApi extends Controller
{
    //
    public static function main(){
        $data = categories_data::get_categories_type(null,true,true);
        return messages::success_output('',$data);
    }

    public static function sub(){
        $data = categories_data::get_categories_type(request('parent_id'),false,true);
        return messages::success_output('',$data);
    }

    public function questions_of_category(){
        $data = get_questions::get_data(request('category_id'));
        return messages::success_output('',$data);
    }
}
