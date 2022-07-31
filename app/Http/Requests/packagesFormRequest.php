<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class packagesFormRequest extends FormRequest
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
            'image'=>'nullable|image|mimes:jpg,jpeg,png,gif',
            'currency_id'=>'required|exists:currencies,id',
            'min_value'=>'required',
            'max_value'=>'required',
            'price'=>'required',
            'is_visible'=>['required','max:191',Rule::in(['1','0'])],
            'expiration_date'=>'nullable',
        ];
    }

    public function attributes()
    {
        return [
            'image'=>trans('keywords.image'),
            'currency_id'=>trans('keywords.currency'),
            'min_value'=>trans('keywords.min_value'),
            'max_value'=>trans('keywords.max_value'),
            'price'=>trans('keywords.point_price'),
            'is_visible'=>trans('keywords.is_visible'),
            'expiration_date'=>trans('keywords.expiration_date'),
        ];
    }
}
