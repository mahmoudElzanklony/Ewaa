<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <button class="btn black-btn btn-outline-primary"
                            @click="update_item(null)"
                            data-toggle="modal" data-target="#update_box" >
                        {{ switchWord('add_new_item') }}
                    </button>
                </p>
                <div class="overflow-auto">
                    <table class="myTable table text-center table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <td v-for="i in handling_data['table_head_keys']" :key="i">
                                    {{ i }}
                                </td>
                                <td>{{ switchWord('actions') }}</td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(question,index) in get_data" :key="index" :class="'tr_'+question['id']">
                            <td>{{ question['ar_name'] }}</td>
                            <td>{{ question['en_name'] }}</td>
                            <td style="display: none">{{ question['tu_name'] }}</td>
                            <td>{{ switchWord('question_type_'+question['type']) }}</td>
                            <td>
<!--                                <input @click="updateStatus(question.id,'questions')" name="toggle" type="checkbox" class="toggle-checkbox-status" :checked="question['required_status'] == 1">-->
                                {{ switchWord(question['required_status'] == 1 ? 'required':'not_required') }}
                            </td>
                            <td v-if="question['type'] == 'select'">
                                <span v-for="(selection,index) in question['answers']" :key="index" class="table-item-span">
                                    {{ selection['ar_name'] }}
                                </span>
                            </td>
                            <td v-else></td>
                            <td v-if="question['type'] == 'select'">
                                <span v-for="(selection,index) in question['answers']" :key="index" class="table-item-span">
                                    {{ selection['en_name'] }}
                                </span>
                            </td>
                            <td v-else></td>
                            <td style="display: none" v-if="question['type'] == 'select' && question['answers'][0]['tu_name'] != null">
                                <span v-for="(selection,index) in question['answers']" :key="index" class="table-item-span">
                                    {{ selection['tu_name'] }}
                                </span>
                            </td>
                            <td style="display: none" v-else></td>

                            <td class="actions">
                                <span><i data-toggle="modal" data-target="#update_box"
                                         @click="update_item(question)"
                                         class="ri-edit-line"></i>
                                </span>
                                <span><i
                                    @click="delete_item('questions',question['id'],'.tr_'+question['id'])" class="ri-close-line"></i></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_box_data">{{ switchWord('add_new_item') }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_data">
                            <question-data-component :data="item"></question-data-component>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" :value="switchWord('save')">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import UpdateStatus from "../../mixin/UpdateStatus";
import QuestionDataComponent from "../../components/dashboard/QuestionDataComponent";
import update_item from "../../mixin/update_item";

import {mapActions , mapMutations , mapGetters} from "vuex";
export default {
    name: "questions",
    mixins:[tableData,SwitchLangWord,delete_item,UpdateStatus,update_item],
    props:['keywords','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    computed:{
       ...mapGetters({
          'get_data':'questions_dash/get_data',
       })
    },
    methods:{
        ...mapMutations({
            'update_data':'questions_dash/update_data',
        }),
        ...mapActions({
           'save_data':'questions_dash/save_question'
        }),
    },
    created() {
        this.modal_data = Object.keys(this.handling_data['data_model']);
        this.modal_data.pop();
        this.update_data(this.handling_data['data']);
    },
    components: {QuestionDataComponent, SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
@media (min-width: 576px) {
    .modal-dialog{
        max-width:75%;
    }
}
</style>
