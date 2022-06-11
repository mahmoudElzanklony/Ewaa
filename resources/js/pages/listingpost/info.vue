<template>
    <section>
        <navbar-component></navbar-component>
        <div className="container mt-4 mb-6">
            <h2 className="d-flex align-items-center mb-4">
                <span><i className="ri-arrow-left-s-fill"></i></span>
                <span>{{ keywords.list_property }}</span>
            </h2>
            <div className="progress-form">
                <span className="active"><i className="ri-check-line"></i></span>
                <p>{{ keywords.listing_data }}</p>
                <span className="active"><i className="ri-check-line"></i></span>
                <p>{{ keywords.listing_info }}</p>
                <span><i className="ri-check-line"></i></span>
                <p>{{ keywords.listing_images }}</p>
                <span><i className="ri-check-line"></i></span>
            </div>
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>{{ keywords.listing_type }}</label>
                            <select name="listing_type" className="form-control" required>
                                <option value="">{{ keywords.choose_property_type }}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>{{ keywords.listing_section }}</label>
                            <select name="listing_type" className="form-control" required>
                                <option value="sale">{{ keywords.sale }}</option>
                                <option value="rent">{{ keywords.rent }}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>{{ keywords.location }}</label>
                                    <select name="location" className="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <p></p>
                                    <select name="location" className="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <p></p>
                                    <select name="location" className="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <p></p>
                                    <select name="location" className="form-control" required>
                                        <option value="">{{ keywords.select_location }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
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
    props: ['keywords'],
    components: {FooterComponent, NavbarComponent},
    methods: {
        next_step: function () {
            this.$inertia.visit('/listing/info');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

h2 {
    span:first-of-type {
        color: $main_color;
        margin-left: 6px;
        position: relative;
        top: 2px;
    }
}


</style>
