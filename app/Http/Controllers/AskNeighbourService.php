<?php

namespace App\Http\Controllers;

use App\Http\Requests\requestDiscussionForm;
use App\Http\traits\messages;
use App\Models\answers;
use App\Models\answers_reactions;
use App\Models\discussion_answers;
use App\Models\discussion_questions;
use App\Services\notifications\create_notification;
use Illuminate\Http\Request;

class AskNeighbourService extends Controller
{
    //
    public function addquestion(requestDiscussionForm $discussionForm){
        $validated = $discussionForm->validated();
        $validated['user_id'] = auth()->id();

        if($validated['category_id'] == ""){
            $validated['category_id'] = null;
        }

        $data = discussion_questions::query()->create($validated);
        $item = discussion_questions::query()->with('area',function($e){
            $e->with('city');
        })->find($data->id);
        $item['answers_count'] = 0;
        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }

    public function add_answer(){
        $data = request()->all();
        $data['user_id'] = auth()->id();
        // add new answer
        discussion_answers::query()->create($data);
        return messages::success_output(trans('messages.saved_successfully'));
    }

    public function answer_react(){
        $answer = answers_reactions::query()->where([
            ['user_id','=',auth()->id()],
            ['answer_id','=',request('id')],
        ])->with('answer')->first();
        if($answer != null){
            if($answer->type != request('type')) {
                $answer->type = request('type');
                $answer->save();
                // send notification
                create_notification::new_notification([
                    'sender_id'=>auth()->id(),
                    'receiver_id'=>$answer->answer->user_id,
                    'ar_info'=>'قام '.auth()->user()->username.'  بالتفاعل  علي رد '.$answer->answer->answer,
                    'en_info'=>auth()->user()->username.'  react on answer '.$answer->answer->answer,
                    'seen'=>0,
                ]);
            }else{
                // send notification
                create_notification::new_notification([
                    'sender_id'=>auth()->id(),
                    'receiver_id'=>$answer->answer->user_id,
                    'ar_info'=>'قام '.auth()->user()->username.' بالغاء التفاعل من علي رد '.$answer->answer->answer,
                    'en_info'=>auth()->user()->username.' remove react from answer '.$answer->answer->answer,
                    'seen'=>0,
                ]);
                // remove react
                $answer->delete();
            }
        }else{
            $answer = answers_reactions::query()->create([
                'answer_id'=>request('id'),
                'type'=>request('type'),
                'user_id'=>auth()->id()
            ]);
            // send notification
            create_notification::new_notification([
                'sender_id'=>auth()->id(),
                'receiver_id'=>$answer->answer->user_id,
                'ar_info'=>'قام '.auth()->user()->username.'  بالتفاعل  علي رد '.$answer->answer->answer,
                'en_info'=>auth()->user()->username.'  react on answer '.$answer->answer->answer,
                'seen'=>0,
            ]);
        }
        return 1;
    }
}
