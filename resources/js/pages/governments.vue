<template>
    <section class="governments">
        <navbar-component></navbar-component>
        <div class="container">
            <header :style="{ backgroundImage: 'url(/images/sales/' + 'one.jpg' + ')' }">
                <div>
                    <p>
                        <span>{{ keywords.price_guides }}</span>
                        <span>القاهره</span>
                    </p>
                </div>
            </header>
        </div>
        <div class="pages">
            <div class="container">
                <inertia-link href="#">{{ keywords.egypt_properties }}</inertia-link>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <inertia-link href="#">{{ keywords.neighborhood_prices }}</inertia-link>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <inertia-link href="#" class="active">القاهره</inertia-link>
            </div>
        </div>

        <div class="governments">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12" v-for="i in 7" :key="i">
                        <ListingPostComponent
                          image="one.jpg"
                          number_of_images="5"
                          info="لاول مره في العاصمه الاداريه شقه بمقدم 0% واقساط"
                          address="العاصمه الاداريه-الحي الثامن-كمبوند كارديا"
                          price="500"
                          average="true"
                        ></ListingPostComponent>
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
import ListingPostComponent from "../components/ListingPostComponent";
export default {
name: "governments",
    components: {ListingPostComponent, FooterComponent, NavbarComponent},
    props:['keywords'],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
header{
    height: 300px;
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        p{
            color: white;
            font-size: $big;
            border: 2px solid #ddd;
            padding: 6px 20px;
            span{
                color:white;
            }
        }
    }
}
</style>
