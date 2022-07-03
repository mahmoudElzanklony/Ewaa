<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <span>
                        <i class="ri-arrow-down-s-line toggle_next"></i>
                    </span>
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
                                <td><img src="/images/users/one.jpg"></td>
                                <td>أحمد علي</td>
                                <td>Ahmed@yahoo.com</td>
                                <td>0100312321</td>
                                <td>القاهرة</td>
                                <td>
                                    <input name="toggle" type="checkbox" class="toggle-checkbox-status">
                                </td>
                                <td>
                                    <input name="toggle" type="checkbox" class="toggle-checkbox-status" checked>
                                </td>
                                <td class="actions">
                                    <span><i data-toggle="modal" data-target="#update_users" class="ri-edit-line"></i></span>
                                    <span><i @click="deleteRecord(10)" class="ri-close-line"></i></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="update_users" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_users_box">{{ keywords.update_user }}</h5>
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
                                        <span>{{ keywords.upload_image }}</span>
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
