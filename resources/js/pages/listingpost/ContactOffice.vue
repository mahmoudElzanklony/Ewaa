<template>
    <div class="contact-offices">
        <form>
            <div class="office d-flex
                                    align-items-center justify-content-between flex-wrap">
                <a :href="'tel:'+phone">
                    <span>
                        <i class="ri-phone-fill"></i>
                    </span>
                </a>
                <img :src="'/images/users/'+image">
                <div>
                    <p>{{ name }}</p>
<!--                    <p>{{ switchWord('registered_at_date') }}</p>-->
                    <p class="d-flex align-items-center">
                        <span><i class="ri-calendar-todo-line"></i></span>
                        <span>{{ date }}</span>
                    </p>
                </div>
                <div>
                    <p><strong>{{ number_of_listing }}</strong></p>
                    <p>{{ switchWord('ads') }}</p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "ContactOffice",
    props:['name','number_of_listing','date','image','phone'],
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.contact-offices{
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    padding-bottom: 10px;
    >p:first-of-type{
        font-weight: bold;
    }
    >p{
        margin-bottom: 10px;
    }
    .office{
        div:first-of-type{
            p:last-of-type{
                span:first-of-type{
                    color:$gray;
                }
            }
        }
    }
    form{
        .office:not(:last-of-type){
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        .office{
            input,a{
                width: 22px;
                height: 22px;
            }
            a{
                span{
                    color:$sub_main_color;
                    i{
                        position: relative;
                        top:-5px;
                        font-size: $semi_big;
                    }
                }
            }
            img{
                width: 50px;
                height: 50px;
                border-radius: 10px;
                border: 1px solid #ddd;
                padding: 2px;

            }
            div{
                p{
                    margin-bottom: 0px;
                }
                p:first-of-type{
                    color:$dark_gray;
                    strong{
                        color:$dark_gray;
                    }
                }
            }
        }
        input[type="submit"]{
            width:80%;
            margin: auto;
            display: block;
            margin-top: 20px;
            border-radius: 20px;
        }
    }
}


.ar{
    .office{
        div:last-of-type{
            p:first-of-type{
                text-align: left;
            }
        }
    }
}
.en{
    .office{
        div:last-of-type{
            p:first-of-type{
                text-align: right;
            }
        }
    }
}
</style>
