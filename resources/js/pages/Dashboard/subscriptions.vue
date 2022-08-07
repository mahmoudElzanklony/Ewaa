<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
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
                        <tr v-for="(i,index) in handling_data['data']" :key="index" :class="'tr_'+i['id']">
                            <td>{{ i['user']['username'] }}</td>
                            <td>{{ i['package'][$page.props.lang+'_name'] }}</td>
                            <td>{{ i['points_ordered'] }}</td>
                            <td>{{ i['package']['min_value'] }}</td>
                            <td>{{ i['package']['max_value'] }}</td>
                            <td>{{ i['point_price'] }}</td>
                            <td class="actions">
                                <span><i @click="delete_item('subscriptions',i['id'],'.tr_'+i['id'])" class="ri-close-line"></i></span>
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
import update_item from "../../mixin/update_item";
import delete_item from "../../mixin/delete_item";
export default {
    name: "subscriptions",
    mixins:[tableData,SwitchLangWord,delete_item,update_item],
    props:['handling_data','main_title'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    created() {

    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
