<template>
    <section class="answers">
        <navbar-component></navbar-component>
        <div class="pages mt-4 mb-4">
            <div class="container">
                <span>{{ keywords.egypt_properties }}</span>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <span>{{ keywords.ask_your_neighbors }}</span>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <span>القاهرة الجديدة</span>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <span class="active">التجمع</span>

            </div>
        </div>
        <div class="container">


            <div class="row">
                <div class="col-md-6 col-12">
                    <h2 class="d-flex align-items-center mb-4 main-title">
                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                        <span>افضل اماكن وكمبوندات للسكن فى التجمع الخامس</span>
                    </h2>
                    <p class="user_info d-flex justify-content-between flex-wrap">
                        <span class="d-block w-100">Amira mohamed</span>
                        <span>12/20/2022</span>
                        <span>
                            <inertia-link href="#">الموقع , </inertia-link>
                            <inertia-link href="#">القاهرة</inertia-link>
                        </span>
                    </p>
                    <div class="question_answer_data">
                        <div class="d-flex align-items-center justify-content-between mt-3">
                            <p class="d-flex align-items-center">
                                <span><i class="ri-user-line"></i></span>
                                <span class="cursor-pointer" @click="follow_toggle">{{ keywords.follow }}</span>
                            </p>
                            <p class="d-flex align-items-center">
                                <span><i class="ri-share-line"></i></span>
                                <span class="cursor-pointer" data-toggle="modal" data-target="#share_answer">{{ keywords.share }}</span>
                                <span><i class="ri-reply-line"></i></span>
                                <span class="cursor-pointer" @click="goToBottom">{{ keywords.reply }}</span>
                            </p>
                        </div>
                        <p class="d-flex align-items-center justify-content-between">
                            <span>
                                66 {{ keywords.answer }}
                            </span>
                            <span>
                                <i class="ri-arrow-down-s-line" @click="toggleAnswers"></i>
                            </span>
                        </p>
                        <div class="all_answers">
                            <div class="answer" v-for="i in 5" :key="i">
                            <div class="image d-flex align-items-center justify-content-between">
                                <img src="/images/users/one.jpg">
                                <div>
                                    <p>احمد عكاشة</p>
                                    <p>12/20/2022</p>
                                </div>
                            </div>
                            <p>عقارات مصر
                                اسأل أهل منطقة
                                أهلا . أميرة موسى ، لقد قمت بمحاولة شراء فيلا أو أرض في الموقع المشار إليه وللأسف إليك ما وصلت إليه من نتيجة :- 1- كل المطورين العقاريين بيكرروا نفس الإسطوانة عند محاولة البيع والتسويق. 2- البعض منهم أكثر إحترافا ليس بالمعنى المقصود في لاتسويق والبيع ولكن في الضحك على العميل. 3. في الخلاصة ... إطلب من البائع أو المطور العقاري يصور لك الحياة اليومية بالفيديو في أي يوم فجأءة وخلي عندك إصرار في الطلب الغريب ده بس واقعي جدا وسهل جدا . 4. لو إترفض طلبك - زي ما حصل معايا - إرفض التحدث مع هذه الشركة نهائيا وشوف غيرها ومضيعشي وقتك معاهم وهكذا لحد ما حد يرضى يصور لك الموقع على الطبيعة في لوقت اللي أنت تختاره وبعدها روح تعاقد على الشقة أو الأرض اللي تعجبك.</p>
                            <p>
                                <span class="cursor-pointer">
                                    <i @click="like_dislike_answer" value="like" class="ri-thumb-up-line"></i>
                                </span>
                                <span>2</span>
                                <span class="cursor-pointer">
                                    <i @click="like_dislike_answer" value="dislike" class="ri-thumb-down-line"></i>
                                </span>
                                <span>0</span>
                            </p>
                        </div>
                        </div>
                        <form>
                            <div class="form-group">
                                <label>{{ keywords.reply }}</label>
                                <textarea name="reply" class="form-control" required></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit"
                                       class="btn btn-primary d-block w-100" :value="keywords.send">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="interesting">
                        <h2 class="d-flex align-items-center mb-4 main-title">
                            <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                            <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                            <span>{{ keywords.properties_you_may_be_interested_in }}</span>
                        </h2>
                        <ul class="d-flex flex-wrap">
                            <li v-for="i in 6" :key="i">
                                <inertia-link href="#">القاهرة</inertia-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <share-link-box-component id="share_answer" link="google.com"></share-link-box-component>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ShareLinkBoxComponent from "../../components/ShareLinkBoxComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
export default {
    name: "answers",
    props:['keywords'],
    mixins:[SwitchLangWord],
    methods:{
        goToBottom:function (){
            var body = document.body,
                html = document.documentElement;

            var height = Math.max( body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight );

            $('html,body').animate({
                scrollTop:parseInt(height) -
                    (parseInt(document.querySelector('footer').clientHeight)+200)
            },1000);


        },
        follow_toggle:function (){

        },
        like_dislike_answer:function (){
            var target = $(event.target);
            console.log(target.attr('value'));
            if(target.attr('value') == 'like'){
                // check if make like before
                if(target.hasClass('ri-thumb-up-fill')){
                    // yes i like it before
                    target.removeClass('ri-thumb-up-fill').addClass('ri-thumb-up-line');
                    target.parent().next().html(parseInt(target.parent().next().html()) - 1);
                }else{
                    // no i dont like it
                    // check if you make dislike before
                    if(target.parent().next().next().find('i').hasClass('ri-thumb-down-fill')){
                        // remove dislike
                        target.parent().next().next().find('i')
                            .removeClass('ri-thumb-down-fill').addClass('ri-thumb-down-line');
                        // minus dislike number
                        target.parent().next().next().next().html(parseInt(target.parent().next().next().next().html()) - 1);
                    }
                    target.removeClass('ri-thumb-up-line').addClass('ri-thumb-up-fill');
                    target.parent().next().html(parseInt(target.parent().next().html()) + 1);
                }

            }else{
                // i dislike this
                if(target.hasClass('ri-thumb-down-fill')){
                    // yes i dislike it before
                    target.removeClass('ri-thumb-down-fill').addClass('ri-thumb-down-line');
                    target.parent().next().html(parseInt(target.parent().next().html())  - 1);
                }else{
                    // no i dont dislike it
                    // check if you made like before
                    if(target.parent().prev().prev().find('i').hasClass('ri-thumb-up-fill')){
                        // remove like
                        target.parent().prev().prev().find('i')
                            .removeClass('ri-thumb-up-fill').addClass('ri-thumb-up-line');
                        // minus like number
                        target.parent().prev().html(parseInt(target.parent().prev().html()) - 1);
                    }
                    target.removeClass('ri-thumb-down-line').addClass('ri-thumb-down-fill');
                    target.parent().next().html(parseInt(target.parent().next().html()) + 1);
                }
            }
        },
        toggleAnswers:function (){
            if($(event.target).hasClass('ri-arrow-down-s-line')){
                $(event.target).removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
            }else{
                $(event.target).removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line')
            }
            $(event.target).parent().parent().next().slideToggle();
        },
    },
    components: {ShareLinkBoxComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.user_info{
    span:first-of-type{

    }
    span:last-of-type{

    }
    a{
        color:$main_color;
    }
}

.question_answer_data{
    >div{
        p{
            span:first-of-type,span:nth-of-type(3){
                color:$main_color;
                margin-left: 3px;
            }
            span:nth-of-type(3){
                margin-right: 10px;
            }
        }
    }
    >p{
        margin-bottom: 10px;
        margin-top: 10px;
        border-top: 1px solid #ddd;
        padding-top: 10px;
        font-size: $semi_big;
        color:$dark_gray;
        span{
            font-weight: bold;
        }
    }
    .answer{
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 10px;
        .image{
            margin-bottom: 15px;
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 1px solid #eeeeee;
            }
            div{
                width: calc(100% - 60px);
                p:first-of-type{
                    font-weight: bold;
                }
            }
        }
        >p:first-of-type{
            color:$dark_gray;
            line-height:30px;
        }
        >p{
            margin-bottom: 10px;
        }
        p:last-of-type{
            display: flex;
            align-items: center;
            span{
                transition: 0.5s all;
                &:hover{
                    color:$main_color;
                }
            }
            span:nth-of-type(2){
                margin-right: 5px;
            }
            span.active{
                color:$main_color;
            }
        }
    }
}
.interesting{
    h2{
        span,i{
            font-size: $paragraph;
        }
    }
    ul{
        li{
            a{
                padding: 6px 10px;
                border: 1px solid $main_color;
                transition: 0.3s all;
                border-radius: 15px;
                &:hover{
                    color:white;
                    background-color: $main_color;
                }
            }
        }
    }
}
.ar{
    .interesting{
        ul{
            li{
                margin-left: 10px;
            }
        }
    }
}
.en{
    .interesting{
        ul{
            li{
                margin-right: 10px;
            }
        }
    }
}
</style>
