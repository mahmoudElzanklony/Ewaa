<template>
    <section class="goverment_city">
        <navbar-component></navbar-component>

        <div class="pages">
            <div class="container">
                <inertia-link href="/neighborhood">{{ switchWord('buildings') }}</inertia-link>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <inertia-link :href="'/neighborhood/'+government['id']">{{ government['name'] }}</inertia-link>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <inertia-link class="active"
                              :href="'/neighborhood/'+government['id']+'/'+city['id']">{{ city['name'] }}</inertia-link>

            </div>
        </div>


        <div class="meter_average">
            <div class="container">
                <h2 class="d-flex align-items-center mb-4 main-title">
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                    <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                    <span>
                        {{ keywords.meter_size_price }}
                        {{ city['name'] }}
                    </span>
                </h2>
                <div class="row">
                    <div class="col-12">
                        <div class="statics_per_meter">
                            <p class="d-flex align-items-center justify-content-between">
                                <span>{{ keywords.area }}</span>
                                <span>{{ keywords.apartments_average_price_per_meter }}</span>
                            </p>
                            <ul>
                                <div class="row">
                                    <div class="col-12" v-for="(i,index) in average_areas" :key="index">
                                        <li class="d-flex align-items-center justify-content-between"

                                        >
                                            <inertia-link :href="'/ads?area='+i['name']">
                                                {{ i['name'] }}
                                            </inertia-link>
                                            <p>
                                                <span>{{ i['average'] }}</span>
                                                <span>{{ keywords.pound }}/{{ keywords.meter }}</span>
                                            </p>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="rate_city" v-if="false">
            <div class="container">
                <h2 class="d-flex align-items-center mb-4 main-title">
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                    <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                    <span>القاهره الجديده {{ keywords.rate }}</span>
                </h2>
                <div class="row">
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-star-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.overall_rate }}</p>
                            <p>9.8</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-thumb-up-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.social_status }}</p>
                            <p>9.7</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-hotel-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.education }}</p>
                            <p>9.7</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-hospital-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.health_service }}</p>
                            <p>9.7</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-volume-down-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.peacefulness }}</p>
                            <p>9.7</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-map-pin-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.location }}</p>
                            <p>9.7</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-bus-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.transportation }}</p>
                            <p>9.7</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-6">
                    <div class="rate">
                        <p>
                            <span><i class="ri-shopping-cart-line"></i></span>
                        </p>
                        <div class="rate_info">
                            <p>{{ keywords.shopping_dinning }}</p>
                            <p>9.7</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>


        <div class="about_city">
            <div class="container">
                <h2 class="d-flex align-items-center mb-4 main-title">
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                    <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                    <span>
                        {{ keywords.about }}
                        {{city['name']}}
                    </span>
                </h2>
                <div class="row align-items-center">
                    <div class="col-md-6 col-12">
                        <div class="slider-images">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators"
                                        :data-slide-to="i"
                                        v-for="(i,index) in city['map_images'].length" :key="index"
                                        :class="index == 0 ? 'active':''"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div :class="'carousel-item '+(index == 0 ? 'active':'')"
                                         v-for="(i,index) in city['map_images']" :key="index">
                                        <img class="d-block w-100" :src="'/images/maps/'+i['image']" alt="">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="text-content">
                            <p>{{ city['info'] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="share-link">
            <div class="container">
                <div class="box">
                    <p>
                        <span>{{ keywords.share }}</span>
                        <span>القاهره الجديده</span>
                    </p>
                    <div>
                        <p class="w-100">
                           {{ current_url }}
                        </p>
                        <p>
                            <inertia-link :href="'https://www.facebook.com/sharer/sharer.php?u='+current_url">
                                <i class="ri-facebook-line"></i>
                            </inertia-link>
                            <inertia-link :href="'https://twitter.com/intent/tweet?url='+current_url">
                                <i class="ri-twitter-line"></i>
                            </inertia-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-offices-galary">
            <div class="container">
                <div class="box">
                    <h2>{{ keywords.do_you_need_help }}</h2>
                    <p class="mt-3 mb-3">{{ keywords.to_get_best_results }}</p>
                    <div  class="row">
                        <div class="col-lg-4 col-sm-6 col-12" v-for="(i,index) in  best_users" :key="index">
                            <contact-office
                                :name="i['username']"
                                :phone="i['phone']"
                                :image="i['image']"
                                :number_of_listing="i['total_listings']"
                                :date="new Date(i['created_at']).toLocaleDateString()"
                            ></contact-office>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="common-questions">
            <div  class="container">
                <h2 class="d-flex align-items-center mb-3 main-title">
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                    <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                    <span>{{ keywords.explore_questions }}</span>
                </h2>
                <p>
                    <inertia-link :href="'/ask-neighbours/'+best_question['id']+'/answers'">
                        <span>{{ best_question['question'] }}</span>
                        <span>{{best_question['answers_count']}} {{ keywords.answer }}</span>
                    </inertia-link>
                </p>
                <inertia-link class="btn btn-primary"
                              href="/ask-neighbours">
                    {{ keywords.ask_explore_questions }}
                </inertia-link>
            </div>
        </div>

        <div class="nearest-neighbours">
            <div class="container">
                <h2 class="d-flex align-items-center mb-3 main-title">
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                    <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                    <span>{{ keywords.nearest_neighbourhoods_explore }}</span>
                </h2>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12" v-for="(i,index) in similar_listings" :key="index">
                        <ListingPostComponent
                              :image="'/images/listings/'+i['first_image']['image']"
                              :number_of_images="i['images_count']"
                              :info="i['info']"
                              :address="i['address']"
                              :price="i['price']"
                              :link="'/listing/details?id='+i['id']"
                        ></ListingPostComponent>
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
import ContactOffice from "./listingpost/ContactOffice";
import SwitchLangWord from "../mixin/SwitchLangWord";
import ListingPostComponent from "../components/ListingPostComponent";
import SaleRentComponent from "../components/SaleRentComponent";
export default {
    name: "government_city",
    props:['keywords','average_areas','city','government','best_users','best_question',
        'similar_listings','cities_data','country'],
    mixins:[SwitchLangWord],
    data:function(){
        return{
            current_url:document.URL
        }
    },
    methods:{
        switch_city:function (){
            $(event.target).parent().find('.active').removeClass('active');
            $(event.target).addClass('active');
            $(event.target).parent().parent().find('>div').hide();
            $(event.target).parent().parent().find('>div').eq($(event.target).index() - 3).fadeIn();
        }
    },
    components: {SaleRentComponent, ListingPostComponent, ContactOffice, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.meter_average{
    .statics_per_meter{
        >p{
            background-color: $main_color;
            padding: 10px;
            span{
                color:white;
            }
        }
        ul{
            li{
                a{
                    color:$main_color;
                }
                padding: 10px;
                border-bottom: 1px solid #dddddd;
            }
        }
    }
}

.rate_city{
    margin-top: 60px;
    h2{
        margin-bottom: 0px;
    }
    .rate{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        >p{
            width: 50%;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #eee;
            padding-top: 15px;
            padding-bottom: 15px;
            transition: 0.5s all;
            span{
                color:$black;
            }
            &:hover{
                background-color: $main_color;
            }
            &:hover span{
                color:white;
            }
        }
        div{
            p{
                font-weight: bold;
            }
            p:last-of-type{
                color:$main_color;
            }
        }
    }
    .row{
        >div:first-of-type{
            .rate{
                >p{
                    background-color: $main_color;
                    span{
                        color:white;
                    }
                }
            }
        }
    }
}

.about_city {
    margin-top: 60px;
    .slider-images {
        img {
            width: 100%;
            height: 400px;
        }
    }
    .text-content{
        p{
            line-height: 30px;
        }
    }
}

.contact-offices-galary{
    margin-top: 60px;
    .box{
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 10px;
    }
}

.common-questions{
    background-color: #eee;
    padding: 20px;
    margin-top: 60px;
    p{
        margin-bottom: 15px;
       a{
           display: flex;
           align-items: center;
           justify-content: space-between;
           span{
               color:$main_color;
           }
       }
    }
}

.nearest-neighbours{
    margin-top: 60px;
}


.sale_rent{
    margin-top: 60px;
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


.ar{
    .rate_city{
        .rate{
            >p{
                margin-left: 10px;
            }
        }
    }
}
.en{
    .rate_city{
        .rate{
            >p{
                margin-right: 10px;
            }
        }
    }
}

@media (max-width: 567px) {
    .rate_city{
        .rate{
            div{
                p:first-of-type{
                    font-size: $small;
                }
            }
        }
    }
}

</style>
