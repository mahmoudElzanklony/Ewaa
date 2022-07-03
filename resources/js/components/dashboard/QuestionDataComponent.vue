<template>
    <div class="new_questions mb-2" >
        <div class="form-group">
            <input class="form-control" name="ar_question"
                   :placeholder="switchWord('ar_question')" required>
        </div>
        <div class="form-group">
            <input class="form-control" name="en_question"
                   :placeholder="switchWord('en_question')" required>
        </div>
        <div class="form-group">
            <input class="form-control" name="tu_question"
                   :placeholder="switchWord('tu_question')" required>
        </div>
        <div class="form-group">
            <select class="form-control" name="question_required" required>
                <option v-for="(i,index) in ['question_required','required','not_required']
                                        " :key="index" :value="i">
                    {{ switchWord(i) }}
                </option>
            </select>
        </div>
        <div class="form-group">
            <select class="form-control" name="question_type" v-model="question_type" required>
                <option v-for="(i,index) in Object.keys(question_data)
                                        " :key="index" :value="question_data[i]">
                    {{ switchWord(i) }}
                </option>
            </select>
        </div>
        <div class="answers" v-if="question_type == 'select'">
            <div class="inner">
                <div class="row">
                    <div class="col-md-4 col-12"
                         v-for="(i,index) in ['question_answer_ar',
                                                  'question_answer_en','question_answer_tu']"
                    >
                        <div>
                            <input class="form-control mb-2"
                                   :name="i.split('question_answer')[1]+'answers[]'"
                                   :placeholder="switchWord(i)" required>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-primary" type="button" @click="add_new_answer">
                {{ switchWord('add_question_answer') }}
            </button>
        </div>
    </div>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "QuestionDataComponent",
    mixins:[SwitchLangWord],
    data:function(){
        return {
            question_data:{
                question_type:'',
                question_type_text:'text',
                question_type_select:'select',
                question_type_checkbox:'checkbox'
            },
            question_type:'',
        }
    },
    methods:{
        add_new_answer:function(){
            var row = document.createElement('div');
            row.className = 'row';
            $(event.target).prev().find('.row:first-of-type').find('input').val('');
            row.innerHTML = $(event.target).prev().find('.row:first-of-type')[0].innerHTML+'<span><i class="ri-close-line delete-icon-input"></i></span>';
            $('.answers .inner').append(row);
        }
    },

}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
</style>
