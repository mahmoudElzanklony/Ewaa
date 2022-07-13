<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
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
                            <td>بيان معين</td>
                            <td class="actions">
                                <inertia-link
                                    v-if="handling_data['actions'].hasOwnProperty(type)"
                                    :href="handling_data['actions'][type]+'10'">
                                    <span>
                                        <i class="ri-eye-line"></i>
                                    </span>
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
                                <label>{{ switchWord('name') }}</label>
                                <input name="name" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary" type="submit" name="send" :value="switchWord('save')">
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
    name: "map",
    mixins:[tableData,SwitchLangWord,DeleteItemComponent],
    props:['keywords','handling_data','main_title'],
    data:function(){
        return {
            modal_data:[],
            type:'',
        }
    },
    created() {
        this.modal_data = Object.keys(this.handling_data['data_model']);
        this.modal_data.pop();
        this.type = document.URL.split('/')[document.URL.split('/').length - 1];
        if(this.type.indexOf('?') > 0){
            this.type = this.type.split('?')[0];
        }
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.actions{
    justify-content: center;
    span:first-of-type{
        margin-left: 5px;
        margin-right: 5px;
    }
}
</style>
