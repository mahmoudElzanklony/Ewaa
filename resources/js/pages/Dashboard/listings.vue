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
                        <tr v-for="i in 15" :key="i">
                            <td><img src="/images/users/one.jpg"></td>
                            <td>أحمد علي</td>
                            <td>0100312321</td>
                            <td>فيلة</td>
                            <td>فلل</td>
                            <td>كاش</td>
                            <td>200000</td>

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
export default {
    name: "listings",
    mixins:[tableData,SwitchLangWord,DeleteItemComponent],
    props:['keywords'],
    data:function (){
        return {
            table_data:this.keywords,
            main_title:this.keywords['main_title'],
        }
    },
    created() {
        delete this.table_data['main_title'];
        this.table_data = Object.values(this.table_data);
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
