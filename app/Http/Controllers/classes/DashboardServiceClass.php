<?php

namespace App\Http\Controllers\classes;

use App\Http\Controllers\Controller;
use App\Http\Requests\categoriesFormRequest;
use App\Http\traits\messages;
use App\Models\categories;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;

class DashboardServiceClass extends Controller
{
    //
    use upload_image;
    public function save_category(categoriesFormRequest $request){
        $validated = $request->validated();
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'categories');
            $validated['image'] = $image;
        }else if(!(request()->has('id'))){
            $validated['image'] = 'default.png';
        }
        $item = categories::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');
    }
}
