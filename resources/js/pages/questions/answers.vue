<template>
    <section class="answers">
        <navbar-component></navbar-component>
        <div class="pages mt-4 mb-4">
            <div class="container">
                <inertia-link href="/ask-neighbours?question_type=all">{{ keywords.ask_your_neighbors }}</inertia-link>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <inertia-link :href="'/ask-neighbours?question_type=all&city_id='+data['question']['area']['city']['id']">
                    {{ data['question']['area']['city'][$page.props.lang+'_name'] }}
                </inertia-link>
                <span v-if="$page.props.lang == 'ar'">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span v-else>
                    <i class="ri-arrow-right-s-line"></i>
                </span>
                <inertia-link :href="'/ask-neighbours?question_type=all&area_id='+data['question']['area']['id']">
                    {{ data['question']['area'][$page.props.lang+'_name'] }}
                </inertia-link>

            </div>
        </div>

        <div class="container">


            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="input-has-delete">
                        <span
                            v-if="($page.props.user != null &&
                                    ($page.props.user.id ==data['question']['user_id'] || $page.props.user.role_id == 5) )">
                                    <i class="ri-close-line"
                                       @click="
                                       delete_item('discussion-questions',data['question']['id'],'',false,'/ask-neighbours?question_type=all')"></i></span>
                        <h2 class="d-flex align-items-center mb-4 main-title">
                            <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                            <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                            <span>
                            {{ data['question']['question'] }}
                        </span>
                        </h2>
                        <p class="user_info d-flex justify-content-between flex-wrap">
                        <span class="d-block w-100">
                            {{ data['question']['user']['username'] }}
                        </span>
                            <span>
                            {{ new Date(data['question']['created_at']).toLocaleDateString() }}
                        </span>
                            <span>
                            <inertia-link :href="'/ask-neighbours?question_type=all&area_id='+data['question']['area']['id']">
                    {{ data['question']['area'][$page.props.lang+'_name'] }}
                </inertia-link>
                            <inertia-link
                                :href="'/ask-neighbours?question_type=all&city_id='+data['question']['area']['city']['id']">
                    {{ data['question']['area']['city'][$page.props.lang+'_name'] }}
                </inertia-link>
                        </span>
                        </p>
                    </div>
                    <div class="question_answer_data">
                        <div class="d-flex align-items-center justify-content-between mt-3">
                            <p class="d-flex align-items-center" style="visibility: hidden"
                               v-if="$page.props.user != null">
                                <span><i class="ri-user-line"></i></span>
                                <span class="cursor-pointer" @click="follow_toggle">{{ keywords.follow }}</span>
                            </p>
                            <p class="d-flex align-items-center">
                                <span><i class="ri-share-line"></i></span>
                                <span class="cursor-pointer" data-toggle="modal" data-target="#share_answer">{{ keywords.share }}</span>
                                <span v-if="$page.props.user != null"><i class="ri-reply-line"></i></span>
                                <span v-if="$page.props.user != null" class="cursor-pointer" @click="goToBottom">{{ keywords.reply }}</span>
                            </p>
                        </div>
                        <p class="d-flex align-items-center justify-content-between">
                            <span>
                                {{ data['answers'].length }} {{ keywords.answer }}
                            </span>
                            <span>
                                <i class="ri-arrow-down-s-line" @click="toggleAnswers"></i>
                            </span>
                        </p>
                        <div class="all_answers">
                            <div :class="'answer input-has-delete ans'+i['id']" v-for="(i,index) in data['answers']" :key="index">
                                <span
                                    v-if="($page.props.user != null &&
                                    ($page.props.user.id == i['user']['id'] || $page.props.user.role_id == 5) )">
                                    <i class="ri-close-line"
                                       @click="delete_item('discussion-answers',i['id'],'.ans'+i['id'])"></i></span>
                                <div class="image d-flex align-items-center justify-content-between">
                                    <img :src="'/images/users/'+i['user']['image']">
                                    <div>
                                        <p>
                                            {{ i['user']['username'] }}
                                        </p>
                                        <p>
                                            {{ new Date(i['created_at']).toLocaleDateString() }}
                                        </p>
                                    </div>
                                </div>
                             <p>{{ i['answer'] }}</p>
                             <p v-if="$page.props.user != null">
                                <span class="cursor-pointer">
                                    <i @click="like_dislike_answer(i['id'])"
                                       v-if="i['reactions'].find((e)=>{
                return e['type'] == 'like' && e['user_id'] == $page.props.user.id &&  e['answer_id'] == i['id']
            })"
                                       value="like" class="ri-thumb-up-fill"></i>
                                    <i @click="like_dislike_answer(i['id'])"
                                       v-else
                                       value="like" class="ri-thumb-up-line"></i>
                                </span>
                                <span>
                                    {{ i['reactions'].filter((e)=>{return e['type'] == 'like' && e['answer_id'] == i['id']}).length }}
                                </span>
                                <span class="cursor-pointer">
                                    <i @click="like_dislike_answer(i['id'])"
                                       v-if="i['reactions'].find((e)=>{
                return e['type'] == 'dislike' && e['user_id'] == $page.props.user.id &&  e['answer_id'] == i['id']
            })"

                                       value="dislike" class="ri-thumb-down-fill"></i>
                                    <i @click="like_dislike_answer(i['id'])"
                                       v-else
                                       value="dislike" class="ri-thumb-down-line"></i>
                                </span>
                                <span>
                                    {{ i['reactions'].filter((e)=>{
                                    return e['type'] == 'dislike' && e['answer_id'] == i['id']
                                }).length }}
                                </span>
                            </p>
                            </div>
                        </div>
                        <form v-if="$page.props.user != null" @submit.prevent="add_answer">
                            <input type="hidden" name="question_id" :value="data['question']['id']">
                            <div class="form-group">
                                <label>{{ keywords.reply }}</label>
                                <textarea name="answer" class="form-control" required></textarea>
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
                            <li v-for="(i,index) in data['similar_listings']" :key="index">
                                <inertia-link :href="'/listing/details?id='+i['id']">{{ i['name'] }}</inertia-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <share-link-box-component id="share_answer" :link="current_url"></share-link-box-component>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ShareLinkBoxComponent from "../../components/ShareLinkBoxComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import {mapMutations , mapActions , mapGetters} from "vuex";
export default {
    name: "answers",
    props:['keywords','data'],
    mixins:[SwitchLangWord,delete_item],
    data:function(){
        return {
            current_url:document.URL
        }
    },
    methods:{
        ...mapActions({
           'react':'answer_reactions/react_answer',
            'add_answer':'answer/add_answer'
        }),

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
        like_dislike_answer:function (answer_id){
            var target = $(event.target);
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
            this.react({id:answer_id,type:target.attr('value')});
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
            >span{
                transition: 0.5s all;
                &:hover{
                    color:$main_color;
                }
            }
            >span:nth-of-type(2){
                margin-right: 5px;
            }
            >span.active{
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
