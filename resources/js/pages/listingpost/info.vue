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
            <form>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.title_in_english }}</label>
                            <input name="title_in_english" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.description_in_english }}</label>
                            <textarea name="description_in_english" class="form-control" required></textarea>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.title_in_arabic }}</label>
                            <input name="title_in_arabic" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.description_in_arabic }}</label>
                            <textarea name="description_in_arabic" class="form-control" required></textarea>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.youtube_video_url }}</label>
                            <input name="youtube_video_url" class="form-control" required>
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
                                <inertia-link href="#">{{ keywords.my_account }}</inertia-link>
                            </p>
                            <input name="phone_number" class="form-control fit-content-input"
                                   value="01003123123123"
                                   disabled required>
                            <div class="what_app_status">
                                <span><i class="ri-whatsapp-line"></i></span>
                                <span>{{ keywords.this_number_has_whatsapp }}</span>
                                <input type="checkbox" class="toggle-checkbox-status">
                            </div>
                            <div class="mt-3 d-flex align-items-center">
                                <input type="checkbox" name="contact_me_by_email_status">
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
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.size_in_meters }}</label>
                                <input class="form-control" type="number" name="size_in_meters" required>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.view }}</label>
                                <select class="form-control" name="view" required>
                                    <option value="">{{  keywords.select_view }}</option>
                                </select>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.price_egp }}</label>
                                <input type="number" class="form-control" name="price_egp" required>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.payment_method }}</label>
                                <select class="form-control" name="payment_method" required>
                                    <option value="">{{  keywords.payment_method }}</option>
                                    <option value="cash">{{  keywords.cash }}</option>
                                    <option value="installments">{{  keywords.installments }}</option>
                                    <option value="cash_or_installments">{{  keywords.cash_or_installments }}</option>
                                </select>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.rooms }}</label>
                                <input type="number" class="form-control" name="rooms" required>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.floor }}</label>
                                <input type="number" class="form-control" name="floor" required>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.bathrooms }}</label>
                                <input type="number" class="form-control" name="bathrooms" required>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.building_year }}</label>
                                <input type="number" class="form-control" name="building_year" required>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <label>{{ keywords.finishing_type }}</label>
                                <select class="form-control" name="finishing_type" required>
                                    <option value="super_lux">{{  keywords.super_lux }}</option>
                                    <option value="extra_super_lux">{{  keywords.extra_super_lux }}</option>
                                    <option value="lux">{{  keywords.lux }}</option>
                                    <option value="semi_finished">{{  keywords.semi_finished }}</option>
                                    <option value="without_finish">{{  keywords.without_finish }}</option>
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
                        <label>{{ keywords.property_address }}</label>
                        <input  class="form-control" name="property_address" required>
                    </div>

                </div>
                <div id="map"></div>
                <div class="text-center mt-3 mb-3">
                    <input @click="next_step" type="button" class="btn btn-primary" :value="keywords.next">
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

export default {
    name: "info",
    props: ['keywords'],
    components: {FooterComponent, NavbarComponent},
    mounted:function (){

    },
    methods: {
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
</style>
