<template>
    <section class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content">
            <div class="container">
                <div class="line_chart_data">
                    <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                        <span>{{ keywords.main_title }}</span>
                        <span style="display: none">
                                    <i class="ri-arrow-down-s-line toggle_next"></i>
                                </span>
                    </p>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <select name="year" class="form-control" required>
                                                <option value="">{{ switchWord('select_year') }}</option>
                                                <option v-for="(year,index) in 10" :key="index"
                                                        :value="parseInt(new Date().getFullYear()) - index">
                                                    {{ parseInt(new Date().getFullYear()) - index }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <input class="btn btn-primary" type="submit" name="send"
                                               :value="switchWord('Search')">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <line-chart :chart_data="chart_data" :labels_data="labels"></line-chart>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import LineChart from "../../components/LineChart";

export default {
    name: "index",
    components: {LineChart, SideNavbarComponent},
    props:['keywords'],
    data:function (){
        return {
            chart_data:[1,2,3,4,56,7,9,10,11,2,12,5],
            labels:Object.values(this.keywords['months']),
        }
    },
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";


</style>
