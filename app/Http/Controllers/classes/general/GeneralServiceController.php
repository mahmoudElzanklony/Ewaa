<?php

namespace App\Http\Controllers\classes\general;

use App\Http\Controllers\Controller;
use App\Http\traits\messages;
use App\Models\listings_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GeneralServiceController extends Controller
{
    //
    public function delete_item(){
        $table = request('table');
        $id = request('id');
        if($table == 'listings_infos'){
            listings_info::query()->find($id)->delete();
        }else {
            DB::table($table)->delete($id);
        }
        return messages::success_output([trans('messages.deleted_successfully')]);
    }
}
