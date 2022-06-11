<template>
    <section>
        <navbar-component></navbar-component>
        <div class="container mt-4 mb-6">
            <h2 class="d-flex align-items-center mb-4">
                <span><i class="ri-arrow-left-s-fill"></i></span>
                <span>{{ keywords.list_property }}</span>
            </h2>
            <div class="progress-form">
                <span class="active"><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_data }}</p>
                <span><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_info }}</p>
                <span><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_images }}</p>
                <span><i class="ri-check-line"></i></span>
            </div>
            <form>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>{{ keywords.listing_type }}</label>
                            <select name="listing_type" class="form-control" required>
                                <option value="">{{ keywords.choose_property_type }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>{{ keywords.listing_section }}</label>
                            <select name="listing_type" class="form-control" required>
                                <option value="sale">{{ keywords.sale }}</option>
                                <option value="rent">{{ keywords.rent }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>{{ keywords.location }}</label>
                                    <select name="location" class="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <p></p>
                                    <select name="location" class="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <p></p>
                                    <select name="location" class="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <p></p>
                                    <select name="location" class="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <input @click="next_step" type="button" class="btn btn-primary" :value="keywords.next">
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
    name: "initialize",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent},
    methods:{
        next_step:function (){
            this.$inertia.visit('/listing/info');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
h2{
    span:first-of-type{
        color:$main_color;
        margin-left: 6px;
        position: relative;
        top:2px;
    }
}

@media (min-width: 567px) {
    form{
        >div.row{
            >div:last-of-type{
                .row{
                    >div:not(:first-of-type){
                        p{
                            margin-bottom: 32px;
                        }
                    }
                }
            }
        }
    }
}
</style>
