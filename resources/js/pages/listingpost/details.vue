<template>
    <section class="post_listing_details"  >
        <navbar-component></navbar-component>
        <div class="container">
            <div class="pages">
                <inertia-link href="#">{{ keywords.egypt_properties }}</inertia-link>
                <span><i class="ri-arrow-left-s-line"></i></span>
                <inertia-link href="#">{{ keywords.properties_for_sale }}</inertia-link>
                <span><i class="ri-arrow-left-s-line"></i></span>
                <inertia-link href="#" >{{ keywords.properties_for_sale }}</inertia-link>
                <span><i class="ri-arrow-left-s-line"></i></span>
                <inertia-link href="#" class="active">شقة 150م بسعر افتتاح الكمبوند 7500 للمتر بالتقسيط حتي 10 سنوات</inertia-link>
            </div>
        </div>
        <div class="post-details-fixed"  ref="toggle_details">
                <div class="container">
                    <h2 class="mb-2">شقة 150م بسعر افتتاح الكمبوند 7500 للمتر بالتقسيط حتي 10 سنوات
                    </h2>
                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <p class="d-flex align-items-center mb-2">
                            <span><i class="ri-map-pin-line"></i></span>
                            <inertia-link href="#"> كمبوندات العاصمة الادارية الجديدة </inertia-link>
                            <span><i class="ri-building-line"></i></span>
                            <inertia-link href="#">شقق</inertia-link>
                            <span><i class="ri-hotel-bed-line"></i></span>
                            <span>3</span>
                            <span><i class="ri-fullscreen-line"></i></span>
                            <span>300</span>
                        </p>
                        <h2 class="mb-2">
                            <span>100000</span>
                            <span>{{ keywords.pound }}</span>
                            <button class="btn btn-primary shadow_animation" data-toggle="modal" data-target="#show_phone_number">{{ keywords.show_phone_number }}</button>
                        </h2>
                    </div>
                </div>
            </div>
        <div class="container">
            <div class="more-info">
                <div class="row">
                    <div class="col-lg-8 col-md-6 col-12">
                        <div class="images">
                            <div class="image">
                                <img src="/images/sales/one.jpg">
                                <div class="seller_info d-flex align-items-center">
                                    <img src="/images/users/one.jpg">
                                    <div>
                                        <p>احمد علي سعد</p>
                                        <p>
                                            <span><i class="ri-building-line"></i></span>
                                            <span>151</span>
                                            <span>{{ keywords.listing }}</span>
                                        </p>
                                        <inertia-link href="#">
                                            {{ keywords.view_properties_from_this_seller }}
                                        </inertia-link>
                                    </div>
                                </div>
                            </div>
                            <div class="small_images">
                                <img  v-for="i in 5" :key="i" src="/images/sales/one.jpg">
                            </div>
                        </div>
                        <div class="details-info mt-5">
                            <p class="mb-3">
                                <strong>{{ keywords.listing_details }}</strong>
                            </p>
                            <table class="table table-striped" v-if="type == 'akar'">
                                <tr v-for="i in 6" :key="i">
                                    <td>الدور</td>
                                    <td>2</td>
                                </tr>
                            </table>
                            <table class="table table-striped compound_table" v-else>
                                <tr>
                                    <td>{{ keywords.type }}</td>
                                    <td>{{ keywords.price }}</td>
                                    <td>{{ keywords.areas }}</td>
                                    <td></td>
                                </tr>
                                <tr v-for="i in 6" :key="i">
                                    <td>شقق</td>
                                    <td>200</td>
                                    <td>100 - 200</td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {{ keywords.details }}
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <inertia-link class="dropdown-item"
                                                              v-for="i in 10" :key="i"
                                                              href="#">150 {{  keywords.meter}}
                                                </inertia-link>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <p class="mt-5 mb-3">
                                <strong>{{ keywords.listing_description }}</strong>
                            </p>
                            <p>لموقع: R8 قطعه L5
                                مساحه المشروع : 18 فدان
                                مبني علي نسبة 20% من إجمالي مساحة الأرض \</p>
                            <div class="video">
                                <p class="mt-4 mb-2">
                                    <strong>{{ keywords.video }}</strong>
                                </p>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Sv-T-RAPadQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div class="developer_data">
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
                                            <inertia-link href="#">
                                                {{ keywords.show_properties }}
                                            </inertia-link>
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
                                    </div>
                                </div>

                                <div class="map mb-2" style="height: 400px">
                                    <p>{{ keywords.map }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="user-data">
                            <div class="d-flex align-items-center justify-content-between flex-wrap" v-if="type == 'akar'">
                                <p class="text-center" @click="toggle_fav">
                                    <span><i class="ri-heart-line"></i></span>
                                    <span class="d-block">{{ keywords.favourite }}</span>
                                </p>
                                <p class="text-center" data-toggle="modal" data-target="#show_notes">
                                    <span><i class="ri-file-line"></i></span>
                                    <span class="d-block">{{ keywords.note }}</span>
                                </p>
                                <p class="text-center" data-toggle="modal" data-target="#share_listing">
                                    <span><i class="ri-share-line"></i></span>
                                    <span class="d-block">{{ keywords.share }}</span>
                                </p>

                            </div>
                            <button class="btn btn-primary shadow_animation" data-toggle="modal" data-target="#show_phone_number">{{ keywords.show_phone_number }}</button>
                            <button class="btn btn-outline-primary" @click="toggle_email">{{ keywords.send_email }}</button>
                            <div class="send_email">
                                <form>
                                    <textarea class="form-control"></textarea>
                                    <input class="btn btn-primary" :value="keywords.send_email">
                                </form>
                            </div>
                        </div>
                        <div class="get_help" data-toggle="modal" data-target="#request_help" v-if="type =='akar'">
                            <p><strong>{{ keywords.want_help }}</strong></p>
                            <p>{{ keywords.get_help_from }}</p>
                            <button class="btn btn-outline-primary">{{ keywords.get_help }}</button>
                        </div>
                        <div class="see_also_listings" v-if="type == 'akar'">
                            <p class="d-flex align-items-center mt-4 mb-2 main-title">
                                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                <span>{{ keywords.see_this_properties_also }}</span>
                            </p>
                            <ListingPostComponent v-for="i in 5" :key="i"
                                image="one.jpg"
                                number_of_images="5"
                                info="لاول مره في العاصمه الاداريه شقه بمقدم 0% واقساط"
                                address="العاصمه الاداريه-الحي الثامن-كمبوند كارديا"
                                price="500"
                            ></ListingPostComponent>
                        </div>
                    </div>
                </div>
            </div>
            <div class="questions">
                <QuestionComponent v-for="i in 6" :key="i"
                    question="ما هي العقارات المنتشرة بأفضل الاسعار في القاهره"
                    answer="يوجد عقارات كثيره في الشيخ زايد و مدينتي و مدينه نصر"
                ></QuestionComponent>
            </div>
        </div>
        <footer-component></footer-component>


        <div class="modal fade" id="show_phone_number" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="show_phone_number_box">{{ keywords.enter_your_info_to_contact_with_seller }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>{{ keywords.username }}</label>
                                <input class="form-control" name="username" required>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.email }}</label>
                                <input class="form-control" name="email" required>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.phone }}</label>
                                <input class="form-control" name="phone" required>
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary"
                                       name="save"
                                       type="submit"
                                       :value="keywords.show_phone_number" required>
                            </div>
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



        <div class="modal fade" id="show_notes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="show_notes_box" style="font-size: 16px">{{ keywords.note_you_write_it }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>{{ keywords.note }}</label>
                                <textarea name="note" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary"
                                       type="submit"
                                       name="save"
                                       :value="keywords.save" required>
                            </div>
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




        <div class="modal fade" id="share_listing" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="share_listing_box" style="font-size: 16px">{{ keywords.share_listing }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label class="d-block w-100">https://aqarmap.com.eg/3429958</label>
                                <inertia-link href="https://www.facebook.com/sharer/sharer.php?u=https://aqarmap.com.eg/3429958">
                                    <i class="ri-facebook-line"></i>
                                </inertia-link>
                                <inertia-link href="https://twitter.com/intent/tweet?url=https://aqarmap.com.eg/3429958">
                                    <i class="ri-twitter-line"></i>
                                </inertia-link>
                            </div>
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



        <div class="modal fade" id="request_help" tabindex="-1"
             style="z-index: 9999999999;"
             role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="request_help_box" style="font-size: 16px">{{ keywords.get_help }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-3">{{ switchWord('to_get_best_results') }}</p>
                        <contact-office v-for="i in  5" :key="i"
                                        name="Aqar Guide Real Estate"
                                        number_of_listing="4500"
                                        date="20/02/2011"
                        ></contact-office>
                        <input type="button" class="btn btn-primary"
                               :value="switchWord('request_contact')">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ListingPostComponent from "../../components/ListingPostComponent"
import SwitchLangWord from "../../mixin/SwitchLangWord";
import ContactOffice from "./ContactOffice";
import QuestionComponent from "../../components/QuestionComponent";
export default {
    name: "details",
    props:['keywords','type'],
    mixins:[SwitchLangWord],
    components: {QuestionComponent, ContactOffice, ListingPostComponent, FooterComponent, NavbarComponent},
    methods:{
        toggle_post_details_fixed:function (){
            console.log(this.$refs.toggle_details.getBoundingClientRect().top);
        },
        toggle_email:function(){
            $(event.target).next().slideToggle();
        },
        toggle_fav:function(){
            if($(event.target).parent().find('i.ri-heart-line').hasClass('ri-heart-line')) {
                // added to fav
                Toast.fire({
                   icon:'success',
                   title:this.switchWord('added_to_fav'),
                });
                $(event.target).parent().find('i.ri-heart-line').parent().css('color', 'darkred');
                $(event.target).parent().find('i.ri-heart-line').
                removeClass('ri-heart-line').addClass('ri-heart-fill');
            }else{
                // remove from fav
                Toast.fire({
                    icon:'success',
                    title:this.switchWord('removed_from_fav'),
                });
                $(event.target).parent().find('i.ri-heart-fill').parent().css('color', '#c9cacf');
                $(event.target).parent().find('i.ri-heart-fill').
                removeClass('ri-heart-fill').addClass('ri-heart-line');
            }
        },
    },
    mounted() {
        if(this.$inertia.page.props.lang == 'ar'){
            $('.pages span i').removeClass('ri-arrow-right-s-line').addClass('ri-arrow-left-s-line');
        }else{
            $('.pages span i').removeClass('ri-arrow-left-s-line').addClass('ri-arrow-right-s-line');
        }
        $(window).on('scroll',function(){
            if(window.pageYOffset > 330){
                $('.post-details-fixed').addClass('fixed_details');
                $('.post-details-fixed button').fadeIn();
            }else{
                $('.post-details-fixed').removeClass('fixed_details');
                $('.post-details-fixed button').fadeOut();
            }
        })
    }
}
</script>


<style lang="scss" scoped>
@import "resources/sass/variables";
.ar{
    .post-details-fixed{
        >div{
            span,a{
                margin-left: 5px;
            }
        }
    }

    .more-info{
        .images{
            .image{
                .seller_info{
                    right: 0px;
                    div{
                        margin-right: 10px;
                        p{
                            span{
                                margin-left: 5px;
                            }
                        }
                    }
                }
            }
        }
        .small_images{
            img{
                margin-left: 10px;
            }
        }
    }

    .developer_data {
        .user_info {
            .user_image{
                a{
                    left: 0px;
                }
            }
            img {
                margin-left: 8px;
            }
        }

    }


}
.en{
    .post-details-fixed{
        >div{
            span,a{
                margin-right: 5px;
            }
        }
    }

    .more-info{
        .images{
            .image{
                .seller_info{
                    left: 0px;
                    div{
                        margin-left: 10px;
                        p{
                            span{
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
        }
        .small_images{
            img{
                margin-right: 10px;
            }
        }
    }

    .developer_data {
        .user_info {
            .user_image{
                a{
                    right: 0px;
                }
            }
            img {
                margin-right: 8px;
            }
        }

    }

}

.post-details-fixed{
    margin-bottom: 15px;
    >h2{
        font-weight: bold;
    }
    >div{
        p{
            span:nth-child(odd){
                color:$gray;
            }
        }
        h2{
            span{
                color:$main_color;
            }
            button{
                border-radius: 20px;
                display: none;
            }
        }
    }
}

.more-info{
    .images{
        .image{
            position: relative;
            img{
                width:100%;
                height: 100%;
                object-fit: cover;
            }
            .seller_info{
                position: absolute;
                bottom: 0px;
                background-color: white;
                padding: 5px;
                width: 60%;
                border:1px solid #ddd;
                img{
                    width: 60px;
                    height: 50px;
                }
                div{
                    p{
                        display: flex;
                        align-items: center;
                        span{
                            color:$gray;
                        }
                    }
                    p:first-of-type{
                        color:$black;
                    }
                    a{
                        color:$main_color;
                    }
                }
            }
        }
    }
    .small_images{
        display: flex;
        align-items: center;
        overflow: auto;
        img{
            height: 75px;
            width: 100px;
            border: 1px solid #ddd;
        }
        img:last-of-type{
            margin-right: 0px;
            margin-left: 0px;
        }
    }
}

.user-data{
    box-shadow: 1px 1px 10px 0px #dddddd;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    p{
        margin-bottom: 10px;
        span{
            color:$gray;
            cursor: pointer;
        }
    }
    >div{
        p{
            span:last-of-type{
                color:$black;
            }
        }
    }
    button{
        margin-bottom: 10px;
        display: block;
        border-radius: 20px;
        width: 100%;
    }
    div{
        display: none;
        form{
            textarea{
                height: 60px;
            }

        }
    }
}
.get_help{
    box-shadow: 1px 1px 10px 0px #dddddd;
    padding: 15px;
    border-radius: 10px;
    p{
        strong{
            font-size: 20px;
        }
    }
    p{
        margin-bottom: 15px;
    }
    button{
        width:100%;
        border-radius: 20px;
    }
}
.send_email{
    input{
        width: 100%;
        border-radius: 20px;
        margin-top: 10px;
    }
}
.see_also_listings {
    p.main-title{
        span:first-of-type{
            position: relative;
            top:2px;
            color:$main_color;
        }
        span:last-of-type{
            font-weight: bold;
        }
    }

}
.details-info{
    p:last-of-type{
        color:$dark_gray;;
    }
}
table{
    tr:nth-child(odd){
        background-color: #eeeeee63;
    }
    tr:hover{
        background-color: #eeeeee63;
    }
}


#share_listing{
    form{
        a{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width:40px;
            height: 40px;
            border-radius: 50%;
            i{
                color:white;
                position: relative;
                top:2px;
            }
        }
        a:first-of-type{
            background-color: #3b5998;
        }
        a:last-of-type{
            background-color: #26a6d1;
        }

    }
}

.fixed_details{
    position: fixed;
    top:0px;
    right: 0px;
    left: 0px;
    background-color: white;
    z-index: 99999;
    box-shadow: 1px 1px 1px 1px #ddd;
    padding-top: 10px;
    padding-bottom: 5px;
}

.shadow_animation{
    animation-name: shadow_animation;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-delay: 1s;
}
@keyframes shadow_animation {
    0%{
        box-shadow: none;
    }
    20%{
        box-shadow: none;
    }
    100%{
        box-shadow: 0px 0px 2px 7px #ff6a1547;
    }
}

.developer_data {
    margin-top: 15px;
    margin-bottom: 15px;
    .user_info {
        padding: 10px;
        .user_image{
            position: relative;
            a{
                position: absolute;
                color:$main_color;
            }
        }
        img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin-left: 8px;
        }

        div {
            p:first-of-type {
                font-weight: bold;
            }
        }
    }

    .another_info {
        padding-right: 10px;
        padding-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;

        div {
            p {
                font-size: $paragraph;
                text-align: center;
            }

            p:first-of-type {
                font-weight: bold;
            }

            p:last-of-type {
                color: $dark_gray;
            }
        }
    }
}

.questions {
    border-radius: 8px;
    overflow: hidden;
}

</style>
