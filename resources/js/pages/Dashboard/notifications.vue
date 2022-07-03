<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content notifications">
            <div class="container mt-4 mb-4">
                <div class="outer-notification">
                    <p>
                        <span>{{  keywords.notifications }}</span>
                        <span>4</span>
                    </p>
                    <div class="inner">
                        <div class="notification d-flex align-items-center justify-content-between"
                             v-for="i in 7" :key="i"
                        >
                            <div class="data d-flex align-items-center">
                                <img src="/images/users/one.jpg">
                                <div class="text">
                                    <p>
                                        <strong>الأدارة</strong>
                                    </p>
                                    <p>لقد تمت الموافقة علي طلب اعلانك</p>
                                </div>
                            </div>
                            <p class="d-flex align-items-center">
                                <span>12/05/2020</span>
                                <span><i class="ri-calendar-2-line"></i></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
export default {
    name: "notifications",
    props:['keywords'],
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.notifications{
    .outer-notification{
        border: 1px solid #ddd;
        border-radius: 8px;
        >p{
            display: flex;
            align-items: center;
            padding: 6px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            span{
                font-size: $semi_big;
            }
            span:first-of-type{
                margin-left: 5px;
            }
            span:last-of-type{
                width: 30px;
                height: 30px;
                border-radius: 10px;
                color: white;
                background-color: $main_color;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
        }
        .inner{
            .notification:nth-child(odd){
                background-color: #ff6a150f;
            }
            .notification{
                border-bottom: 1px solid #dddddd;
                padding: 8px;
                >div{
                    img{
                        border: 1px solid #eee;
                        border-radius: 8px;
                        width: 60px;
                        height: 60px;
                        margin-left: 7px;
                    }
                    p{
                        margin-bottom: 3px;
                    }
                }
                >p{
                    span:first-of-type{
                        color:$black;
                    }
                    span:last-of-type{
                        color:$dark_gray;
                        position: relative;
                        top:1px
                    }
                }
            }
        }
    }
}
</style>
