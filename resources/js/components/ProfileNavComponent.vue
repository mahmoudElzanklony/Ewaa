<template>
    <div>
        <div class="profile-nav">
            <div class="container">
                <ul class="d-flex align-items-center justify-content-between">
                    <li class="d-flex align-items-center justify-content-center">
                        <span><i class="ri-file-user-line"></i></span>
                        <span>
                            {{ $page.props.user.username }}
                        </span>
                    </li>
                    <li>
                        <inertia-link href="/profile/edit">
                            <span><i class="ri-user-line"></i></span>
                            <span>{{ switchWord('personal_info') }}</span>
                        </inertia-link>
                    </li>
                    <li>
                        <inertia-link href="/profile/dashboard">
                            <span><i class="ri-building-line"></i></span>
                            <span>{{ switchWord('my_listings') }}</span>
                        </inertia-link>
                    </li>
                    <li>
                        <inertia-link href="/profile/statistics">
                            <span><i class="ri-line-chart-line"></i></span>
                            <span>{{ switchWord('statistics') }}</span>
                        </inertia-link>
                    </li>
                    <li>
                        <inertia-link href="/profile/favourites">
                            <span><i class="ri-heart-line"></i></span>
                            <span>{{ switchWord('my_favourite') }}</span>
                        </inertia-link>
                    </li>
                    <li>
                        <inertia-link href="/profile/notes">
                            <span><i class="ri-file-list-3-line"></i></span>
                            <span>{{ switchWord('my_notes') }}</span>
                        </inertia-link>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="profile-nav-line">
    </div>
</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "ProfileNavComponent",
    mixins:[SwitchLangWord],
    mounted() {
        var url = document.URL;
        for(let a of document.querySelectorAll('.profile-nav ul li a')){
            if(url.indexOf(a.getAttribute('href')) >= 0){
                a.parentElement.className = 'active';
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.profile-nav{
    border-top: 1px solid #ddd;
    margin-top: 25px;
    ul{
        li{
            width:100%;
            padding: 5px;
            transition: 0.5s all;
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                span:last-of-type{
                    color:$black;
                }
            }
        }
        li:first-of-type{
            border-right: none !important;
            border-left: none !important;
            background-color: $sub_main_color;
            span{
                color:white;
            }
        }
        li:not(:first-of-type){
            a {
                &::before {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    width: 0%;
                    height: 2px;
                    background-color: $main_color;
                    transition: 0.5s all;
                }
            }
        }
        li:not(:first-of-type):hover{
            span{
                color:$main_color;
            }
        }
        li:not(:first-of-type) a:hover::before{
            width: 100%;
        }
        li.active{
            padding: 0px;
            a{
                color:$main_color;
                span{
                    color:$main_color;
                }
                &::before{
                    width: 100%;
                }
            }
        }
    }
}
.profile-nav-line{
    margin: 0px;
}

.ar{
    .profile-nav{
        ul{
            li{
                span:first-of-type{
                    margin-left: 4px;
                }
            }
            li{
                border-right: 1px solid #dddddd;
            }
        }
    }
}

.en{
    .profile-nav{
        ul{
            li{
                span:first-of-type{
                    margin-right: 4px;
                }
            }
            li{
                border-left: 1px solid #dddddd;
            }
        }
    }
}
@media (min-width:768px) and (max-width: 1000px){
    .profile-nav{
        ul{
            li{
                span:last-of-type{
                    font-size: $small;
                }
            }
        }
    }
}
@media (max-width:767px) {
    .profile-nav ul li span:last-of-type{
        display: none;
    }
    .profile-nav ul li:first-of-type{
        display: none !important;
        span:first-of-type{
            display: none;
        }
        span:last-of-type{
            display: block;
        }
    }
    .profile-nav ul li.active a::before{
        bottom:-5px;
    }
}
</style>
