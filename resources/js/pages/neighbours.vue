<template>
    <section class="neighbours">
        <navbar-component></navbar-component>

        <div class="pages">
            <div class="container">
                <span>{{ keywords.egypt_properties }}</span>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <span class="active">{{ keywords.neighborhood_prices }}</span>
            </div>
        </div>

        <div class="prices">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12" v-for="i in 5" :key="i">
                        <inertia-link href="#">
                            <div class="city">
                                <p>القاهره</p>
                                <img src="/images/sales/one.jpg">
                            </div>
                        </inertia-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="sale_rent">
            <div class="container">
                <p>
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                    <span v-else><i class="ri-arrow-left-s-fill"></i></span>
                    <span>{{ keywords.search_inside_the_cities_of_egypt }}</span>
                    <span class="d-block w-100 mb-2"></span>
                    <span class="active" @click="switch_city">{{ keywords.rent }}</span>
                    <span @click="switch_city">{{ keywords.sale }}</span>
                </p>
                <div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-2" v-for="i in 30" :key="i">
                            <inertia-link href="">
                                <span>القاهره الكبري</span>
                                <span>(130)</span>
                            </inertia-link>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-2" v-for="i in 30" :key="i">
                            <inertia-link href="">
                                <span>أسكندريه</span>
                                <span>(130)</span>
                            </inertia-link>
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
export default {
    name: "neighbours",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent},
    methods:{
        switch_city:function (){
            $(event.target).parent().find('.active').removeClass('active');
            $(event.target).addClass('active');
            $(event.target).parent().parent().find('>div').hide();
            $(event.target).parent().parent().find('>div').eq($(event.target).index() - 3).fadeIn();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";


.prices{
    .city{
        border-radius: 10px;
        border: 1px solid #ddd;
        margin-bottom: 15px;
        overflow: hidden;
        p{
            margin: 0px;
            padding: 10px;
        }
        img{
            width: 100%;
            height: 300px;
        }
    }
}

.sale_rent{
    p{
        display: flex;
        margin-bottom: 20px;
        flex-wrap: wrap;
        align-items: center;
        span:first-of-type{
            color:$main_color;
        }
        span:not(:first-of-type){
            margin-right: 10px;
            color:$dark_gray;
        }
        span:nth-of-type(4) , span:nth-of-type(5){
            padding: 6px 25px;
            border-radius: 25px;
            cursor: pointer;
            transition: 0.5s all;
            &:hover{
                background-color: $main_color;
                color:white;
            }
        }
        span.active{
            background-color: $main_color;
            color:white;
        }
    }
    .container{
        >div{
            display: none;
            transition: 0.5s all;
            a{
                span{
                    color:$dark_gray;
                    margin-left: 2px;
                }
            }
        }
        >div:first-of-type{
            display: block;
        }
    }

}

</style>
