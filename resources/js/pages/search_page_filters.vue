<template>
    <section class="search_page_filters">
        <navbar-component></navbar-component>
        <div class="container mt-4 mb-4">
            <h1>{{ keywords.search }}</h1>
            <div class="row">
                <div class="col-md-9">
                    <div class="filter">
                        <filter-component :keywords="keywords"></filter-component>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
            <div class="sales mt-4">
                <h2>{{ keywords.listings_at_egypt }}</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6" v-for="i in 30">
                        <div>
                            <p>
                                <inertia-link href="#">
                                    <span>الغردقة</span>
                                    <span>(400)</span>
                                </inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
                <h2 class="mt-5">{{ keywords.properties_for_sale }}</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6" v-for="i in 15">
                        <div>
                            <p>
                                <inertia-link href="#">
                                    <span>شقق</span>
                                    <span>(400)</span>
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
export default {
    name: "search_page_filters",
    components: {FilterComponent, FooterComponent, NavbarComponent},
    props:['keywords'],

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
