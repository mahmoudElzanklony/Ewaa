<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="/images/logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse  justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle d-flex align-items-center" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span><i class="ri-search-2-line"></i></span>
                            <span>{{ switchWord('Search') }}</span>
                            <span><i class="ri-arrow-drop-down-fill"></i></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <inertia-link href="/search-page-filter">
                                <span><i class="ri-building-line"></i></span>
                                <span>{{ switchWord('buildings') }}</span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span><i class="ri-community-line"></i></span>
                                <span>{{ switchWord('Componds') }}</span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span><i class="ri-hotel-bed-line"></i></span>
                                <span>{{ switchWord('Beds') }}</span>
                            </inertia-link>
                            <!--                            <div class="dropdown-divider"></div>-->
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle d-flex align-items-center" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span><i class="ri-information-line"></i></span>
                            <span>{{ switchWord('Know') }}</span>
                            <span><i class="ri-arrow-drop-down-fill"></i></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <inertia-link href="#">
                                <span><i class="ri-price-tag-2-line"></i></span>
                                <span>{{ switchWord('rate_building') }}</span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span><i class="ri-community-line"></i></span>
                                <span>{{ switchWord('building_prices') }}</span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span><i class="ri-message-3-line"></i></span>
                                <span>{{ switchWord('ask_people_area') }}</span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span><i class="ri-group-line"></i></span>
                                <span>{{ switchWord('premium_people') }}</span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span><i class="ri-line-chart-line"></i></span>
                                <span>{{ switchWord('real_state_index') }}</span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span><i class="ri-lightbulb-line"></i></span>
                                <span>{{ switchWord('public_advice') }}</span>
                            </inertia-link>
                            <!--                            <div class="dropdown-divider"></div>-->
                        </div>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <inertia-link class="nav-link d-flex align-items-center" href="listing/initialize">
                            <span><i class="ri-home-smile-line"></i></span>
                            <span>{{ switchWord('List') }}</span>
                        </inertia-link>
                    </li>

                    <li class="nav-item d-flex align-items-center">
                        <inertia-link class="nav-link" href="#">{{ switchWord('about_us') }}</inertia-link>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <inertia-link class="nav-link" href="#">{{ switchWord('ask_home') }}</inertia-link>
                    </li>

                </ul>
                <ul class="d-flex">
                    <li class="nav-item dropdown d-flex align-items-center">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ri-global-line"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/lang/ar">{{ switchWord('Arabic_Language') }}</a>
                            <a class="dropdown-item" href="/lang/en">{{ switchWord('English_Language') }}</a>
                            <a class="dropdown-item" href="/lang/tu">{{ switchWord('Turkish_Language') }}</a>
                            <!--                            <div class="dropdown-divider"></div>-->
                        </div>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <inertia-link href="#" class="nav-link">
                            <span>{{ switchWord('Help') }}?</span>
                        </inertia-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="user_profile">
                                <img src="/images/icons/profile.svg">
                                <span>{{ switchWord('Blue') }}</span>
                            </div>
                            <div class="dropdown-menu p-0 user-info-auth" aria-labelledby="navbarDropdown">
                                <div class="sign-form" v-if="user == null">
                                    <div class="p-4">
                                        <h2>{{ switchWord('sign_in') }}</h2>
                                        <p>{{ switchWord('add_ad') }}</p>
                                        <inertia-link class="d-block" href="/login">
                                            {{ switchWord('sign_in') }}
                                        </inertia-link>
                                        <inertia-link class="d-block" href="/register">
                                            {{ switchWord('sign_up') }}
                                        </inertia-link>
                                    </div>
                                    <div class="p-4">
                                        <p>{{ switchWord('my_offers') }}</p>
                                        <p>{{ switchWord('get_best_offers') }}</p>
                                    </div>
                                </div>
                                <div class="auth-form" v-else>
                                    <div class="user_image">
                                        <img :src="'/images/users/'+user.image">
                                        <div>
                                            <p>example@gmail.com</p>
                                            <p>{{ switchWord('registered_from_date') }}
                                                {{ new Date(user.created_at).toLocaleDateString() }}
                                            </p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="list">
                                        <p>
                                            <inertia-link href="/profile/edit">
                                                {{ switchWord('activities') }}
                                            </inertia-link>
                                        </p>
                                        <ul>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-heart-line"></i></span>
                                                    <span>{{ switchWord('my_favourite') }}</span>
                                                </p>
                                                <span>4</span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-file-line"></i></span>
                                                    <span>{{ switchWord('my_notes') }}</span>
                                                </p>
                                                <span>2</span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-notification-line"></i></span>
                                                    <span>{{ switchWord('notifications') }}</span>
                                                </p>
                                                <span>2</span>
                                            </li>
                                            <hr>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-building-line"></i></span>
                                                    <span>{{ switchWord('my_listings') }}</span>
                                                </p>
                                                <span>2</span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-bank-card-line"></i></span>
                                                    <span>{{ switchWord('my_balance') }}</span>
                                                </p>
                                                <span></span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-wallet-3-line"></i></span>
                                                    <span>{{ switchWord('charge_credit') }}</span>
                                                </p>
                                                <span></span>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span><i class="ri-logout-box-line"></i></span>
                                                    <span>{{ switchWord('logout') }}</span>
                                                </p>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!--                            <div class="dropdown-divider"></div>-->
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import SwitchLangWord from '../mixin/SwitchLangWord';
export default {
    name: "NavbarComponent",
    mixins:[SwitchLangWord],
    computed:{
        user:function(){
            return this.$inertia.page.props.user;
        }
    },
    created() {

    },
    methods:{
        showList:function (){
            let arrow = $(event.target).parent().find('span i');
            if(arrow.hasClass('ri-arrow-drop-down-fill')){
                arrow.removeClass('ri-arrow-drop-down-fill').addClass('ri-arrow-drop-up-fill')
            }else{
                arrow.removeClass('ri-arrow-drop-up-fill').addClass('ri-arrow-drop-down-fill')
            }
            $(event.target).parent().next().fadeToggle();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.ar{
    .navbar-brand{
        margin-left: 5%;
    }
    .nav-link{
        >span:first-of-type{
            margin-left: 7px;
        }
    }
    .auth-form{
        .user_image{
            img{
                margin-left: 10px;
            }
        }
        .list{
            ul{
                li{
                    p{
                        span:first-of-type{
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }

}
.en{
    .navbar-brand{
        margin-right: 5%;
    }
    .dropdown-menu{
        right: 0px;
        left: unset;
    }
    .nav-link{
        >span:first-of-type{
            margin-right: 7px;
        }
    }
    .auth-form{
        .user_image{
            img{
                margin-right: 10px;
            }
        }
        .list{
            ul{
                li{
                    p{
                        span:first-of-type{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
}
nav {
    .navbar-brand{
        img{
            height: 50px;
        }
    }
    .nav-item{
        >a{
            color:$black !important;
        }
    }
    padding: 0px;
    box-shadow: 1px 1px 1px 1px #ddd;
    background-color: white !important;

    .navbar-brand{
        margin: 0px;
        font-size: 30px;
        font-weight: bold;
        color:$main_color;
        padding: 0px;
        position: relative;
        top:-3px;
        &:hover{
            color:#007e72;
        }
    }
    .nav-item {
        cursor: pointer;
    }
    .dropdown-menu{
        padding: 10px;
        a{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            span:first-of-type{
                color:$main_color;
            }
        }

    }
    .user-info-auth {
        max-width: 320px;
        width: 320px;
        overflow: hidden;
        .sign-form {
            h2 {
                margin-bottom: 10px;
                color: $main_color;
                font-weight: bold;
            }

            p {
                color: $gray;
                margin-bottom: 10px;
            }

            div:nth-of-type(2) {
                background-color: $main_color;
                padding: 15px;

                p {
                    color: white;
                }
            }

            a {
                display: block;
                text-align: center;
                color: $main_color;
                padding: 8px;
                border-radius: 24px;
            }

            a:first-of-type {
                color: white;
                background-color: $main_color;
            }

            a:nth-of-type(2) {
                background-color: $white_gray;
            }
        }

        .auth-form{
            .user_image{
                display: flex;
                align-items: center;
                padding: 10px;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    object-fit: cover;
                }
                div{
                    p:last-of-type{
                        color:$gray;
                        margin-top: 5px;
                    }
                }
            }
            .list{
                >p{
                    padding: 0px 10px;
                    margin-top: 15px;
                    margin-bottom: 10px;
                }
                ul{
                    li{
                        padding:3px 10px;
                        p{
                            span{
                                font-size: $small;
                            }
                            span:last-of-type{
                                font-weight: bold;
                            }
                        }
                        >span{
                            color:white;
                            padding:0px 5px;
                            border-radius: 3px;
                            background-color: $main_color;
                        }
                    }
                }
            }
        }

    }
}
.nav-link{
    color:$black;
    .box{
        position: absolute;
        top:0px;
        display: none;
    }
    p{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span:nth-of-type(2){
            margin-right: 7px;
            margin-left: 7px;
        }
    }
}
.dropdown-toggle{
    span:nth-of-type(2){
        margin-right: 7px;
        margin-left: 7px;
    }
    .user_profile{
        text-align: center;
        img{
            width:40px;
            height: 40px;
            border-radius: 50%;
            border:1px solid #eee;
        }
        span{
            background-color: $main_color;
            color: white;
            padding: 1px 9px;
            border-radius: 5px;
            font-size: 10px;
            display: block;
            position: relative;
            text-align: center;
            top: -8px;
        }
    }
}
.dropdown-toggle::after{
    display: none;
}
@media (min-width: 992px) {
    nav ul:first-of-type .nav-item:nth-of-type(2) div,
    nav ul:first-of-type .nav-item:nth-of-type(3) div{
        width:203px;
    }
}
@media (max-width:992px) {
    .navbar-collapse {
        flex-wrap: wrap;
        .navbar-nav {
            width: 100%;
        }
    }
    .user-info-auth{
        width:320px;
    }
    ul.d-flex{
        flex-direction: column;
    }
    .ar {
        nav .dropdown-menu{
            right: 0px;
        }
        .user-info-auth{
            right: 0px;
        }
        .nav-link {
            padding-right: 0px;
        }
    }
    .en{
        nav .dropdown-menu{
            left:0px;
        }
        .user-info-auth{
            left: 0px;
        }
        .nav-link {
            padding-left: 0px;
        }
    }
}

@media (max-width: 767px) {
    .auth-form , .sign-form{
        max-height: 400px;
        overflow: auto;
    }
}

</style>
