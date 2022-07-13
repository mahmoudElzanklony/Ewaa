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
                            <td>{{ switchWord('actions') }}</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="i in 15" :key="i">
                            <td>نوع التشطيب</td>
                            <td>finishing type</td>
                            <td></td>
                            <td>{{ switchWord('question_type_select') }}</td>
                            <td>
                                <input @click="updateStatus(1,'questions',[])" name="toggle" type="checkbox" class="toggle-checkbox-status">
                            </td>
                            <td>
                                <span class="table-item-span">سوبر لوكس</span>
                                <span class="table-item-span"> لوكس</span>
                            </td>
                            <td>
                                <span class="table-item-span">super lux</span>
                                <span class="table-item-span">lux</span>
                            </td>
                            <td></td>

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
                        <question-data-component></question-data-component>
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
import DeleteItemComponent from "../../components/DeleteItemComponent";
import UpdateStatus from "../../mixin/UpdateStatus";
import QuestionDataComponent from "../../components/dashboard/QuestionDataComponent";
export default {
    name: "questions",
    mixins:[tableData,SwitchLangWord,DeleteItemComponent,UpdateStatus],
    props:['keywords','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    created() {
        this.modal_data = Object.keys(this.handling_data['data_model']);
        this.modal_data.pop();
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
