<template>
    <div>
        <navbar-component></navbar-component>
        <header>
            <div class="layer">
                <div class="container">
                    <h2 class="text-center">{{ keywords.ewaa_plus_website }}</h2>
                    <p class="text-center">{{ keywords.ewaa_plus_word }}</p>
                    <div class="text-center">
                        <inertia-link href="#" class="btn btn-main-color">
                            {{ keywords.properties }}
                        </inertia-link>
                        <inertia-link href="#" class="btn btn-main-color-outline">
                            {{ keywords.compounds }}
                        </inertia-link>
                    </div>
                    <div style="display: none" class="row">
                        <div class="col-md-8">
                            <p>
                                <span>10000</span>
                                <span>{{  }}</span>
                            </p>
                            <p>
                                <span>{{ keywords.for }}</span>
                                <inertia-link href="#">
                                    {{ keywords.sale }}
                                </inertia-link>
                                <span>{{ keywords.and }}</span>
                                <inertia-link href="#">
                                    {{ keywords.rent }}
                                </inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!------------------know section------------------------ -->

        <section class="search sub-data pt-4">
            <div class="container">
                <h2 class="mb-3">{{ keywords.search }}</h2>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-building-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.properties }}</span>
                                    </p>
                                    <p>{{ keywords.properties_info }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-community-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.compounds }}</span>
                                        <span>New</span>
                                    </p>
                                    <p>{{ keywords.compounds_info }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12" style="display:none">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-bank-card-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>Online Expos</span>
                                        <span>New</span>
                                    </p>
                                    <p>{{ keywords.online_expos_info }}</p>
                                </div>
                                <span>
                                   <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12" style="display: none">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-money-dollar-circle-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.mortgage }}</span>
                                    </p>
                                    <p>{{ keywords.mortgage_info }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="know sub-data pt-4">
            <div class="container">
                <h2 class="mb-3">{{ keywords.know }}</h2>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-price-tag-2-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.valuation }}</span>
                                    </p>
                                    <p>{{ keywords.estimate_property }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-community-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.prices_guide }}</span>
                                    </p>
                                    <p>{{ keywords.know_the_meter_price }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-message-3-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.ask_neighbours }}</span>
                                    </p>
                                    <p>{{ keywords.get_honest_answers }}</p>
                                </div>
                                <span>
                                   <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-group-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.top_agent }}</span>
                                    </p>
                                    <p>{{ keywords.find_top_experienced_agent }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12" style="display: none">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-line-chart-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.real_state_index }}</span>
                                    </p>
                                    <p>{{ keywords.understand_market_demand }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-lightbulb-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.advices_tips }}</span>
                                    </p>
                                    <p>{{ keywords.learn_before }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-earth-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.know_more }}</span>
                                    </p>
                                    <p>{{ keywords.services_give_you_decisions }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="ad sub-data pt-4">
            <div class="container">
                <h2 class="mb-3">{{ keywords.ad }}</h2>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-add-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.list_property }}</span>
                                    </p>
                                    <p>{{ keywords.reach_million_of_users }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="sub">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-file-list-3-line"></i>
                                </span>
                                <div>
                                    <p>
                                        <span>{{ keywords.list_company_properties }}</span>
                                    </p>
                                    <p>{{ keywords.join_thousands_of_companies }}</p>
                                </div>
                                <span>
                                    <i class="ri-arrow-drop-left-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer-component></footer-component>

    </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import switchLang from "../mixin/SwitchLangWord";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "home",
    props:['keywords'],
    mixins:[switchLang],
    components: {FooterComponent, NavbarComponent},
    mounted() {
        // change arrow direction at english page
        if(this.$inertia.page.props.lang == 'en'){
            $('i.ri-arrow-drop-left-line').removeClass('ri-arrow-drop-left-line').addClass('ri-arrow-drop-right-line');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.layer{
    background-color: rgb(255 255 255 / 84%);
    width: 100%;
    height: 100%;
}
header{
    background-image: url("/images/home/header.jpg");
    background-size: cover;
    height: 650px;
    background-position: center;
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        height: 100%;
        h2{
            font-size: 65px;
            margin-bottom: 25px;
            text-shadow: 1px 1px 1px;
        }
        p{
            font-size:$big;
        }
        >div,h2,p{
            width: 100%;
        }
        .row{
            width:100%;
        }
    }
    p{
        font-size: $big;
        margin-top: 0px;
    }
    p:last-of-type{
        margin-bottom: 25px;
    }
}

.sub{
    a{
        display: flex;
        align-items: center;
        position: relative;
        transition: 0.5s all;
        padding: 15px;
        border-radius: 10px;
        &:hover{
            box-shadow: 0px 0px 10px 1px #eeeaea;
        }
        &:hover >span:last-of-type{
            display: block;
        }
        >span:first-of-type{
            color:$main_color;
        }
        div{
            p:first-of-type{
                font-weight: bold;
                margin-bottom: 5px;
                span:nth-of-type(2){
                    background-color: $sub_main_color;
                    padding: 2px 6px;
                    border-radius: 3px;
                }
            }
            p:last-of-type{
                color:$gray;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                min-height: 50%;
                line-height: 30px;
            }
        }
        >span:last-of-type{
            position: absolute;
            top:8px;
            display: none;
        }
    }
}
.know.sub-data{
    a{
        >span:first-of-type{
            color:$sub_main_color;
        }
    }
}
.ad.sub-data{
    a{
        >span:first-of-type{
            color:$black;
        }
    }
}

</style>
