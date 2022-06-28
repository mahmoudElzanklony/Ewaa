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
            </p>
            <div class="content d-flex">
                <img src="/images/sales/one.jpg">
                <div class="mt-2">
                    <div class="links">
                        <span>قاهره</span>
                        <span>/</span>
                        <span>قاهره</span>
                        <span>/</span>
                        <span>قاهره</span>
                        <span>/</span>
                        <span>قاهره</span>
                    </div>
                    <p>Testing content</p>
                    <p>
                        <span>{{ keywords.for_rent }}</span>
                        <span>10000</span>
                        <span>{{ keywords.pound }}</span>
                    </p>
                </div>
            </div>
            <div class="alert alert-danger text-center">
                <p class="text-center mt-2 mb-2">{{ keywords.you_dont_have_enough_balance }}</p>
                <button class="btn btn-danger mb-2">
                    {{ keywords.click_here_to_buy_one_of_our_packages }}
                </button>
            </div>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
export default {
    name: "payment_confirmation",
    components: {FooterComponent, NavbarComponent},
    props:['keywords'],
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
