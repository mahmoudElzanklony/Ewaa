<template>
    <section class="search_page_filters">
        <navbar-component></navbar-component>
        <div class="container mt-4 mb-4">
            <h1>{{ keywords.search }}</h1>
            <div class="row">
                <div class="col-md-9">
                    <div class="filter">
                        <filter-component :keywords="keywords" :sub_cats="sub_cats"></filter-component>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
            <div class="sales mt-4" >
                <div v-for="(c,index) in country_data" :key="index" v-if="c['my_areas'].length > 0">
                    <h2>{{ category_name }} {{ switchWord('in') }} {{ c['name'] }} </h2>
                    <div class="row" >
                        <div class="col-lg-3 col-md-4 col-sm-6" v-for="(i,index) in c['my_areas']" :key="index">
                            <div>
                                <p>
                                    <inertia-link href="#">
                                        <span>{{ i['name'] }}</span>
                                        <span>({{ i['count_listings'] }})</span>
                                    </inertia-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>{{ category_name }} {{ switchWord('for') }}{{ switchWord('sale') }} </h2>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6" v-for="(i,index) in all_listing_per_category" :key="index">
                        <div>
                            <p>
                                <inertia-link href="#">
                                    <span>{{ i['name'] }}</span>
                                    <span>({{ i['listings_count'] }})</span>
                                </inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import FilterComponent from "../components/FilterComponent";
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "search_page_filters",
    components: {FilterComponent, FooterComponent, NavbarComponent},
    props:['keywords','sub_cats','country_data','all_listing_per_category','category_name'],
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.sales{
    h2{
        font-weight: bold;
        margin-bottom: 18px;
    }
    p{
        margin-bottom: 10px;
        a{
            span{
                color:$gray;
            }
        }
    }
}

</style>
