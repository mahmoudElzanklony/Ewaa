<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class noteFormRequest extends FormRequest
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
            'listing_id'=>'nullable|exists:listings_infos,id',
            'note'=>'required',
        ];
    }

    public function attributes()
    {
        return [
           'note'=>trans('keywords.note'),
           'listing_id'=>trans('keywords.listing_name'),
        ];
    }
}
