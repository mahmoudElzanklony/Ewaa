<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <profile-nav-component></profile-nav-component>
        <div class="container">
            <div class="row pt-4">
                <div class="col-lg-4" v-for="i in 5" :key="i">
                    <ListingPostComponent
                                          fav="true"
                                          compound="true"
                                          bed="2"
                                          baths="3"
                                          area="400"
                                          image="one.jpg"
                                          number_of_images="5"
                                          info="لاول مره في العاصمه الاداريه شقه بمقدم 0% واقساط"
                                          address="العاصمه الاداريه-الحي الثامن-كمبوند كارديا"
                                          price="500"
                    ></ListingPostComponent>
                </div>
            </div>
        </div>

        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import ListingPostComponent from "../../components/ListingPostComponent";
export default {
    name: "favourites",
    components: {ListingPostComponent, ProfileNavComponent, FooterComponent, NavbarComponent},
}
</script>

<style scoped>

</style>
