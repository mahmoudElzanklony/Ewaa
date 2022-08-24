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
                            <td v-for="(i,index) in keywords" :key="index">
                                {{ i }}
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(i,index) in data" :key="index">
                                <td>
                                    <inertia-link target="_blank" :href="'/listing/details?id='+i['listing']['id']">
                                        {{ i['listing']['ar_name'] }}
                                    </inertia-link>
                                </td>
                                <td>{{ i['username'] }}</td>
                                <td>{{ i['email'] }}</td>
                                <td>{{ i['phone'] }}</td>
                                <td>{{ new Date(i['created_at']).toLocaleDateString() }}</td>
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
export default {
    name: "interests",
    mixins:[tableData,SwitchLangWord],
    props:['main_title','keywords','data'],
    components:{
        SideNavbarComponent
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
tr{
    td{
        a{
            color:$black;
        }
    }
}
</style>
