<template>
    <section class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content">
            <div class="container">
                <div class="listing_box">
                    <div class="layer d-flex flex-wrap">
                        <h2>{{ keywords.ewaa_word }}</h2>
                        <p>{{ keywords.ewaa_listings }}</p>
                        <inertia-link href="#"
                                      class="btn btn-primary">{{ switchWord('explore_listings') }}
                        </inertia-link>
                        <button class="btn btn-outline-primary">{{ switchWord('see_statics') }}</button>
                    </div>
                </div>
                <!-------------start of last listing && last signed up users -->
                <div class="row mt-4 mb-4">

                    <div class="col-md-6 col-12">
                        <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                            <span>{{ keywords.last_listings }}</span>
                            <span>
                                    <i class="ri-arrow-down-s-line toggle_next"></i>
                                </span>
                        </p>
                        <div class="last_data_container">
                            <div>
                                <div class="mb-2 box-data d-flex align-items-center
                             justify-content-between flex-wrap" v-for="i in 5" :key="i">
                                <div class="image">
                                    <p class="text-center">احمد علي</p>
                                    <img src="/images/users/one.jpg">
                                </div>
                                <div class="details">
                                    <p>فيلة في مدينتي</p>
                                    <p>تحتوي علي بيانات مهمه لوصف المحتوي</p>
                                </div>
                                <div class="w-25"></div>
                                <div class="box-footer w-100 d-flex align-items-center justify-content-between">
                                    <inertia-link href="" class="btn btn-outline-primary">
                                        {{ keywords.show_details }}
                                    </inertia-link>
                                    <p>
                                        <span>12/20/2020</span>
                                        <span><i class="ri-calendar-line"></i></span>

                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-12">
                        <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                            <span>{{ keywords.pending_listings }}</span>
                            <span>
                                    <i class="ri-arrow-down-s-line toggle_next"></i>
                                </span>
                        </p>
                        <div class="last_data_container">
                            <div>
                                <div class="mb-2 box-data d-flex align-items-center
                             justify-content-between flex-wrap" v-for="i in 5" :key="i">
                                    <div class="image">
                                        <p class="text-center">احمد علي</p>
                                        <img src="/images/users/one.jpg">
                                    </div>
                                    <div class="details">
                                        <p>فيلة في مدينتي</p>
                                        <p>تحتوي علي بيانات مهمه لوصف المحتوي</p>
                                    </div>
                                    <div class="w-25"></div>
                                    <div class="box-footer w-100 d-flex align-items-center justify-content-between">
                                        <p>
                                            <inertia-link href="" class="btn btn-outline-primary">
                                                {{ keywords.show_details }}
                                            </inertia-link>
                                            <button @click="approve_listing" class="btn btn-outline-success">
                                                {{ keywords.approve }}
                                            </button>
                                        </p>
                                        <p>
                                            <span>12/20/2020</span>
                                            <span><i class="ri-calendar-line"></i></span>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="row mb-4">
                    <div class="col-md-6 col-12">
                        <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                            <span>{{ keywords.last_packages_sales }}</span>
                            <span>
                                    <i class="ri-arrow-down-s-line toggle_next"></i>
                            </span>
                        </p>
                        <div class="sales_packages">
                            <div class="package p-2" v-for="i in  6" :key="i">
                                <inertia-link href="#" class="d-flex flex-wrap justify-content-between align-items-center">
                                    <div>
                                        <p class="d-flex align-items-center">
                                            <span><i class="ri-vip-crown-line"></i></span>
                                            <span>الباقة الفضية</span>
                                        </p>
                                        <p>
                                            <span>وصف مختصر للباقة الفضية</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div class="circle">
                                            120
                                        </div>
                                    </div>
                                </inertia-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-12">
                        <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                            <span>{{ keywords.last_categories }}</span>
                            <span>
                                    <i class="ri-arrow-down-s-line toggle_next"></i>
                                </span>
                        </p>
                        <div class="last_data_container">
                            <div>
                                <div class="mb-2 box-data category d-flex align-items-center
                             justify-content-between flex-wrap" v-for="i in 5" :key="i">
                                    <div class="image">
                                        <img src="/images/categories/one.png">
                                    </div>
                                    <div class="details">
                                        <p>عقارات</p>
                                        <p>تحتوي علي بيانات مهمه لوصف قسم العقار</p>
                                    </div>
                                    <div class="w-25"></div>
                                    <div class="box-footer w-100 d-flex align-items-center justify-content-between">
                                        <p>
                                            <span>
                                                <i class="ri-question-line"></i>
                                            </span>
                                            <span>10</span>
                                        </p>
                                        <p>
                                            <span>
                                                <i class="ri-building-line"></i>
                                            </span>
                                            <span>140</span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="listing_box statistics_box mb-4">
                    <div class="layer d-flex flex-wrap">
                        <h2>{{ keywords.ewaa_statistics_word }}</h2>
                        <p>{{ keywords.ewaa_statistics_info }}</p>
                        <inertia-link href="#"
                                      class="btn btn-primary">{{ keywords.explore_statistics }}
                        </inertia-link>
                    </div>
                </div>
                <div class="line_chart_data">
                    <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                        <span>{{ keywords.last_listings_statistics }}</span>
                        <span style="display: none">
                                    <i class="ri-arrow-down-s-line toggle_next"></i>
                                </span>
                    </p>
                    <div>
                        <line-chart :chart_data="chart_data" :labels_data="labels"></line-chart>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import LineChart from "../../components/LineChart";

export default {
    name: "index",
    components: {LineChart, SideNavbarComponent},
    props:['keywords'],
    data:function (){
      return {
          chart_data:[1,2,3,4,56,7,9,10,11,2,12,5],
          labels:[
              "يناير",
              "يناير",
              "مارس",
              "ابريل",
              "مايو",
              "يونيو",
              "يوليو",
              "اغسطس",
              "سبتمر",
              "اكتوبر",
              "نوفمبر",
              "ديسمبر"
          ],
      }
    },
    methods:{
        approve_listing:function(){
            Swal.fire({
                title: this.switchWord('are_you_sure_about_approve'),
                text: this.switchWord('in_case_you_approved_listing_will_be_at_public'),
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#ff6a15',
                cancelButtonColor: '#aaa',
                confirmButtonText: this.switchWord('yes_iam_sure'),
                cancelButtonText: this.switchWord('cancel'),
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        this.switchWord('approved_done'),
                        this.switchWord('approved_done_successfully'),
                        'success'
                    )
                }
            })
        }
    },
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.ar{
    .content{
        .listing_box{
            .layer{
                a{
                    margin-left: 15px;
                }
            }
        }
    }
    .sales_packages{
        .package{
            a{
                div:first-of-type{
                    p:first-of-type{
                        span:first-of-type{
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }
    .box-data{
        .box-footer{
            p:first-of-type{
                a:first-of-type{
                    margin-left: 5px;
                }
            }
        }
    }
    .box-data.category{
        .box-footer{
            p{
                span:last-of-type{
                    margin-right: 4px;
                }
            }
        }
    }
}
.en{
    .content{
        .listing_box{
            .layer{
                a{
                    margin-right: 15px;
                }
            }
        }
    }
    .sales_packages{
        .package{
            a{
                div:first-of-type{
                    p:first-of-type{
                        span:first-of-type{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
    .box-data{
        .box-footer{
            p:first-of-type{
                a:first-of-type{
                    margin-right: 5px;
                }
            }
        }
    }
    .box-data.category{
        .box-footer{
            p{
                span:last-of-type{
                    margin-left: 4px;
                }
            }
        }
    }
}

.dashboard .content{
    .listing_box{
        background-image: url("/images/gereral/header_dash.jpg");
        background-size: 100% 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 15px;
        .layer{
            height: 100%;
            justify-content: flex-start;
            align-items: end;
            background-color: #ff6a1540;
            padding: 15px;
            h2,p{
                color:white;
                width:100%;
            }
            button{
                color:white;
            }
        }
    }
}

.shadow_padding{
    box-shadow: 1px 0px 5px 1px #ddd;
    padding: 10px;
    border-radius: 10px;
}

.last_data_container{
    @extend .shadow_padding;
    .box-data{
        padding: 10px;
        border-bottom: 1px solid #eeeeee;
        .image{
            p{
                font-size: $small;
                font-weight: bold;
            }
            img{
                width:50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        .details{
            overflow: hidden;
            width: calc(100% - 70px);
            p{
                text-overflow:ellipsis;
                font-size: 14px;
            }
            p:last-of-type{
                background-color: #eeeeee;
                padding: 5px;
                border-radius: 5px;
                margin-top: 5px;
            }
            p:first-of-type{
                font-weight: bold;
            }
        }
        >div.details + div{
            height: 1px;
            background-color: #ddd;
            margin-bottom: 10px;
            margin-top: 10px;
        }
        .box-footer{
            a,button{
                color:$black;
                font-size: $small;
                &:hover{
                    color:white;
                }
            }
            p{
                display: flex;
                align-items: center;
                span{
                    font-size: $small;
                }
                span:first-of-type{
                    color:$dark_gray;
                }
                span:last-of-type{
                    color:$gray;
                }
            }
        }
    }
    .box-data:last-of-type{
        border-bottom: none;
    }
    .box-data.category{
        .box-footer{
            p{
                span:last-of-type{
                    font-size: $paragraph;
                    color:$black;
                }
            }
        }
    }
}

.sales_packages{
    @extend .shadow_padding;
    .package{
        border-bottom: 1px solid #eee;
        a{
            div:first-of-type{
                p:first-of-type{
                    span{
                        color:$main_color;
                    }
                    span:last-of-type{
                        color:$dark_gray;
                        font-weight:bold;
                    }
                }
            }
            div:last-of-type{
                div{
                    width: 100px;
                    height: 100px;
                    border: 7px solid $main_color;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: $semi_big;
                }
            }
        }
    }
    .package:last-of-type{
        border-bottom: none;
    }
}

.statistics_box{
    background-image: url("/images/dashboard/statistics.jpg") !important;
}

</style>
