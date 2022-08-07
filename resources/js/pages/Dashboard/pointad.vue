<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
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
                            <td>{{ i['place']['ar_name'] }}</td>
                            <td>{{ i['place']['en_name'] }}</td>
                            <!--                            <td style="display: none">{{ i['tu_name'] }}</td>-->
                            <td>{{ switchWord(i['type']) }}</td>
                            <td>{{ i['no_points'] }}</td>
                            <td class="actions">
                                <span><i data-toggle="modal" data-target="#update_box"
                                         @click="update_item(i)"
                                         class="ri-edit-line"></i></span>
                                <span><i @click="delete_item('advertising_points_prices',i['id'],'.tr_'+i['id'])" class="ri-close-line"></i></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade point_ad" id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_box_data">{{ item == null ? switchWord('add_new_item'):switchWord('update_new_item') }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="save_ad_point" method="post" @submit.prevent="save_point_ad">
                            <input v-if="item != null" type="hidden" name="id" :value="item.id">
                            <div class="form-group"
                                 v-for="input in Object.keys(handling_data['data_model'])" :key="input">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <select v-if="input == 'type'"
                                        name="type"
                                        @change="detectType"
                                        class="form-control" required>
                                    <option v-for="(type,index) in Object.keys(handling_data['type_data'])"
                                            :key="index" :value="type" :selected="item != null && item['type'] == type">
                                        {{ handling_data['type_data'][type] }}
                                    </option>
                                </select>
                                <input :name="input" class="form-control" v-else
                                       v-model="point_ad" :required="input.indexOf('tu') == -1">
                            </div>

                            <div class="row">
                                <div class="col-lg-6"
                                     v-for="(i,index) in Object.keys(handling_data['place_data'])" :key="index">
                                    <div class="form-group">
                                        <select class="form-control"
                                                @change="update_location"
                                                required :name="i">
                                            <option>{{ switchWord(handling_data['place_data'][i]) }}</option>
                                            <option v-for="(val,index) in map_data(i)" :key="index"
                                                    :value="val['id']"
                                                    :selected="item != null && item['place_id'] == val['id']">{{ val['name'] }}</option>
                                        </select>
                                    </div>
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
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "pointad",
    mixins:[tableData,SwitchLangWord,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
            item:null,
            point_ad:0,
        }
    },
    computed:{
        ...mapGetters({
            'vuex_data':'pointad_dash/get_data',
            'map_data':'countries_govenrn_cities_areas/get_items_data',
        })
    },
    methods:{
        ...mapMutations({
           'inilaize_data':'pointad_dash/inialize_data',
           'inilaize_data_map':'countries_govenrn_cities_areas/inialize_items',
        }),
        ...mapActions({
           'save_point_ad':'pointad_dash/save_point_ad',
           'update_location':'countries_govenrn_cities_areas/update_location',
            'request_map_type':'countries_govenrn_cities_areas/request_map_type',
        }),
        update_item:function (e){
            this.item = e;
            if(e != null){
                $('.save_ad_point .row > div').hide();
                this.point_ad = e['no_points'];
                let index = $('.point_ad form select').eq(0).find('option[value="'+e['type']+'"]').index();
                let counter = 0;
                while(counter < index){
                    $('select[name="type"]').parent().next().find('>div').eq(counter).show()
                    if(index - counter == 1){
                        this.request_map_type(e['type']);

                    }
                    counter++;
                }
            }else{
                this.point_ad = 0;
                $('#update_box form')[0].reset();
                $('.save_ad_point .row > div').hide();
                this.inilaize_data_map({name:'governments',value:[]});
                this.inilaize_data_map({name:'cities',value:[]});
                this.inilaize_data_map({name:'areas',value:[]});


            }
        },
        detectType:function(){
            var target = event.target;

            let number = $(target).find('option:selected').index();
            var counter = 0;

            $('select[name="type"]').parent().next().find('>div').hide();
            while(counter < number){
                $('select[name="type"]').parent().next().find('>div').eq(counter).show()
                counter++;
            }

        }
    },
    created() {
        this.inilaize_data(this.handling_data['data']);
        // map data
        this.inilaize_data_map({name:'countries',value:this.handling_data['country_id']})
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.save_ad_point .row > div{
    display: none;
}
</style>
