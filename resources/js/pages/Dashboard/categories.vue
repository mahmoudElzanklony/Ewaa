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
                                <inertia-link href="#" class="table-item-span" v-for="i in 6" :key="i">
                                    مجمع مساكن
                                    <span><i @click="deleteRecord(2)" class="ri-close-line"></i></span>
                                </inertia-link>
                            </td>
                            <td class="actions">
                                <inertia-link href="/dashboard/categories/10/sub">
                                    <span><i class="ri-eye-line"></i></span>
                                </inertia-link>
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
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import DeleteItemComponent from "../../components/DeleteItemComponent";
export default {
    name: "users",
    mixins:[tableData,SwitchLangWord,DeleteItemComponent],
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
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
