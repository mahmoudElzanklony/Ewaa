<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ keywords.main_title }}</span>
                    <button class="btn black-btn btn-outline-primary"
                            data-toggle="modal" data-target="#update_box" @click="update_item(null)">
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
                        <tr v-for="(i,index) in vuex_data"
                            :key="index" :class="'tr_'+i['id']">
                            <td>{{ i['ar_name'] }}</td>
                            <td>{{ i['en_name'] }}</td>
<!--                            <td style="display: none">{{ i['tu_name'] }}</td>-->
                            <td>{{ i['currency_code'] }}</td>
                            <td>{{ i['country_code'] }}</td>
                            <td>{{ i['is_default'] == 0 ? switchWord('no') : switchWord('yes') }}</td>
                            <td class="actions">
                                <span><i data-toggle="modal" data-target="#update_box"
                                         @click="update_item(i)"
                                         class="ri-edit-line"></i></span>
                                <span><i @click="delete_item('currencies',i['id'],'.tr_'+i['id'])" class="ri-close-line"></i></span>
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
                            <input v-if="item != null" type="hidden" name="id" :value="item.id">
                            <div class="form-group"
                                 v-for="input in Object.keys(handling_data['data_model'])" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <input :name="input" class="form-control" v-if="input != 'is_default'"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tu') == -1">
                                <select v-else :name="input" class="form-control" required>
                                    <option value="">{{ switchWord('if_currency_is_default_or_not') }}</option>
                                    <option value="1" :selected="item != null && item[input] == 1">{{ switchWord('yes') }}</option>
                                    <option value="0" :selected="item == null || (item != null && item[input] == 0)">{{ switchWord('no') }}</option>
                                </select>
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
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "currencies",
    mixins:[tableData,SwitchLangWord,update_item,delete_item],
    props:['keywords','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    computed:{
        ...mapGetters({
            'vuex_data':'currencies_dash/get_data',

        }),
    },
    methods:{
        ...mapActions({
            'save_category':'currencies_dash/save_package'
        }),
        ...mapMutations({
            'update_data':'currencies_dash/update_data',
            'inilaize':'currencies_dash/inialize_data',

        }),
    },
    created() {
        this.inilaize(this.handling_data['data']);

    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
