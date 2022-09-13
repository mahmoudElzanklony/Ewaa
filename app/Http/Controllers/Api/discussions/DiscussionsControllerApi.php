<?php

namespace App\Http\Controllers\Api\discussions;

use App\Http\Controllers\Controller;
use App\Http\Requests\requestDiscussionForm;
use App\Http\traits\messages;
use App\Models\answers_reactions;
use App\Models\discussion_answers;
use App\Models\discussion_questions;
use App\Services\discussions\all_discussion_answers;
use App\Services\discussions\discussions_questions;
use App\Services\notifications\create_notification;
use Illuminate\Http\Request;

class DiscussionsControllerApi extends Controller
{
    //
    public function questions(){
        $data = discussions_questions::questions(request()->all());
        return messages::success_output('',$data);
    }

    public function answers(){
        $data = all_discussion_answers::get_answers(request('question_id'));
        return messages::success_output('',$data);
    }

    public function make_question(requestDiscussionForm $discussionForm){
        $data = $discussionForm->validated();
        $data['user_id'] = auth()->id();
        if($data['category_id'] == ""){
            $data['category_id'] = null;
        }
        $question = discussion_questions::query()->create($data);
        return messages::success_output(trans('messages.saved_successfully'));

    }

    public function make_answer(){
        $data = request()->all();
        $data['user_id'] = auth()->id();
        // add new answer
        discussion_answers::query()->create($data);
        return messages::success_output(trans('messages.saved_successfully'));
    }

    public function make_react(){
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
