<template>

    <section class="sales">
        <navbar-component></navbar-component>
        <div class="container mt-4 mb-2">
            <div class="top-page-filter">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <div class="position-relative" data-toggle="modal" data-target="#show_filter">
                            <span>
                                <i class="ri-search-2-line"></i>
                            </span>
                            <span class="word"> {{ keywords.city_or_neighbour_streetname }}</span>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-none">
                        <div class="position-relative" data-toggle="modal" data-target="#show_filter">
                            <span><i class="ri-arrow-drop-down-line"></i></span>

                            <span class="word">{{ keywords.rent }}</span>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-none">
                        <div class="position-relative" data-toggle="modal" data-target="#show_filter">
                            <span><i class="ri-arrow-drop-down-line"></i></span>

                            <span class="word">{{  keywords.price_range }}</span>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-none">
                        <div class="position-relative" data-toggle="modal" data-target="#show_filter">
                            <span><i class="ri-equalizer-line"></i></span>

                            <span class="word">{{ keywords.more_filters }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="show_results">
            <div class="container">
                <h2 class="mb-3 mt-3">
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-line"></i></span>
                    <span v-else><i class="ri-arrow-right-line"></i></span>
                    <span>{{ keywords.properties_for_rent }}</span>
                </h2>
                <div class="tags">
                    <inertia-link href="#" v-for="i in 10" :key="i">
                        <span>شقق</span>
                        <span>(100)</span>
                    </inertia-link>
                </div>
                <div class="properties">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="box-property mb-2" v-for="i in 5" :key="i">
                                <p class="mt-1">
                                    <span>{{ keywords.verified }}</span>
                                    <span>{{ keywords.sponsored }}</span>
                                </p>
                                <inertia-link href="#" class="d-flex justify-content-between flex-wrap">
                                    <div class="image">
                                        <img src="/images/sales/one.jpg">
                                    </div>
                                    <div class="info">
                                        <h2>
                                            <span>14,000 </span>
                                            <span>{{ keywords.pound }}</span>
                                        </h2>
                                        <p>ستديو بروف مفروش للايجار</p>
                                        <p>
                                            <span>
                                                <i class="ri-map-pin-line"></i>
                                            </span>
                                            <span>
                                                كوبوماند ايستاون
                                            </span>
                                        </p>
                                        <div class="d-flex  info_icons">
                                            <p class="d-flex align-items-center">
                                                <span><i class="ri-fullscreen-line"></i></span>
                                                <span>90 {{ keywords.meter }}</span>
                                            </p>
                                            <p class="d-flex align-items-center">
                                                <span><i class="ri-hotel-bed-line"></i></span>
                                                <span>1</span>
                                            </p>
                                            <p class="d-flex align-items-center">
                                                <span><i class="ri-hotel-bed-line"></i></span>
                                                <span>1</span>
                                            </p>
                                        </div>
                                        <div class="contact d-flex justify-content-between">
                                            <img src="/images/users/one.jpg">
                                            <div class="d-flex align-items-center">
                                                <inertia-link href="#">
                                                    <span>
                                                        <i class="ri-phone-line"></i>
                                                    </span>
                                                </inertia-link>
                                                <inertia-link href="#">
                                                    <span>
                                                        <i class="ri-whatsapp-line"></i>
                                                    </span>
                                                </inertia-link>
                                            </div>
                                        </div>
                                    </div>
                                </inertia-link>
                            </div>
                            <div class="pages text-center mt-4 mb-2">
                                <inertia-link class="active" href="#">
                                    {{ 1 }}
                                </inertia-link>
                                <inertia-link href="#" v-for="i in 4" :key="i">
                                    {{ i+1 }}
                                </inertia-link>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="offices">
                                <p>{{ keywords.do_you_need_help }} </p>
                                <p>{{ keywords.to_get_best_results }} </p>
                                <contact-office v-for="i in  5" :key="i"
                                                name="Aqar Guide Real Estate"
                                                number_of_listing="4500"
                                                date="20/02/2011"
                                ></contact-office>
                                <input type="button" class="btn btn-primary"
                                       :value="switchWord('request_contact')">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="show_filter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="show_filter_box">{{ keywords.search }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                       <filter-component :keywords="search_keywords"></filter-component>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
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
import ContactOffice from "./listingpost/ContactOffice";
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "sales",
    mixins:[SwitchLangWord],
    components: {ContactOffice, FilterComponent, FooterComponent, NavbarComponent},
    props:['keywords','search_keywords'],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.top-page-filter{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    .row{
        span.word{
            display: inline-block;
            width:100%;
        }
        .position-relative{
            cursor: pointer;
            span:first-of-type{
                position: absolute;
                top: -6px;
                color:$main_color;
            }
        }
        >div:first-of-type{
            span.word{
                width:calc(100% - 38px);
            }
        }
        >div:not(:first-of-type){
            .position-relative{
                span:first-of-type{
                    width: fit-content;
                }
            }
        }
        >div:not(:last-of-type){

        }
    }
}
.show_results{
    .container > h2{
        display: flex;
        span:first-of-type{
            color:$sub_main_color;
            position: relative;
            top: 2px;
        }
        span:last-of-type{
            margin-right: 10px;
        }
    }
    .tags{
        a{
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 25px;
            margin-left: 10px;
            display: inline-block;
            margin-bottom: 10px;
            transition: 0.5s all;
            &:hover{
                background-color: $sub_main_color;
            }
            &:hover span{
                color:white;
            }
        }
    }
}
.properties{
    .box-property{
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 8px;
        >p{
            span{
                padding: 5px 10px;
                border-radius: 15px;
                font-size: $small;
            }
            span:first-of-type{
                background-color: $main_color_white;
            }
            span:last-of-type{
                background-color: $sub_main_color_white;
            }
        }
        a{
            display: flex;
            justify-content: space-between;
            .image{
                overflow: hidden;
                max-width: 300px;
                img{
                    width: 100%;
                    border-radius: 10px;
                }
            }
        }
        .info{
            width: calc(100% - 335px);
            h2{
                margin-bottom: 5px;
            }
            p{
                color:$dark_gray;
            }
            p:first-of-type{
                color:$dark_gray;
            }
            p:nth-of-type(2){
                span:first-of-type{
                    color: $dark_gray;
                }
                display: flex;
                align-items: center;
                margin-top: 10px;
                margin-bottom: 5px;
            }
            .info_icons{
                p{
                    span:first-of-type{
                        color:$gray;
                    }
                }
            }
        }
        .contact{
            padding-top: 10px;
            border-top: 1px solid #ddd;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            span{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $main_color;
                color: white;
            }
            a:last-of-type{
                span{
                    background-color: $sub_main_color;
                }
            }
        }
    }
}

.pages{
    margin: 25px auto;
    width: fit-content;
    a{
        margin-left: 8px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: inline-flex;
        border: 1px solid #ddd;
        justify-content: center;
        align-items: center;
        transition: 0.5s all;
        &:hover{
            background-color: $main_color;
            color:white;
        }
    }
    a.active{
        background-color: $main_color;
        color: white;
    }
}



.ar{
    .top-page-filter{
        .row{
            .position-relative{
                span:first-of-type{
                    right: 5px;
                }
            }
            >div:first-of-type{
                span.word{
                    margin-right:38px;
                }
            }
            >div:not(:first-of-type){
                .position-relative{
                    span:first-of-type{
                        left: 5px;
                        right: unset;
                    }
                }
            }
            >div:not(:last-of-type){
                span.word{
                    border-left: 1px solid #ddd;
                }
            }
        }
    }
    .show_results{
        .container > h2{
            span:last-of-type{
                margin-right: 10px;
            }
        }
        .tags{
            a{
                margin-left: 10px;
            }
        }
    }

    .properties{
        .box-property{
            >p{
                text-align: left;
                span{
                    margin-left: 5px;
                }
            }
            .info{
                h2{
                    span{
                        margin-left: 5px;
                    }
                }
                .info_icons{
                    p:not(:last-of-type){
                        margin-left: 25px;
                    }
                    p{
                        span:first-of-type{
                            margin-left: 8px;
                        }
                    }
                }
            }
            .contact{
                span{
                    margin-left: 5px;
                }
            }
        }
    }


}

.en{
    .top-page-filter{
        .row{
            .position-relative{
                span:first-of-type{
                    left: 5px;
                }
            }
            >div:first-of-type{
                span.word{
                    margin-left:38px;
                }
            }
            >div:not(:first-of-type){
                .position-relative{
                    span:first-of-type{
                        right: 5px;
                        left: unset;
                    }
                }
            }
            >div:not(:last-of-type){
                span.word{
                    border-right: 1px solid #ddd;
                }
            }
        }
    }
    .show_results{
        .container > h2{
            span:last-of-type{
                margin-left: 10px;
            }
        }
        .tags{
            a{
                margin-left: 10px;
            }
        }
    }
    .properties{
        .box-property{
            >p{
                text-align: right;
                span{
                    margin-right: 5px;
                }
            }
            .info{
                h2{
                    span{
                        margin-right: 5px;
                    }
                }
                .info_icons{
                    p:not(:last-of-type){
                        margin-right: 25px;
                    }
                    p{
                        span:first-of-type{
                            margin-right: 8px;
                        }
                    }
                }
            }
            .contact{
                span{
                    margin-right: 5px;
                }
            }
        }
    }



}


.modal-dialog{
    max-width: 635px;
    .modal-body{
        max-height: 500px;
        overflow: auto;
    }
}

.offices{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
}

@media (max-width: 992px) {
    .col-sm-none{
        display: none !important;
    }
    .properties .box-property{
        a{
           .image{
               max-width: 100%;
               margin-top: 15px;
           }
        }
    }
    .properties .box-property .info{
        width:100%;
        margin-top: 20px;
    }
}
</style>
