<?php

namespace App\Http\Controllers;

use App\Http\Requests\requestDiscussionForm;
use App\Http\traits\messages;
use App\Models\discussion_questions;
use Illuminate\Http\Request;

class AskNeighbourService extends Controller
{
    //
    public function addquestion(requestDiscussionForm $discussionForm){
        $data = discussion_questions::query()->create($discussionForm->validated());
        $item = discussion_questions::query()->with('area',function($e){
            $e->with('city');
        })->find($data->id);
        $item['answers_count'] = 0;
        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }
}
