<template>
    <section class="about_us">
        <navbar-component></navbar-component>
        <div class="container mt-4">
            <h2 class="d-flex align-items-center mb-4 main-title">
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                <span>{{ keywords.terms }}</span>
            </h2>
            <p>نص كتابة عن الاحكام والشروط الخاصة بالموقع</p>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "terms",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style scoped>

</style>
