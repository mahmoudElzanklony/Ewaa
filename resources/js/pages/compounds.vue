<template>
    <section class="compounds">
        <navbar-component></navbar-component>
        <div class="show_results">
            <div class="container">
                <h2 class="mb-3 mt-3 main-title">
                    <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-line"></i></span>
                    <span v-else><i class="ri-arrow-right-line"></i></span>
                    <span>
                        {{ keywords.compounds_guide }}
                        1000
                        {{ keywords.projects_with_prices_of_all_units }}
                    </span>
                </h2>
                <div class="tags">
                    <inertia-link href="#" v-for="i in 10" :key="i">
                        <span>شقق</span>
                        <span>(100)</span>
                    </inertia-link>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="filters">
                            <form>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.compound_name }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <input class="mr-0 ml-0 mt-1 mb-1 form-control" name="compound_name">
                                </div>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.locations }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <ul>
                                        <li v-for="i in 5" :key="i">
                                            <input type="checkbox" name="location[]">
                                            <span>القاهرة</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.property_types }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <ul>
                                        <li v-for="i in 5" :key="i">
                                            <input type="checkbox" name="proprty_types[]">
                                            <span>عقار</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.price_level }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <ul>
                                        <li v-for="i in ['economic','mid_range','luxury']" :key="i">
                                            <input type="checkbox" name="price_level[]" :value="i">
                                            <span>{{ keywords[i] }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.compound_status }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <ul>
                                        <li v-for="i in ['under_construction','delivered','launch']" :key="i">
                                            <input type="checkbox" name="status[]" :value="i">
                                            <span>{{ keywords[i] }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.finishing_type }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <ul>
                                        <li v-for="i in ['super_lux','extra_super_lux','lux','semi_finished','without_finish']" :key="i">
                                            <input type="checkbox" name="status[]" :value="i">
                                            <span>{{ keywords[i] }}</span>(100)
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.payment_methods }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <ul>
                                        <li v-for="i in ['cash','installments','cash_or_installments']" :key="i">
                                            <input type="checkbox" name="payment_methods[]" :value="i">
                                            <span>{{ keywords[i] }}</span>(20)
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="d-flex align-items-center justify-content-between">
                                        <span>{{ keywords.developer_experience }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </p>
                                    <ul>
                                        <li v-for="i in ['has_delivered_projects','has_inhabited_projects']" :key="i">
                                            <input type="checkbox" name="developer_experience[]" :value="i">
                                            <span>{{ keywords[i] }}</span>(30)
                                        </li>
                                    </ul>
                                </div>
                                <input type="submit" class="btn btn-primary form-control text-center" :value="keywords.search">
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-6 col-12">
                        <div class="row">
                            <div class="col-lg-6 col-12" v-for="i in 5" :key="i">
                                <div class="compound">
                                    <div class="image">
                                        <inertia-link href="#">
                                            <img src="/images/sales/one.jpg">
                                        </inertia-link>
                                    </div>
                                    <div class="info">
                                        <p>
                                            <inertia-link href="#">
                                                icity 6 اكتوبر
                                            </inertia-link>
                                        </p>
                                        <p>السادس من اكتوبر</p>
                                        <div class="location_details d-flex align-items-center justify-content-between">
                                            <div>
                                                <p>شقة بحديقة</p>
                                                <p>
                                                    <span>21000</span>
                                                    <span>{{ keywords.pound }}/{{ keywords.meter }}</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p>شقق</p>
                                                <p>
                                                    <span>21000</span>
                                                    <span>{{ keywords.pound }}/{{ keywords.meter }}</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p>تاون هاوس</p>
                                                <p>
                                                    <span>21000</span>
                                                    <span>{{ keywords.pound }}/{{ keywords.meter }}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p>
                                            <span>{{  keywords.prices_start_from }}</span>
                                            <span>123000</span>
                                            <span>{{ keywords.pound }}</span>
                                        </p>
                                    </div>
                                    <div class="user_info">
                                        <div class="user_image d-flex align-items-center">
                                            <img src="/images/users/one.jpg">
                                            <div>
                                                <p>ماونتن فيو</p>
                                                <p>
                                                    <span>{{ keywords.since }} </span>
                                                    <span>2005 </span>
                                                    <span>14 </span>
                                                    <span>{{ keywords.projects }}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="another_info d-flex align-items-center justify-content-between">
                                            <div>
                                                <p>3</p>
                                                <p>{{ keywords.inhabited }}</p>
                                            </div>
                                            <div>
                                                <p>5</p>
                                                <p>{{ keywords.delivered }}</p>
                                            </div>
                                            <div>
                                                <p>10</p>
                                                <p>{{ keywords.in_progress }}</p>
                                            </div>
                                        </div>
                                        <div class="contact d-flex align-items-center justify-content-between">
                                            <inertia-link class="btn" href="#">
                                                <span>WhatApp</span>
                                                <span><i class="ri-whatsapp-line"></i></span>
                                            </inertia-link>
                                            <inertia-link href="#">
                                                <span><i class="ri-phone-line"></i></span>
                                            </inertia-link>
                                        </div>
                                    </div>
                                </div>

                            </div>
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
    name: "compounds",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";


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

.filters{
    form{
        >div{
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            p{
                display: flex;
                align-items: center;
                padding-bottom: 5px;
                span:first-of-type{
                    font-size: $paragraph;
                    font-weight: bold;
                    color: $dark_gray;
                    margin-bottom: 10px;
                }
                span:last-of-type{
                    border: 1px solid #dddddd;
                    border-radius: 2px;
                    width: 35px;
                    height: 35px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    i{
                        font-size: $paragraph;
                    }
                }
            }
            ul{
                li{
                    margin-bottom: 10px;
                    input{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
        input[type="submit"]{
            border-radius: 20px;
        }
    }
}

.compound{
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
    .image{
        a{
            img{
                width: 100%;
                height: 300px;
            }
        }
    }
    .info{
        padding: 10px;
        >p{
            margin-bottom: 10px;
        }
        >p:first-of-type{
            font-weight: bold;
            color:$dark_gray
        }
        >p:nth-of-type(2){
            font-size: $small;
        }
        >p:nth-of-type(3){
            span:nth-of-type(2){
                color:$main_color;
                margin-right: 5px;
                margin-left: 5px;
                font-weight: bold;
            }
            span:nth-of-type(3){
                color:$main_color;
            }
        }

    }
    .location_details{
        margin-bottom: 20px;
        >div{
            p{
                font-size: $small;
            }
            p:first-of-type{
                font-weight: bold;
            }
        }
    }
    .user_info{
        padding: 10px;
        img{
            width:45px;
            height: 45px;
            border-radius: 50%;
            margin-left: 8px;
        }
        div{
            p:first-of-type{
                font-weight: bold;
            }
        }
    }
    .another_info{
        padding-right: 10px;
        padding-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        div{
            p{
                font-size: $small;
                text-align: center;
            }
            p:first-of-type{
                font-weight: bold;
            }
            p:last-of-type{
                color:$dark_gray;
            }
        }
    }
    .contact{
        a:first-of-type{
            width:calc(100% - 60px);
            background-color: $sub_main_color;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            span:first-of-type{
                margin-left: 5px;
            }

            span{
                color:white;
                i{
                    position: relative;
                    top:2px;
                }
            }
        }
        a:last-of-type{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: $main_color;
            span{
                color:white;
            }
        }
    }
}


.ar{
    .filters{
        form{
            >div{
                ul{
                    li{
                        input{
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }
}
.en{
    .filters{
        form{
            >div{
                ul{
                    li{
                        input{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>
