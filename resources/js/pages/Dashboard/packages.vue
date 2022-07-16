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
                            <td><img src="/images/users/one.jpg"></td>
                            <td>10</td>
                            <td>100</td>
                            <td>4 $</td>
                            <td></td>
                            <td class="actions">
                                <span><i data-toggle="modal" data-target="#update_box" class="ri-edit-line"></i></span>
                                <span><i @click="deleteRecord(10,'packages')" class="ri-close-line"></i></span>
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
                        <h5 class="modal-title" id="update_data_box">
                            {{ switchWord('add_new_item') }}
                        </h5>
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
                            <div class="specific_areas">

                            </div>
                            <button type="button" class="btn btn-outline-primary mb-2 add_new_country">
                                {{ keywords['add_specific_price_for_specific_areas'] }}
                            </button>
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
    name: "packages",
    mixins:[tableData,SwitchLangWord,DeleteItemComponent],
    props:['keywords','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    methods:{
        /*add_area_inputs:function (){
            var output = '<div class="area-inputs"><div class="form-group"><select name="area_type" class="form-control w-75" required><option value="">'+this.switchWord('please_select_type_of_area_you_want_to_be_added')+'</option>';

            for(let item of ['country','government','city','area']){
                output += '<option value="'+item+'">'+this.switchWord(item)+'</option>';
            }
            output += '</select></div><div class="row"></div><div class="form-group"><label>'+this.switchWord('point_price')+'</label><input name="point_price" class="form-control" required></div><span><i class="ri-close-line delete-icon-input"></i></span></div>';
            $(event.target).prev().append(output);
        }*/
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
