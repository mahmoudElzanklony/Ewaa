<template>
    <section class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content">
            <div class="container">
                <div class="listing_box">
                    <div class="layer d-flex flex-wrap">
                        <h2>{{ keywords.ewaa_word }}</h2>
                        <p>{{ keywords.ewaa_listings }}</p>
                        <inertia-link href="/dashboard/listings"
                                      class="btn btn-primary">{{ switchWord('explore_listings') }}
                        </inertia-link>
                        <inertia-link href="/dashboard/statistics"
                                      class="btn btn-outline-primary">{{ switchWord('see_statics') }}
                        </inertia-link>
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
                             justify-content-between flex-wrap" v-for="(i,index) in data['last_listings']" :key="index">
                                <div class="image">
                                    <p class="text-center">
                                        {{ i['user']['username'] }}
                                    </p>
                                    <img :src="'/images/users/'+i['user']['image']">
                                </div>
                                <div class="details">
                                    <p>{{ i['name'] }}</p>
                                    <p>{{ i['info'] }}</p>
                                </div>
                                <div class="w-25"></div>
                                <div class="box-footer w-100 d-flex align-items-center justify-content-between">
                                    <inertia-link :href="'/listing/details?id='+i['id']" class="btn btn-outline-primary">
                                        {{ keywords.show_details }}
                                    </inertia-link>
                                    <p>
                                        <span>{{ new Date(i['created_at']).toLocaleDateString() }}</span>
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
                             justify-content-between flex-wrap"
                                     v-for="(i,index) in data['pending_listings']" :key="index">
                                    <div class="image">
                                        <p class="text-center">
                                            {{ i['user']['username'] }}
                                        </p>
                                        <img :src="'/images/users/'+i['user']['image']">
                                    </div>
                                    <div class="details">
                                        <p>{{ i['name'] }}</p>
                                        <p>{{ i['info'] }}</p>
                                    </div>
                                    <div class="w-25"></div>
                                    <div class="box-footer w-100 d-flex align-items-center justify-content-between">
                                        <p>
                                            <inertia-link :href="'/listing/details?id='+i['id']" class="btn btn-outline-primary">
                                                {{ keywords.show_details }}
                                            </inertia-link>
                                            <button @click="approve_listing(i['id'])" class="btn btn-outline-success">
                                                {{ keywords.approve }}
                                            </button>
                                        </p>
                                        <p>
                                            <span>{{ new Date(i['created_at']).toLocaleDateString() }}</span>
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
                            <div class="package p-2" v-for="(i,index) in  data['subscriptions']" :key="index">
                                <inertia-link href="/dashboard/subscriptions" class="d-flex flex-wrap justify-content-between align-items-center">
                                    <div>
                                        <p class="d-flex align-items-center">
                                            <span><i class="ri-vip-crown-line"></i></span>
                                            <span>{{ i['name'] }}</span>
                                        </p>
                                        <p>
                                            <span>
                                                {{ switchWord('used_currency') }}
                                                {{ i['currency_name'] }}
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <div class="circle">
                                            {{ i['total_purchases'] }}
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
                             justify-content-between flex-wrap" v-for="(i,index) in data['categories']" :key="index">
                                    <div class="image">
                                        <img :src="'/images/categories/'+i['image']">
                                    </div>
                                    <div class="details">
                                        <p>{{ i[$inertia.page.props.lang+'_name'] }}</p>
                                        <p>{{ i[$inertia.page.props.lang+'_info'] }}</p>
                                    </div>
                                    <div class="w-25"></div>
                                    <div class="box-footer w-100 d-flex align-items-center justify-content-between">
                                        <p>
                                            <span>
                                                <i class="ri-question-line"></i>
                                            </span>
                                            <span>{{i['questions'].length}}</span>
                                        </p>
                                        <p>
                                            <span>
                                                <i class="ri-building-line"></i>
                                            </span>
                                            <span>{{ i['listings'].length }}</span>
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
                        <line-chart :chart_data="data['statistics']"
                                    :labels_data="Object.values(data['months'])"></line-chart>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";

export default {
    name: "index",
    components: {SideNavbarComponent},
    props:['keywords','data'],
    data:function (){
      return {

      }
    },
    methods:{
        approve_listing:function(id){
            var target = event.target;

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
                    axios.post('/dashboard/accept-listing',{
                        id
                    }).then((e)=>{
                        target.parentElement.parentElement.parentElement.parentElement.remove();
                        Swal.fire(
                            this.switchWord('approved_done'),
                            this.switchWord('approved_done_successfully'),
                            'success'
                        )
                    })
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
