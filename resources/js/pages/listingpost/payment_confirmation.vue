<template>
    <section class="payment_confirmation">
        <navbar-component></navbar-component>
        <div class="container">
            <h2 class="mb-3 mt-3 main-title">
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-line"></i></span>
                <span v-else><i class="ri-arrow-right-line"></i></span>
                <span>
                    {{ keywords.publish_listing }}
                </span>
            </h2>
            <p class="alert alert-info">
               {{ keywords.You_added_listing_in_one_of_our_paid }}
               {{ data['point_number'] }}
               {{ keywords.from_points }}
            </p>
            <div class="content d-flex">
                <img :src="'/images/listings/'+data['listing_obj_image']['image']">
                <div class="mt-2">
                    <div class="links">
                        <span>
                            {{ data['area'][$page.props.lang+'_name'] }}
                        </span>
                        <span>/</span>
                        <span>
                            {{ data['area']['city'][$page.props.lang+'_name'] }}
                        </span>
                        <span>/</span>
                        <span>
                            {{ data['government'][$page.props.lang+'_name'] }}
                        </span>
                        <span>/</span>
                        <span>
                            {{ data['government']['country'][$page.props.lang+'_name'] }}
                        </span>
                    </div>
                    <p>
                        {{ data['listing_data']['info'] }}
                    </p>
                    <p>
                        <span>{{ data['listing_data']['rent_or_sale'] == 'rent' ?
                            keywords.for_rent : keywords.for_sale }}
                        </span>
                        <span>{{ data['listing_data']['price'] }}</span>
                        <span>{{ keywords.pound }}</span>
                    </p>
                </div>
            </div>
            <div class="alert alert-danger text-center" v-if="$page.props.user.total_points < data['point_number'] ">
                <p class="text-center mt-2 mb-2">{{ keywords.you_dont_have_enough_balance }}</p>
                <button class="btn btn-danger mb-2">
                    {{ keywords.click_here_to_buy_one_of_our_packages }}
                </button>
            </div>
            <div class="alert alert-warning text-center" v-else>
                <p class="text-center mt-2 mb-2">{{ keywords.take_from_my_points }}</p>
                <button class="btn btn-primary mb-2"
                        @click="listing_payment([data['listing_data']['id'],data['point_number'],'/profile/dashboard?tab=pending_listings'])">
                    {{ keywords.press_here_to_complete_process }}
                </button>
            </div>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import {mapActions} from "vuex";
export default {
    name: "payment_confirmation",
    components: {FooterComponent, NavbarComponent},
    props:['keywords','data'],
    methods:{
        ...mapActions({
            'listing_payment':'listing_payment/payment_listing_points'
        })
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.ar{
    .payment_confirmation{
        .content{
            img{
                margin-left: 10px;
            }
        }
    }
}
.en{
    .payment_confirmation{
        .content{
            img{
                margin-right: 10px;
            }
        }
    }
}
.payment_confirmation{
    .content{
        img{
            width: 300px;
            border-radius: 10px;
            border:1px solid #eee;
        }
        img+div{
            div,p{
                margin-bottom: 15px;
            }
            .links{
                span:nth-child(even){
                    margin: 0px 5px;
                }
            }
            p:last-of-type{
                span{
                    font-size: $semi_big;
                    color:$main_color;
                }
                span:not(:first-of-type){
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
