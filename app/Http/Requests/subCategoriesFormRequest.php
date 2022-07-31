<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class subCategoriesFormRequest extends FormRequest
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
            'ar_name_cat'=>'required|max:191',
            'en_name_cat'=>'required|max:191',
            'tu_name_cat'=>'nullable|max:191',
            'ar_info'=>'required|max:191',
            'en_info'=>'required|max:191',
            'tu_info'=>'nullable|max:191',
            'parent_id'=>'nullable|exists:categories,id',
            'image'=>'nullable|image|mimes:jpg,jpeg,png,gif',
            'questions.*'=>['nullable','max:191'],
            'ar_name'=>'nullable|max:191',
            'en_name'=>'nullable|max:191',
            'tu_name'=>'nullable|max:191',
            'required_status'=>['nullable','max:191',Rule::in(['1','0'])],
            'type'=>['nullable','max:191',Rule::in(['text','select','radio'])],
            'ar_answers.*'=>['nullable','max:191'],
            'en_answers.*'=>['nullable','max:191'],
            'tu_answers.*'=>['nullable','max:191'],
        ];
    }
}
