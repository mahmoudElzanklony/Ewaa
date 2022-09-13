<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <span>
                        <i class="ri-arrow-down-s-line toggle_next"></i>
                    </span>
                </p>
                <div class="overflow-auto">
                    <table class="myTable table text-center table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <td v-for="i in table_data" :key="i">
                                {{ i }}
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(i,index) in vuex_data" :key="index" :class="'tr_'+i['id']">
                            <td><img :src="'/images/users/'+i['user']['image']"></td>
                            <td>{{ i['user']['username'] }}</td>
                            <td>{{ i['user']['phone'] }}</td>
                            <td>{{ i['name'] }}</td>
                            <td>{{ i['category'][$page.props.lang+'_name'] }}</td>
                            <td>{{ i['area'][$page.props.lang+'_name'] }}</td>
                            <td>{{ i['price'] }}</td>
                            <td>{{ i['meters_number'] }}</td>
                            <td>{{ i['payment_status'] == 1 ? switchWord('payment_done'):switchWord('pending') }}</td>
                            <td>{{ switchWord(i['type']+'_listings') }}</td>
<!--                            <td v-if="false" class="change_status">
                                    <select class="form-control" :id="i['id']" @change="save_status">
                                        <option value="">{{ switchWord('select_status') }}</option>
                                        <option v-for="(op,index) in ['pending','live','expired','rejected']"
                                                :key="index" :value="op" :selected="i['type'] == op">
                                           {{ switchWord(op+'_listings') }}
                                        </option>
                                    </select>
&lt;!&ndash;                                <input name="toggle" type="checkbox" class="toggle-checkbox-status">&ndash;&gt;
                            </td>-->
                            <td class="actions">
                                <inertia-link :href="'/listing/initialize?id='+i['id']">
                                    <i class="ri-edit-line"></i>
                                </inertia-link>
                                <span
                                      v-if="i['type'] != 'live'" class="accept"
                                      :title="switchWord('accept')"
                                     >
                                    <i  @click="save_status"
                                        :id="i['id']" val="live"
                                        class="ri-check-line"></i>
                                </span>
                                <span
                                    v-if="i['type'] != 'rejected'"
                                       class="rejected"  :title="switchWord('reject')">
                                    <i
                                        @click="save_status"
                                        :id="i['id']"
                                        val="rejected"
                                        class="ri-eye-off-line"></i>
                                </span>

                                <span><i @click="delete_item('listings_infos',i['id'],
                                '.tr_'+i['id'])" class="ri-close-line"></i>
                                </span>

                            </td>
                        </tr>
                        </tbody>
                    </table>
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
import {mapGetters,mapMutations,mapActions} from "vuex";

export default {
    name: "listings",
    mixins:[tableData,SwitchLangWord,delete_item],
    props:['keywords','main_title','data'],
    data:function (){
        return {
            table_data:this.keywords,
        }
    },
    computed:{
       ...mapGetters({
          'vuex_data':'listings_dash/get_data',
       }),
    },
    methods:{
        ...mapMutations({
           'inilalize':'listings_dash/inialize_data',
        }),
        ...mapActions({
           'save_status':'listings_dash/save_listing',
        }),
    },
    created() {
        this.inilalize(this.data);
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
table tr {
    td{
        /*width: 145px !important;
        max-width: 145px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;*/
    }
    td:last-of-type{
        span.accept{
            color: #029d6d !important;
            background-color: #0080001c !important;
        }
        span.rejected{
            background-color: #6d0a0a30;
            color: #e00606;
        }
    }
}
</style>
