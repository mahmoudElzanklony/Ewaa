<template>
    <section class="packages_info">
        <navbar-component></navbar-component>
        <div class="reach_clients">
            <div class="container d-flex align-items-center justify-content-between">
                <div>
                    <h2>{{ keywords.reach_more_clients_with_ewaa }}</h2>
                    <p>{{ keywords.list_all_your_properties_to_be_viewed_by_thousands_of_potential_clients }}</p>
                </div>
                <img src="/images/gereral/package-details.png">
            </div>
        </div>

        <div class="package_details">
            <div class="container">
                <h2>{{ keywords.company_packages }}</h2>
                <p>{{ keywords.select_the_package_that_suits_your_budget_and_get_immediate_results }}</p>
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-6 col-12" v-for="(i,index) in  packages"
                         :key="index"
                    >
                        <div :class="'package ' + (i == -100 ? 'active':'')">
                            <p v-if="false">
                                {{ keywords.recommended }}
                            </p>
                            <ul>
                                <li class="text-center">
                                    <img :src="'/images/packages/'+i['image']">
                                </li>
                                <li>
                                    <h3 class="text-center">
                                        <strong>{{ get_price(i) }}</strong>
                                        <span>{{ i['currency'][$page.props.lang+'_name'] }}</span>
                                    </h3>
                                </li>
                                <li>
                                    <span>{{ keywords.package_name }}  : </span>
                                    <span>{{ i['name'] }}</span>
                                </li>
                                <li>
                                    <span>{{ keywords.min_points }}  : </span>
                                    <span>{{ i['min_value'] }}</span>
                                    <span>{{ keywords.point }}</span>
                                </li>

                                <li>
                                    <span>{{ keywords.max_points }}  : </span>
                                    <span>{{ i['max_value'] }}</span>
                                    <span>{{ keywords.point }}</span>
                                </li>
                                <li>
                                    <span>{{ keywords.point_price }}  : </span>
                                    <span>{{ get_price(i) }}</span>
                                </li>
                                <li>
                                    <span>{{ keywords.currency_used }}  : </span>
                                    <span>{{ i['currency'][$page.props.lang+'_name'] }}</span>
                                </li>
                                <li>
                                    <span>{{ keywords.expiration_package_date }}  : </span>
                                    <span>
                                        {{ i['expiration_date'] == null ? keywords.not_selected:new Date(i['expiration_date']).toLocaleDateString() }}
                                    </span>
                                </li>

                                <button v-if="$page.props.user != null"
                                        class="btn" data-toggle="modal" @click="package = i"
                                        data-target="#buy_now">
                                    {{ keywords.buy_now }}
                                </button>

                                <button v-else class="btn" @click="$inertia.visit('/login')">
                                    {{ keywords.buy_now }}
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="links">
            <div class="container">
                <button  data-toggle="modal"
                              data-target="#show_clients">{{ keywords.what_our_clients_say }}</button>
                <button data-toggle="modal"
                        data-target="#questions_packages">{{ keywords.frequent_questions }}</button>
                <button data-toggle="modal"
                        data-target="#terms_and_conditions">{{ keywords.terms_and_conditions }}</button>
            </div>
        </div>

        <contact-us-component></contact-us-component>



        <!-----------------------------buy package---------------------->

        <div class="modal fade" v-if="package != null" id="buy_now" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="show_buy_now_box">{{ keywords.buy_now }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="alert alert-warning">
                            <span>{{ switchWord('note_that_min_number_of_points_for_this_package_is') }}</span>
                            <strong>{{ package['min_value'] }}</strong>
                            <span>{{ switchWord('and_max_number_of_points_for_this_package_is') }}</span>
                            <strong>{{ package['max_value'] }}</strong>
                        </p>
                        <form method="post" @submit.prevent="confirm_buy" >
                            <div class="form-group">
                                <label>{{ switchWord('no_points') }}</label>
                                <input class="form-control" type="number"
                                       @change="check_package(package)"
                                       name="points_ordered" :min="package['min_value']" :max="package['max_value']">
                            </div>
                            <input v-if="$page.props.user != null"
                                   type="submit" class="btn btn-primary" :value="switchWord('buy')">

                            <input v-else type="button" class="btn btn-primary"
                                   @click="$inertia.visit('/login')"
                                   :value="switchWord('buy')">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-----------------------------end of buy package---------------------->


        <!-----------------------------clients feedback---------------------->

        <div class="modal fade" id="show_clients" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="show_clients_box">{{ keywords.what_our_clients_say }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="feedback mb-4" v-for="i in 4" :key="i">
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <p class="text-center mb-2">احمد علي</p>
                                    <img src="/images/users/one.jpg">
                                </div>
                                <div class="col-9">
                                    <div class="content">
                                        <p>شكرا على مجهوداتكم. السنة الماضية كانت سنة حافلة بالإنجازات بفضل فريق العمل الرائع والخدمة المتميزة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-----------------------------clients feedback---------------------->
        <!-----------------------------questions of packages---------------------->

        <div class="modal fade" id="questions_packages" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="questions_packages_box">{{ keywords.frequent_questions }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <question-component v-for="i in 6" :key="i"
                            question="مميزات تطبيق ايواء لايف؟"
                            answer="التطبيق يوفر مستجدات السوق و يوفر مستجدات العرض والطلب في كل منطقه (البورصه)."
                        ></question-component>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-----------------------------questions of packages---------------------->
        <!-----------------------------terms and conditions of packages---------------------->

        <div class="modal fade" id="terms_and_conditions" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="terms_and_conditions_box">{{ keywords.terms_and_conditions }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul style="list-style: inside;">
                            <li v-for="i in 10" class="mb-2">
                                جميع الباقات تحتوي على تطبيق Ewaa Live.
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-----------------------------terms and conditions of packages---------------------->

        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import QuestionComponent from "../../components/QuestionComponent";
import ContactUsComponent from "../../components/ContactUsComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from "vuex";
export default {
    name: "packages_info",
    props:['keywords','packages'],
    mixins:[SwitchLangWord],
    data:function (){
        return {
            package:null,
        }
    },
    methods:{
       get_price:function(i){
           if(this.$page.props.user != null) {
               var country_id = this.$page.props.user.country_id;
           }else{
               var country_id = 0;
           }
           return i['countries'].length == 0 ? i['price'] : i['countries'].find((c)=>{return c['country_id'] == country_id }) != null ? i['countries'].find((c)=>{return c['country_id'] == country_id })['price']:i['price']
       },
        check_package:function(pack){
           if(!(event.target.value >= pack['min_value'] && event.target.value <= pack['max_value'])){
               Toast.fire({
                   icon:'error',
                   title:this.switchWord('no_points_isnt_correct')
               })
           }
        },
        ...mapActions({
            'buy':'buy_package/buy',
        }),
        confirm_buy:function (){
           var target = event.target;
           var data = new FormData(target);
           if($(target).find('input[name="points_ordered"]').val() >= this.package.min_value && $(target).find('input[name="points_ordered"]').val() <= this.package.max_value) {
               data.append('package_id', this.package.id);
               this.buy({data:data,target:target});
           }else{
               Toast.fire({
                   icon:'error',
                   title:this.switchWord('no_points_isnt_correct')
               })
           }
        },
    },
    components: {ContactUsComponent, QuestionComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.ar{
    .packages_info{
        .package_details{
            margin-top: 30px;
            .container{
                .package{
                    ul{
                        li{
                            span:not(:last-of-type){
                                margin-left: 5px;
                            }
                        }
                    }
                }
            }
        }

    }
    .links{
        .container{
            button:not(:last-of-type){
                margin-left: 10px;
            }
        }
    }
    #show_clients{
        .feedback{
            .content{
                &:before{
                    content: '';
                    border-left: 10px solid #eee !important;
                    right: -21px;
                    top: 40%;
                }
            }
        }
    }
}
.en{
    .package_details{
        margin-top: 30px;
        .container{
            .package{
                ul{
                    li{
                        span:not(:last-of-type){
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
    .links{
        .container{
            button:not(:last-of-type){
                margin-right: 10px;
            }
        }
    }
    #show_clients{
        .feedback{
            .content{
                &:before{
                    content: '';
                    border-right: 10px solid #eee !important;
                    left: -21px;
                }
            }
        }
    }
}
.packages_info{
    .reach_clients{
        background-color: $main_color;
        padding: 20px;
        .container{
            div{
                h2,p{
                    color:white;
                }
                h2{
                    margin-bottom: 20px;
                }
            }
            img{
                height: 110px;
            }
        }
    }

    .package_details{
        margin-top: 30px;
        .container{
            h2,p{
                color:$dark_gray;
                margin-bottom: 15px;
            }
            .package{
                border: 1px solid #dddddd;
                padding: 10px;
                border-radius: 10px;
                margin-bottom: 10px;
                >p{
                    font-size: $semi_big;
                    font-weight: bold;
                }
                ul{
                    li{
                        margin-bottom: 12px;
                        img{
                            width:80px;
                            height: 80px;
                            border-radius: 50%;
                            border: 1px solid #dddddd;
                        }
                        span:first-of-type{
                            font-weight: bold;
                            color:$dark_gray;
                        }
                        span{
                            i{
                                color:$sub_main_color;
                                position: relative;
                                top:2px;
                            }
                        }
                    }
                }
                button{
                    border-radius: 20px;
                    display: block;
                    margin: 10px auto;
                    max-width: 175px;
                    background-color: $sub_main_color;
                    color:white;
                    padding-right:30px;
                    padding-left:30px;
                }
            }
            .package.active{
                border-color: $main_color;
                p:first-of-type{
                    background-color: $main_color;
                    color:white;
                    border-radius: 10px;
                    width:fit-content;
                    padding: 6px 45px;
                    font-size: $paragraph;
                    margin: 10px auto;
                }
                a{
                    background-color: $main_color;
                }
            }
        }
    }

    .links{
        margin: 30px 0px;
        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                border-radius: 20px;
                background-color: #eee;
                color: $main_color;
                padding: 6px 20px;
                border: none;
                outline: none;
            }
        }
    }

    #show_clients{
        .feedback{
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: block;
                margin: auto;
            }
            .content{
                padding: 15px;
                border-radius: 10px;
                box-shadow: 1px 1px 2px 2px #eee;
                position: relative;
                &:before{
                    display: block;
                    width: 0px;
                    height: 0px;
                    border: 10px solid transparent;
                    position: absolute;
                    top: 40%;
                }
            }
        }
    }



}
</style>
