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
                        <tr v-for="(i,index) in vuex_data" :key="index">
                            <td><img :src="'/images/users/'+i['user']['image']"></td>
                            <td>{{ i['user']['username'] }}</td>
                            <td>{{ i['user']['phone'] }}</td>
                            <td>{{ i['name'] }}</td>
                            <td>{{ i['category'][$page.props.lang+'_name'] }}</td>
                            <td>{{ i['area'][$page.props.lang+'_name'] }}</td>
                            <td>{{ i['price'] }}</td>

                            <td>
                                <input name="toggle" type="checkbox" class="toggle-checkbox-status">
                            </td>
                            <td class="actions">
                                <inertia-link href="/listing/initialize">
                                    <i class="ri-edit-line"></i>
                                </inertia-link>
                                <span><i @click="deleteRecord(10,'listings')" class="ri-close-line"></i></span>
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
import DeleteItemComponent from "../../components/DeleteItemComponent";
import {mapGetters,mapMutations,mapActions} from "vuex";

export default {
    name: "listings",
    mixins:[tableData,SwitchLangWord,DeleteItemComponent],
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
    },
    created() {
        this.inilalize(this.data);
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
