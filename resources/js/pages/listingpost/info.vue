<template>
    <section>

        <navbar-component></navbar-component>
        <div class="container mt-4 mb-6">
            <p class="alert alert-info">
                <span>{{ keywords.kindly_read_terms_and_instructions_of_adding_listings_on_ewaa }}</span>
                <inertia-link href="#">{{ keywords.here }}</inertia-link>
            </p>
            <h2 class="d-flex align-items-center mb-4 main-title">
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                <span>{{ keywords.list_property }}</span>
            </h2>
            <div class="progress-form">
                <span class="active"><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_data }}</p>
                <span class="active"><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_info }}</p>
                <span><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_images }}</p>
                <span><i class="ri-check-line"></i></span>
            </div>
            <form method="post" @submit.prevent="save_listing_info">
                <input type="hidden" name="coordinates" value="103123123,3123123123">


                <input v-if="listing_obj != null && listing_obj.hasOwnProperty('id')"
                       type="hidden" name="id" :value="listing_obj['id']">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.title_in_arabic }}</label>
                            <input name="ar_name" class="form-control"
                                   :value="listing_obj != null ? listing_obj['ar_name']:''"
                                   required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.description_in_arabic }}</label>
                            <textarea name="ar_info" class="form-control"
                                      :value="listing_obj != null ? listing_obj['ar_info']:''"
                                      required></textarea>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.title_in_english }}</label>
                            <input name="en_name" class="form-control"
                                   :value="listing_obj != null ? listing_obj['en_name']:''"
                                   required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.description_in_english }}</label>
                            <textarea name="en_info" class="form-control"
                                      :value="listing_obj != null ? listing_obj['en_info']:''"
                                      required></textarea>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.youtube_video_url }}</label>
                            <input name="youtube_link" class="form-control"
                                   :value="listing_obj != null ? listing_obj['youtube_link']:''"
                            >
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.size_in_meters }}</label>
                            <input class="form-control" type="number"
                                   :value="listing_obj != null ? listing_obj['meters_number']:''"
                                   name="meters_number" required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.price }}</label>
                            <input class="form-control" type="number"
                                   :value="listing_obj != null ? listing_obj['price']:''"
                                   name="price" required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.payment_types }}</label>
                            <select class="form-control" name="client_payment_status" required>
                                <option value="">{{ keywords.select_payment_type }}</option>
                                <option v-for="(type,index) in handeling_data['payment_client_option']"
                                        :key="index" :value="type"
                                        :selected="listing_obj != null && listing_obj['client_payment_status'] == type">
                                    {{ switchWord(type) }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-12">
                        <p class="alert alert-primary">
                            {{ keywords.advertiser_details }}
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.phone_number }}</label>
                            <p>
                                <span>{{ keywords.if_you_want_to_update_the_current_phone_number_please_go_to }}</span>
                                <inertia-link href="/profile/edit">{{ keywords.my_account }}</inertia-link>
                            </p>
                            <input name="phone_number" class="form-control fit-content-input"
                                   value="01003123123123"
                                   disabled required>
                            <div class="what_app_status">
                                <span><i class="ri-whatsapp-line"></i></span>
                                <span>{{ keywords.this_number_has_whatsapp }}</span>
                                <input type="checkbox" name="whatapp_status"
                                       :checked="listing_obj != null && listing_obj.hasOwnProperty('whatapp_status') && listing_obj['whatapp_status'] != null"
                                       class="toggle-checkbox-status">
                            </div>
                            <div class="mt-3 d-flex align-items-center">
                                <input type="checkbox"
                                       :checked="listing_obj != null && listing_obj.hasOwnProperty('contact_email_status') && listing_obj['contact_email_status'] != null"
                                       name="contact_email_status">
                                <span>{{ keywords.contact_me_by_email }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p class="alert alert-primary">
                            {{ keywords.property_details }}
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-6"
                                 v-for="(q,index) in get_questions" :key="index">
                                <label>{{ q.question[$page.props.lang+'_name'] }}</label>
                                <input v-if="q.question['answers'].length == 0 && q.question.type == 'text'"
                                       class="form-control" :name="'questions['+q['question_id']+']'"
                                       :value="[listing_obj != null && listing_obj['questions'].hasOwnProperty(q['question_id']) && listing_obj['questions'][q['question_id']] != null ? listing_obj['questions'][q['question_id']]:'','text']"
                                       :required="q.question['required_status'] == 1 ? true:false">


                                <input v-else-if="q.question['answers'].length == 0 && q.question.type == 'radio'"
                                       type="checkbox"
                                       class="form-control toggle-checkbox-status" :name="'questions['+q['question_id']+']'"
                                       :checked="listing_obj != null && listing_obj['questions'].hasOwnProperty(q['question_id']) && listing_obj['questions'][q['question_id']] != null"
                                       :value="[1,'checkbox']"
                                       >


                                <select v-else  class="form-control" :name="'questions['+q['question_id']+']'"
                                        :required="q.question['required_status'] == 1 ? true:false">
                                    <option v-for="(answer,index) in q.question['answers']"
                                            :selected="listing_obj != null && listing_obj['questions'].hasOwnProperty(q['question_id']) && listing_obj['questions'][q['question_id']] != null && listing_obj['questions'][q['question_id']] == answer['id']"
                                            :key="index" :value="[answer['id'],'select']">
                                        {{ answer[$page.props.lang+'_name'] }}
                                    </option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div class="col-12">
                        <p class="alert alert-primary">
                            {{ keywords.address }}
                        </p>
                    </div>
                    <div class="col-12">
                        <label>{{ keywords.property_address_arabic }}</label>
                        <input  class="form-control" name="ar_address"
                                :value="listing_obj != null && listing_obj.hasOwnProperty('ar_address') ? listing_obj['ar_address']:''"
                                required>
                    </div>
                    <div class="col-12">
                        <label>{{ keywords.property_address_english }}</label>
                        <input  class="form-control" name="en_address"
                                :value="listing_obj != null && listing_obj.hasOwnProperty('en_address') ? listing_obj['en_address']:''"
                                required>
                    </div>

                </div>
                <div id="map"></div>
                <div class="text-center mt-3 mb-3">
                    <input type="submit" class="btn btn-primary" :value="keywords.next">
                    <input @click="previous_step" type="button" class="btn btn-outline-primary" :value="keywords.previous">
                </div>

            </form>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapGetters , mapMutations , mapActions} from "vuex";
export default {
    name: "info",
    props: ['keywords','handeling_data'],
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent},
    data:function(){
        return {
            listing_obj: this.handeling_data['listing_info'],
        }
    },
    created(){
        // get questions of this category
        this.get_questions_where(this.listing_obj['category_id']);
    },
    mounted:function (){

    },
    computed:{
        ...mapGetters({
             'get_questions':'questions/get_questions_data',
        })
    },
    methods: {
        ...mapActions({
           'get_questions_where':'questions/get_questions_where',
           'save_listing_info':'listings/save_info_listing',
        }),
        next_step: function () {
            this.$inertia.visit('/listing/photos');
        },
        previous_step:function(){
            this.$inertia.visit('/listing/initialize');
        },
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-info{
    padding: 15px;
}

.fit-content-input{
    width: fit-content;
    margin-top: 10px;
    margin-bottom: 10px;
}
form{
    .what_app_status{
        display: flex;
        align-items: center;
        span:first-of-type{
            color:$sub_main_color;
            position: relative;
            top:2px;
        }
        span:last-of-type{
            margin-right: 8px;
            margin-left: 8px;
        }
    }
    input[name="contact_me_by_email_status"]{
        width: 16px;
        height: 16px;
        position: relative;
        top: 2px;
    }
    >div.row{
        .row{
            >div{
                margin-bottom: 10px;
            }
        }
    }

}
.ar{
    form{
        input[name="contact_me_by_email_status"]{
            margin-left: 10px;
        }
    }
}
.en{
    form{
        input[name="contact_me_by_email_status"]{
            margin-right: 10px;
        }
    }
}
.form-control.toggle-checkbox-status:focus{
    background-color: #ccc;
}
</style>
