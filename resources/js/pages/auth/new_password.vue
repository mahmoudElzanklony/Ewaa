<template>
    <section class="forget_password">
        <navbar-component></navbar-component>

        <div class="auth mt-5 mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form method="post" @submit.prevent="new_pass">
                            <input type="hidden" name="email" :value="email">
                            <h2 class="mb-4">{{ keywords.make_new_password }}</h2>
                            <div class="form-group">
                                <label>{{ keywords.password }}</label>
                                <input name="password" type="password" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.password_confirmed }}</label>
                                <input name="password_confirmation" type="password" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="keywords.save">
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="image">
                            <div class="layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import {mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "new_password",
    props:['keywords','email'],
    components: {FooterComponent, NavbarComponent},
    methods:{
        ...mapActions({
            'new_pass':'reset_password/reset_pass'
        })
    }
}
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";
.alert-danger{
    display: none;
}
.image {
    background-image: url("/images/auth/register.jpg");
    height: 100%;
    background-size: cover;
    background-position: bottom;
    border-radius: 5px;
    overflow: hidden;
    .layer{
        background-color: #ff6a1529;
        width: 100%;
        height: 100%;
    }
}
</style>
