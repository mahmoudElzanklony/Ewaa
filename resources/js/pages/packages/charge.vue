<template>
    <section class="charge">
        <navbar-component></navbar-component>
        <div class="container mt-4 mb-4">
            <h2>{{ keywords.sell_rent_your_properties_faster_with_ewaa }}</h2>
            <p class="mb-4">{{ keywords.list_all_your_properties_to_be_viewed_by_thousands_of_potential_clients }}</p>
            <h2>{{ keywords.tell_us_who_you_are }}</h2>
            <p class="mb-4">{{ keywords.we_carefully_designed_packages_to_perfectly_fit_your_needs }}</p>
            <div class="row">
                <div class="col-md-4">
                    <div class="link">
                        <inertia-link href="/credit/charge/package">
                            <p class="text-center">{{ keywords.freelancer }}</p>
                            <img src="/images/gereral/broker.png">
                        </inertia-link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="link">
                        <inertia-link href="/credit/charge/package">
                            <p class="text-center">{{ keywords.brokerage_company }}</p>
                            <img src="/images/gereral/compound-developer.png">
                        </inertia-link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="link">
                        <inertia-link href="/credit/charge/package">
                            <p class="text-center">{{ keywords.compound_developer }}</p>
                            <img src="/images/gereral/small-developer.png">
                        </inertia-link>
                    </div>
                </div>
            </div>
        </div>
        <contact-us-component></contact-us-component>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ContactUsComponent from "../../components/ContactUsComponent";
export default {
    name: "charge",
    components: {ContactUsComponent, FooterComponent, NavbarComponent},
    props:['keywords'],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.link{
    box-shadow: 1px 1px 3px 3px #eee;
    border-radius: 10px;
    padding: 20px;
    p{
        color:$dark_gray;
    }
    img{
        height: 110px;
        display: block;
        margin: 10px auto;
    }
}
</style>
