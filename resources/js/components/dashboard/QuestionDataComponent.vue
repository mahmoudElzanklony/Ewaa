<template>
    <div class="new_questions row flex-wrap mb-2" >
        <div>
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
                <select class="form-control" name="question_required"
                        required>
                    <option v-for="(i,index) in ['question_required','required','not_required']
                                            " :key="index" :value="i == 'question_required' ? '':i"
                            >
                        {{ switchWord(i) }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" name="question_type" v-model="question_type"
                        required>
                    <option v-for="(i,index) in Object.keys(question_data)
                                            " :key="index" :value="question_data[i]" >
                        {{ switchWord(i) }}
                    </option>
                </select>
            </div>
        </div>
        <div class="answers">

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

    },

}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.answers .inner .row{
    margin-bottom: 20px;
}
</style>
