<template>
    <section class="governments">
        <navbar-component></navbar-component>
        <div class="container">
            <header :style="{ backgroundImage: 'url(/images/maps/' + (government['map_images'].length > 0  ? government['map_images'][0]['image']:'default.png') + ')' }">
                <div>
                    <p>
                        <span>{{ keywords.price_guides }}</span>
                        <span>{{ switchWord('in') }}</span>
                        <span>{{ government['name'] }}</span>
                    </p>
                </div>
            </header>
        </div>
        <div class="pages">
            <div class="container">
                <inertia-link href="/neighborhood">{{ switchWord('buildings') }}</inertia-link>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <inertia-link :href="'/neighborhood/'+government['id']"
                              class="active">{{ government['name'] }}</inertia-link>
            </div>
        </div>

        <div class="governments">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12" v-for="(i,index) in cities" :key="index">
                        <ListingPostComponent
                          :image="'/images/maps/'+(i['image'] == null ? 'default.png':i['image'])"
                          :number_of_images="i['total_listings']"
                          :info="i['city_name']"
                          :address="i['city_info']"
                          :price="i['avg_meter']"
                          :link="'/neighborhood/'+government['id']+'/'+i['city_id']"
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
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
name: "governments",
    components: {ListingPostComponent, FooterComponent, NavbarComponent},
    mixins:[SwitchLangWord],
    props:['keywords','cities','government'],
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
