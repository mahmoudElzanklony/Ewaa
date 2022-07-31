<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <button class="btn black-btn btn-outline-primary"
                            data-toggle="modal"
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
                        <tr v-for="(i,index) in handling_data['data']" :key="index" :class="'tr_'+i['id']">
                            <td>{{ i['ar_name'] }}</td>
                            <td>{{ i['en_name'] }}</td>
                            <td style="display: none">{{ i['tu_name'] }}</td>
                            <td class="actions">
                                <inertia-link
                                    v-if="handling_data['actions'].hasOwnProperty(type)"
                                    :href="handling_data['actions'][type]+i['id']">
                                    <span>
                                        <i class="ri-eye-line"></i>
                                    </span>
                                </inertia-link>
                                <span><i data-toggle="modal" data-target="#update_box"
                                         @click="update_item(i)"
                                         class="ri-edit-line"></i></span>
                                <span><i @click="delete_item(type,10,'.tr_'+i['id'])" class="ri-close-line"></i></span>
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
                            <input v-if="param_name != null" type="hidden" :name="param_name" :value="param_value">
                            <input type="hidden" name="type" :value="type">
                            <input v-if="item != null" type="hidden" name="id" :value="item != null ? item['id']:''">
                            <div class="form-group"
                                 v-for="input in modal_data" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <input :name="input" class="form-control"
                                       :value="item != null ? item[input]:''"
                                       :required="input.indexOf('tu') == -1">
                                <p class="alert-danger"></p>
                            </div>
                            <div class="form-group"
                                 v-if="handling_data['data_parent'].length > 0 && param_name == null && type != 'countries'">
                                <label>{{ switchWord('related_to') }}</label>
                                <select class="form-control"
                                        :name="type == 'governments' ? 'country_id':
                                               type == 'cities' ? 'government_id':'city_id'" required>
                                    <option v-for="(parent_el,index) in handling_data['data_parent']"
                                            :key="index" :value="parent_el['id']">{{ parent_el['name'] }}</option>
                                </select>
                                <p class="alert-danger"></p>
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
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item";
import {mapGetters,mapActions,mapMutations} from "vuex";
export default {
    name: "map",
    mixins:[tableData,SwitchLangWord,delete_item,update_item],
    props:['keywords','handling_data','main_title'],
    data:function(){
        return {
            modal_data:[],
            type:'',
            param_name:null,
            param_value:null,
        }
    },
    computed:{
      ...mapGetters({
          'vuex_data':'map_locations_dash/get_data',
      })
    },
    methods:{
      ...mapMutations({
          'update_data':'map_locations_dash/update_data',
          'inilaize':'map_locations_dash/inialize_data',
      }),
      ...mapActions({
         'save_data':'map_locations_dash/save_category'
      }),
    },
    created() {
        // set data to vuex
        this.inilaize(this.handling_data['data']);

        this.modal_data = Object.keys(this.handling_data['data_model']);
        // get type of map
        this.type = document.URL.split('/')[document.URL.split('/').length - 1];
        // check if i have parent_id or not
        if(this.type.indexOf('?') > 0){
            this.type = this.type.split('?')[0];
            var param =  document.URL.split('/')[document.URL.split('/').length - 1]
                        .split('?')[1].split('=');
            this.param_name = param[0];
            this.param_value = param[1];
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
