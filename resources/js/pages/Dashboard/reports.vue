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
                <form>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-6"
                                 v-for="(input,index) in Object.keys(handling_data['search_form'])"
                                 :key="index">
                                <select class="form-control" :name="input">
                                    <option value="">{{ handling_data['search_form'][input] }}</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-6">
                                <input type="submit" class="btn btn-primary d-block w-100" :value="switchWord('filter')">
                            </div>
                        </div>
                    </div>
                </form>
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
                            <td>منطقة حي مبارك</td>
                            <td>20</td>
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
    name: "reports",
    mixins:[tableData,SwitchLangWord],
    props:['main_title','handling_data'],
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
