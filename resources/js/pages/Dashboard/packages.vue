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
                            <td v-for="(i,index) in handling_data['table_head_keys']" :key="index">
                                {{ i }}
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(i,index) in vuex_data" :key="index" :class="'tr_'+i['id']">
                            <td><img :src="'/images/packages/'+i['image']"></td>
                            <td>{{ i['ar_name'] }}</td>
                            <td>{{ i['en_name'] }}</td>
                            <td>{{ i['currency'][$page.props.lang+'_name'] }}</td>
                            <td>{{ i['min_value'] }}</td>
                            <td>{{ i['max_value'] }}</td>
                            <td>{{ i['price'] }}</td>
                            <td>{{ i['is_visible'] == 1 ? switchWord('visible'):switchWord('not_visible') }}</td>
                            <td>{{ i['expiration_date'] }}</td>
                            <td v-if="i['countries'].length > 0">
                                <span v-for="(c,index) in i['countries']"
                                      :title="switchWord('point_price')+' : '+c['price']"
                                      :key="index">
                                    {{ c['country_info'][$page.props.lang+'_name'] }}
                                </span>
                            </td>
                            <td v-else></td>
                            <td class="actions">
                                <span><i data-toggle="modal" @click="update_item(i)" data-target="#update_box" class="ri-edit-line"></i></span>
                                <span><i @click="delete_item('packages',i['id'],'.tr_'+i['id'])" class="ri-close-line"></i></span>
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
                        <h5 class="modal-title" id="update_box_data">
                            {{ item == null ? switchWord('add_new_item'):switchWord('update_new_item') }}
                        </h5>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_package">
                            <input v-if="item != null" type="hidden" name="id" :value="item['id']">
                            <div class="form-group">
                                <img v-if="item == null" class="box-image"
                                     src="/images/packages/default.png">
                                <img v-else class="box-image"
                                     :src="'/images/packages/'+item['image']">
                            </div>
                            <div class="form-group"
                                 v-for="input in modal_data" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <select name="currency_id" class="form-control" v-if="input == 'currency_id'" required>
                                    <option>{{ switchWord('select_currency') }}</option>
                                    <option
                                        v-for="(curr,index) in handling_data['data']['currencies']"
                                        :key="index" :value="curr['id']"
                                        :selected="item != null && item['currency_id'] == curr['id']">
                                        {{ curr.name }}
                                    </option>
                                </select>
                                <select name="is_visible" class="form-control"
                                        v-else-if="input == 'is_visible'" required>
                                    <option value="">{{ switchWord('is_visible') }}</option>
                                    <option value="1"
                                            :selected="item != null && item['is_visible'] == 1">{{ switchWord('visible') }}</option>
                                    <option value="0" :selected="item != null && item['is_visible'] == 0">{{ switchWord('not_visible') }}</option>
                                </select>
                                <input type="date" class="form-control"
                                       v-else-if="input == 'expiration_date'"
                                       :value="item != null ? item['expiration_date'] : ''"
                                       name="expiration_date">

                                <input :name="input" v-else class="form-control"
                                       :value="item != null ? item[input] : ''"
                                       required>
                            </div>
                            <div class="specific_areas" v-if="item != null && item['countries'].length > 0">
                                <div :class="'area-inputs input-has-delete d-flex  el_'+cou['id']"
                                     v-for="(cou,index) in item['countries']"
                                     :key="index">
                                    <div class="form-group w-50 ml-3">
                                        <input type="hidden" name="country_package_ids[]" :value="cou['id']">
                                        <select class="form-control" name="country_id[]">
                                            <option value="">{{ switchWord('select_country') }}</option>
                                            <option v-for="(c,i) in handling_data['data']['countries']"
                                                    :selected="c['id'] == cou['country_id']"
                                                    :key="i" :value="c['id']">
                                                {{ c['name'] }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group w-25 ml-3">
                                        <input type="number" class="form-control" name="prices[]" :value="cou['price']">
                                    </div>
                                    <span class="q_delete"
                                          @click="delete_item('packages_prices_places',cou['id'],'.el_'+cou['id'])"><i class="ri-close-line"></i></span>
                                </div>
                            </div>
                            <div class="specific_areas" v-else>

                            </div>
                            <button type="button"
                                    @click="add_new_country"
                                    class="btn btn-outline-primary mb-2 add_new_country">
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
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary"
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
import update_item from "../../mixin/update_item";
import delete_item from "../../mixin/delete_item";
import {mapMutations,mapActions,mapGetters} from "vuex";
export default {
    name: "packages",
    mixins:[tableData,SwitchLangWord,delete_item,update_item],
    props:['keywords','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    computed:{
        ...mapGetters({
            'vuex_data':'packages_dash/get_data',
        }),
    },
    methods:{
        ...mapMutations({
           'update_data':'packages_dash/update_data',
            'inialize_data':'packages_dash/inialize_data',
        }),
        ...mapActions({
            'save_package':'packages_dash/save_package',
        }),
        /*add_area_inputs:function (){
            var output = '<div class="area-inputs"><div class="form-group"><select name="area_type" class="form-control w-75" required><option value="">'+this.switchWord('please_select_type_of_area_you_want_to_be_added')+'</option>';

            for(let item of ['country','government','city','area']){
                output += '<option value="'+item+'">'+this.switchWord(item)+'</option>';
            }
            output += '</select></div><div class="row"></div><div class="form-group"><label>'+this.switchWord('point_price')+'</label><input name="point_price" class="form-control" required></div><span><i class="ri-close-line delete-icon-input"></i></span></div>';
            $(event.target).prev().append(output);
        }*/
        add_new_country:function(){
            var country_selected = '';
            if(this.$inertia.page.props.lang == 'ar'){
                country_selected = 'أختر الدولة التي تود انشاء سعر خاص بها';
            }else{
                country_selected = 'Select country you want to add specific price for it';
            }

            var output = '<div class="area-inputs d-flex "><div class="form-group w-50 ml-3"><select name="country_id[]" class="form-control" required><option value="">'+country_selected+'</option>';

            for(let country of this.handling_data['data']['countries']){
                output +='<option value="'+country['id']+'">'+country['name']+'</option>';
            }

            var price = this.switchWord('point_price');


            output += '</select></div><div class="form-group w-25 ml-3"><input name="prices[]" class="form-control" placeholder="'+price+'" required></div><span><i class="ri-close-line delete-icon-input"></i></span></div>';
            $(event.target).prev().append(output);
        }
    },
    created() {
        this.modal_data = Object.keys(this.handling_data['data_model']);
        this.modal_data.pop();
        this.inialize_data(this.handling_data['data']['packages']);
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
