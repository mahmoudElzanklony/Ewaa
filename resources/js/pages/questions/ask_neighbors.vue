<template>
    <section class="ask_neighbors">
        <navbar-component></navbar-component>
        <div class="container mb-4 mt-4">
            <div class="row">
                <div :class="$page.props.user == null ? 'col-md-12':'col-md-6' +' col-12'">
                    <h2 class="d-flex align-items-center mb-4 main-title">
                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                        <span>{{ keywords.the_most_discussed_questions }}</span>
                    </h2>
                    <form class="mb-2">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="form-group">
                                    <select class="form-control" name="city_id" @change="update_area">
                                        <option value="">{{ keywords.city }}</option>
                                        <option v-for="(c,index) in map_data('city_id')" :key="index"
                                                :value="c['id']" :selected="requested_data != null && requested_data.hasOwnProperty('city_id') && requested_data['city_id'] == c['id']">
                                            {{ c[$page.props.lang+'_name'] }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="form-group">
                                    <select class="form-control" name="area_id">
                                        <option value="">{{ keywords.neighbour }}</option>
                                        <option v-for="(c,index) in map_data('area_id')" :key="index"
                                                :value="c['id']" :selected="requested_data != null && requested_data.hasOwnProperty('area_id') && requested_data['area_id'] == c['id']">
                                            {{ c['name'] }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="form-group">
                                    <select class="form-control" name="category_id">
                                        <option value="all">{{ keywords.all_categories }}</option>
                                        <option v-for="(c,index) in categories" :key="index"
                                                :value="c['id']" :selected="requested_data != null && requested_data.hasOwnProperty('category_id') && requested_data['category_id'] == c['id']">
                                            {{ c['name'] }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <input type="submit" class="btn btn-primary w-100"
                                        :value="switchWord('filter')">
                            </div>
                        </div>
                    </form>
                    <ul class="questions_types d-flex align-items-center justify-content-between">
                        <li class="active">
                            <inertia-link href=""  @click.prevent="change_question_type"
                                          value_type="has_answers">{{ keywords.the_most_discussed }}</inertia-link>
                        </li>
                        <li>
                            <inertia-link href=""  @click.prevent="change_question_type"
                                          value_type="has_not_answers" >{{ keywords.unanswered }}</inertia-link>
                        </li>
                        <li>
                            <inertia-link  href=""  @click.prevent="change_question_type"
                                           value_type="all" >{{ keywords.all_questions }}</inertia-link>
                        </li>
                    </ul>
                    <div class="questions">
                        <div class="question p-2" v-for="(i,index) in questions_info_data.data" :key="index">
                            <p>{{ i['question'] }}</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <p>
                                    <inertia-link :href="'/ask-neighbours?question_type=all&area_id='+i['area']['id']">
                                        <span>{{ i['area'][$page.props.lang+'_name'] }}</span>
                                    </inertia-link>
                                    <span>{{ keywords.in }}</span>
                                    <inertia-link :href="'/ask-neighbours?question_type=all&city_id='+i['area']['city']['id']">
                                        <span>{{ i['area']['city'][$page.props.lang+'_name'] }}</span>
                                    </inertia-link>
                                </p>
                                <p>
                                    <inertia-link :href="'/ask-neighbours/'+i['id']+'/answers'">
                                        <span>{{ i['answers_count'] }} {{ keywords.answers }}</span>
                                    </inertia-link>
                                </p>
                            </div>
                        </div>
                        <div class="pages text-center mt-4 mb-2">
                            <inertia-link :href="current_url+'&page='+(index+1)" v-for="(i,index) in links" :key="index" :class="index + 1 == questions_info_data.current_page ? 'active':''">
                                {{ index + 1 }}
                            </inertia-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 ask_your_neighbors" v-if="$page.props.user != null">
                    <h2 class="d-flex align-items-center mb-2 main-title">
                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                        <span>{{ keywords.ask_your_neighbors }}</span>
                    </h2>
                    <p class="mb-2">{{ keywords.write_your_question_and_get_answers_from_the_community }}</p>
                    <form method="post" @submit.prevent="add_question">
                        <div class="mb-4 row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="form-group">
                                    <select class="form-control" name="city_id" required @change="update_area">
                                        <option value="">{{ keywords.city }}</option>
                                        <option v-for="(c,index) in map_data('city_id')" :key="index" :value="c['id']">
                                            {{ c[$page.props.lang+'_name'] }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="form-group">
                                    <select class="form-control" name="area_id" required>
                                        <option value="">{{ keywords.neighbour }}</option>
                                        <option v-for="(c,index) in map_data('area_id')" :key="index" :value="c['id']">
                                            {{ c['name'] }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="form-group">
                                    <select class="form-control" name="category_id">
                                        <option value="">{{ keywords.all_categories }}</option>
                                        <option v-for="(c,index) in categories" :key="index" :value="c['id']">
                                            {{ c['name'] }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 mt-2">
                                <textarea class="form-control mb-2"
                                          name="question"
                                          :placeholder="keywords.ask_a_question_and_get_answers_from_neighbors"></textarea>
                                <input class="btn btn-primary" type="submit" :value="keywords.add_question">
                            </div>
                        </div>
                        <p>
                            <inertia-link :href="'/ask-neighbours?question_type=all&user_id='+$page.props.user.id">
                                {{ switchWord('press_here_to_show_my_discussions') }}
                            </inertia-link>
                        </p>
                    </form>
                </div>
            </div>
            <sale-rent-component :data="cities_listings" :country="country"></sale-rent-component>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SaleRentComponent from "../../components/SaleRentComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions , mapMutations , mapGetters} from  "vuex";
export default {
    name: "ask_neighbors",
    props:['keywords','cities','categories','questions','requested_data','cities_listings','country'],
    mixins:[SwitchLangWord],
    components: {SaleRentComponent, FooterComponent, NavbarComponent},
    data:function(){
        return {
            question_type:'',
            current_url:document.URL,
            links : [],
            has_parameter:document.URL.indexOf('?') > 0 ? true:false
        }
    },
    computed:{
        ...mapGetters({
            'map_data':'countries_govenrn_cities_areas/get_items_data',
            'questions_info_data':'discussions_questions/get_data',
        })
    },
    methods:{
        ...mapMutations({
            'inilaize_cities':'countries_govenrn_cities_areas/inialize_items',
            'inilaize_questions':'discussions_questions/inialize_items',
        }),
        ...mapActions({
            'get_next_map_type':'countries_govenrn_cities_areas/get_next_map_type_from_previous_value',
            'add_question':'discussions_questions/save_question',
        }),
        update_area:function(){
            var data = {
                name:'areas',
                where:'city_id',
                value:event.target.value,
            };
            this.get_next_map_type(data);
        },
        get_active_question_type:function(){
            // get question type
            if(document.URL.indexOf('has_answers') > 0){
                this.question_type = 0;
            }else if(document.URL.indexOf('has_not_answers') > 0){
                this.question_type = 1;
            }else{
                this.question_type = 2;
            }
            $('.questions_types li').removeClass('active');
            $('.questions_types li').eq(this.question_type).addClass('active');
        },
        change_question_type:function(){
            var type = event.target.getAttribute('value_type');
            if(this.current_url.indexOf('?') > 0){
                // check if question_type is at url
                if(this.current_url.indexOf('question_type') > 0){
                    var split_url = document.URL.split('question_type=');
                    var split_second_url = split_url[1].split('&');
                    var output =  split_url[0] + 'question_type='+type;
                    if(split_second_url[1] != undefined){
                        output+= '&'+split_second_url[1];
                    }
                    this.$inertia.visit(output);
                }else{
                    // not found
                    this.$inertia.visit(this.current_url+'&question_type='+type);
                }
            }else{
                // this is first parameter request
                this.$inertia.visit(this.current_url+'?question_type='+type);
            }
        }
    },
    created() {
        // inilaize questions
        this.inilaize_questions(this.questions);
        // inilzie cities
        this.inilaize_cities({name:'cities',value:this.cities});
        // check if i has city_id from url ==> go and get areas
        if(this.requested_data != null && this.requested_data.hasOwnProperty('city_id')){
            var data = {
                name:'areas',
                where:'city_id',
                value:this.requested_data['city_id'],
            };
            this.get_next_map_type(data);
        }
        // check links
        this.links = this.questions_info_data.links;
        if(this.links.length >= 3){
            this.links.pop();
            this.links.shift();
        }
        // remove page from url
        if(document.URL.indexOf('&page') > 0) {
            this.current_url = document.URL.substring(0, document.URL.indexOf('&page'))
        }else{
            this.current_url = document.URL;
        }

        // check if url has nothing as parameters
        if(document.URL.split('/')[document.URL.split('/').length - 1]== 'ask-neighbours'){
            this.current_url = document.URL+'?city_id=&area_id=&category_id=all';
        }
    },
    mounted() {
        this.get_active_question_type();
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.ask_your_neighbors{
    >p{
        color:$gray;
    }
}
.questions_types{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 5px;
    li{
        a{
            color:$dark_gray;
        }
        position: relative;
        transition: 0.5s all;
        &::before{
            content: '';
            width: 0px;
            height: 2px;
            background-color: $main_color;
            position: absolute;
            bottom: -6.5px;
            transition: 0.5s all;
        }
        &:hover::before{
            width:100%;
        }
        &:hover a{
            color:$main_color;
        }
    }
    li.active{
        a{
            color:$main_color;
        }
        &::before{
            width:100%;
        }
    }
}
.questions{
    .question{
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        p{
            color:$dark_gray;
            margin-bottom: 5px;
        }
    }
}
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
</style>
