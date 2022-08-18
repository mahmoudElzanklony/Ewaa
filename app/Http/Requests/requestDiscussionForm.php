<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class requestDiscussionForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'area_id'=>'required|exists:areas,id',
            'category_id'=>'nullable|exists:categories,id',
            'question'=>'required',
        ];
    }

    public function attributes()
    {
        return [
          'area_id'=>trans('keywords.area'),
          'category_id'=>trans('keywords.category'),
          'question'=>trans('keywords.question'),
        ];
    }
}
