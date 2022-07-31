<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class questionsFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ar_name'=>'required|max:191',
            'en_name'=>'required|max:191',
            'tu_name'=>'nullable|max:191',
            'required_status'=>['required','max:191',Rule::in(['1','0'])],
            'type'=>['required','max:191',Rule::in(['text','select','radio'])],
            'ar_answers.*'=>['nullable','max:191'],
            'en_answers.*'=>['nullable','max:191'],
            'tu_answers.*'=>['nullable','max:191'],
        ];
    }

    public function attributes()
    {
        return [
            'ar_question'=>trans('keywords.ar_question'),
            'en_question'=>trans('keywords.en_question'),
            'tu_question'=>trans('keywords.tu_question'),
            'required_status'=>trans('keywords.question_required'),
            'type'=>trans('keywords.question_type'),

        ];
    }
}
