<template>
    <section class="neighbours">
        <navbar-component></navbar-component>

        <div class="pages">
            <div class="container">
                <inertia-link href="" class="active">
                    <span>{{ switchWord('buildings') }}</span>
                    <span v-if="country != ''">{{ switchWord('in') }}</span>
                    <span v-if="country != ''">{{ country['name'] }}</span>
                </inertia-link>

            </div>
        </div>

        <div class="prices">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12" v-for="(i,index) in governments" :key="index">
                        <inertia-link :href="current_url+'/'+i['id']">
                            <div class="city">
                                <p>{{ i['name'] }}</p>
                                <img v-if="i['image'] != null" :src="'/images/maps/'+i['image']">
                                <img v-else src="/images/maps/default.png">
                            </div>
                        </inertia-link>
                    </div>
                </div>
            </div>
        </div>
        <sale-rent-component :data="cities_data" :country="country"></sale-rent-component>


        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import SwitchLangWord from "../mixin/SwitchLangWord";
import SaleRentComponent from "../components/SaleRentComponent";
export default {
    name: "neighbours",
    props:['keywords','governments','cities_data','country'],
    mixins:[SwitchLangWord],
    data:function(){
        return {
            current_url:'',
        }
    },
    components: {SaleRentComponent, FooterComponent, NavbarComponent},
    created() {
        this.current_url = document.URL;
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
            color:$black;
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
