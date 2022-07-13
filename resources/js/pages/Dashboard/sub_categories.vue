<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <button class="btn black-btn btn-outline-primary" data-toggle="modal" data-target="#update_box" >
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
                        <tr v-for="i in 15" :key="i">
                            <td><img src="/images/categories/one.png"></td>
                            <td>العقارات</td>
                            <td>Listings</td>
                            <td></td>
                            <td>وصف القسم</td>
                            <td>category info</td>
                            <td></td>
                            <td>
                                <span class="table-item-span" v-for="i in 6" :key="i">
                                    اسم العقار
                                    <span><i @click="deleteRecord(2)" class="ri-close-line"></i></span>
                                </span>
                            </td>
                            <td class="actions">
                                <span><i data-toggle="modal" data-target="#update_box" class="ri-edit-line"></i></span>
                                <span><i @click="deleteRecord(10)" class="ri-close-line"></i></span>
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
                        <form>
                            <div class="form-group">
                                <img class="box-image"
                                     src="/images/users/default.png">
                            </div>
                            <div class="form-group"
                                 v-for="input in modal_data" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <input :name="input" class="form-control" required>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between radio-buttons">
                                <p class="d-flex align-items-center justify-content-between">
                                    <input type="radio" name="question_selection" value="old" v-model="question_selection">
                                    <span>{{ keywords.select_from_questions }}</span>
                                </p>
                                <p class="d-flex align-items-center justify-content-between">
                                    <input type="radio" name="question_selection" value="new" v-model="question_selection">
                                    <span>{{ keywords.add_new_question }}</span>
                                </p>
                            </div>
                            <div class="old_questions mb-2" v-show="question_selection == 'old'">
                                <div class="inner">
                                    <div class="form-group">
                                        <select name="questions[]" class="form-control" required>
                                            <option value="">{{ keywords.select_question }}</option>
                                            <option v-for="(i,index) in 6" :key="index" :value="i">
                                                {{ i }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-outline-primary" @click="add_another_question">
                                    {{ keywords.add_another_question }}
                                </button>
                            </div>
                            <div class="inserted_questions"  v-show="question_selection == 'new'">
                                <question-data-component></question-data-component>
                            </div>
                            <button v-if="question_selection == 'new'"  class="btn btn-outline-primary add_new_question_box mb-3" type="button"
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
export default {
    name: "sub_categories",
    props:['keywords','handling_data'],
    mixins:[DeleteItemComponent,SwitchLangWord],
    data:function(){
        return {
            modal_data:[],
            question_selection:null,


        }
    },
    methods:{

        add_another_question:function (){
            var output = '';
            for(let option of $('.old_questions .inner >  div:first-of-type select option')){
                 output += '<option value="'+option.value+'">'+option.textContent+'</option>'
            }
            var select = '<div class="form-group"><select name="questions[]" class="form-control" required>'+output+'</select><span ><i class="ri-close-line delete-icon-input"></i></span></div>'

            $(event.target).prev().append(select);

        },

    },
    created() {
        this.modal_data = Object.keys(this.handling_data['data_model']);
        this.modal_data.pop();
    },
    components: {QuestionDataComponent, SideNavbarComponent}
}
</script>

<style scoped>
@media (min-width: 576px) {
    .modal-dialog{
        max-width:75%;
    }
}

</style>
