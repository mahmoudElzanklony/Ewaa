<template>
    <section class="feedback">
        <navbar-component></navbar-component>
        <div class="container mt-3 mb-3">
            <h2 class="d-flex align-items-center mb-4 main-title">
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                <span>{{ keywords.do_you_have_problem_using_our_website }}</span>
            </h2>
            <form>
                <div class="form-group">
                    <label>{{ keywords.your_name }}</label>
                    <input class="form-control" name="name" required>
                </div>
                <div class="form-group">
                    <label>{{ keywords.your_email }}</label>
                    <input class="form-control" name="email" required>
                </div>
                <div class="form-group">
                    <label>{{ keywords.describe_the_problem_that_you_are_facing }}</label>
                    <textarea name="message" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" :value="keywords.send">
                </div>
            </form>

        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "feedback",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style scoped>

</style>
