<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <button class="btn black-btn btn-outline-primary" data-toggle="modal"
                            @click="update_item(null)"
                            data-target="#update_box" >
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
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(i,index) in vuex_data" :key="index" :class="'tr_'+i['id']">
                            <td><img :src="'/images/categories/'+i['image']"></td>
                            <td>{{ i['ar_name_cat'] }}</td>
                            <td>{{ i['en_name_cat'] }}</td>
                            <td style="display: none">{{ i['tu_name_cat'] }}</td>
                            <td>{{ i['ar_info'] }}</td>
                            <td>{{ i['en_info'] }}</td>
                            <td style="display: none">{{ i['tu_info'] }}</td>
                            <td>
                                <span class="table-item-span" v-for="(question,index) in i['questions']" :key="index">
                                    {{ question['ar_name'] }}
                                    <span><i @click="deleteRecord(2)" class="ri-close-line"></i></span>
                                </span>
                            </td>
                            <td class="actions">
                                <span><i data-toggle="modal" @click="update_item(i)" data-target="#update_box" class="ri-edit-line"></i></span>
                                <span><i @click="delete_item('categories',i['id'],'.tr_'+i['id'])" class="ri-close-line"></i></span>
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
                        <h5 class="modal-title" id="update_box_data">{{ item == null ? switchWord('add_new_item'):switchWord('update_new_item')+item.ar_name }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_category">
                            <input v-if="item != null" type="hidden" name="id" :value="item != null ? item['id']:''">
                            <div class="form-group">
                                <img class="box-image" v-if="item == null"
                                     src="/images/categories/default.png">
                                <img v-else class="box-image" :src="'/images/categories/'+item['image']">
                            </div>
                            <div class="form-group"
                                 v-for="input in modal_data" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <input :name="input" class="form-control"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tu') == -1">
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between radio-buttons">
                                <p class="d-flex align-items-center justify-content-between">
                                    <input type="radio" name="question_selection" value="old"
                                           :checked="item != null"
                                           @change="update_question_selection" >
                                    <span>{{ keywords.select_from_questions }}</span>
                                </p>
                                <p class="d-flex align-items-center justify-content-between">
                                    <input type="radio" name="question_selection" value="new" @change="update_question_selection" >
                                    <span>{{ keywords.add_new_question }}</span>
                                </p>
                            </div>
                            <div class="old_questions mb-2" :style="{'display':(item != null) ? 'block':'none'}">
                                <div class="inner" v-if="item != null">
                                    <div :class="'input-has-delete form-group input_'+item['cat_questions'][
                                                   item['cat_questions'].findIndex((e)=>{return e.question_id == question['id']})
                                                   ]['id']" v-for="(question,index) in item['questions']" :key="index">
                                        <input type="hidden" name="old_questions_ids[]"
                                               :value="item['cat_questions'][
                                                   item['cat_questions'].findIndex((e)=>{return e.question_id == question['id']})
                                                   ]['id']">
                                        <select name="questions[]" class="form-control" >
                                            <option value="">{{ keywords.select_question }}</option>
                                            <option v-for="(i,index) in handling_data['questions']" :key="index"
                                                    :value="i['id']" :selected="i['id'] == question['id']">
                                                {{ i['name'] }}
                                            </option>
                                        </select>
                                        <span >
                                            <i @click="delete_item('categories_questions',item['cat_questions'][
                                                   item['cat_questions'].findIndex((e)=>{return e.question_id == question['id']})
                                                   ]['id'],'.input_'+item['cat_questions'][
                                                   item['cat_questions'].findIndex((e)=>{return e.question_id == question['id']})
                                                   ]['id'])"                                                                           class="ri-close-line"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="inner" v-else>
                                    <div class="form-group">
                                        <select name="questions[]" class="form-control" >
                                            <option value="">{{ keywords.select_question }}</option>
                                            <option v-for="(i,index) in handling_data['questions']" :key="index" :value="i['id']">
                                                {{ i['name'] }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-outline-primary" @click="add_another_question">
                                    {{ keywords.add_another_question }}
                                </button>
                            </div>
                            <div class="inserted_questions">
                                <question-data-component :required_false="true"></question-data-component>
                            </div>
                            <button class="btn btn-outline-primary add_new_question_box mb-3"
                                    type="button"
                                    >{{ switchWord('add_new_question') }}</button>
                            <div class="form-group">
                                <div class="drag-drop-files">
                                    <input type="file" class="preview-image" name="image" accept="image/*"
                                           selector=".modal-dialog img.box-image">
                                    <button type="button" class="btn btn-primary">
                                        <span>{{ switchWord('upload_image') }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="save" class="btn btn-primary"
                                       :value="switchWord('save')">
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
import DeleteItemComponent from "../../components/DeleteItemComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import QuestionDataComponent from "../../components/dashboard/QuestionDataComponent";
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item";
import {mapMutations,mapGetters,mapActions} from "vuex";
export default {
    name: "sub_categories",
    props:['keywords','handling_data'],
    mixins:[DeleteItemComponent,SwitchLangWord,delete_item,update_item],
    data:function(){
        return {
            modal_data:[],
            question_selection:null,
        }
    },
    computed:{
       ...mapGetters({
           'vuex_data':'sub_categories_dash/get_data',
       })
    },
    methods:{
        ...mapActions({
           'save_category':'sub_categories_dash/save_category'
        }),
        ...mapMutations({
           'update_data':'sub_categories_dash/update_data',
        }),
        update_question_selection:function(){
            var value  = event.target.value;
            var parent_div = $(event.target).parent().parent();
            if(value == 'old'){
                parent_div.next().show();
                parent_div.next().next().hide();
                parent_div.next().next().next().hide();
            }else{
                parent_div.next().hide();
                parent_div.next().next().show();
                parent_div.next().next().next().hide();
            }
        },
        add_another_question:function (){
            var output = '';
            for(let option of this.handling_data['questions']){
                 output += '<option value="'+option.id+'">'+option['name']+'</option>'
            }
            var select = '<div class="form-group"><select name="questions[]" class="form-control">'+output+'</select><span ><i class="ri-close-line delete-icon-input"></i></span></div>'

            $(event.target).prev().append(select);
        },

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
.old_questions , .inserted_questions , .add_new_question_box{
    display: none;
}
@media (min-width: 576px) {
    .modal-dialog{
        max-width:75%;
    }
}

</style>
