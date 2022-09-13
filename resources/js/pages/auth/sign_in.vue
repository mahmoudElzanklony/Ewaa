<template>
    <div>
        <navbar-component></navbar-component>

        <div class="auth mt-5 mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form method="post" @submit.prevent="login">
                            <h2 class="mb-4">{{ keywords.sign_in }}</h2>
                            <div class="form-group">
                                <label>{{ keywords.email }}</label>
                                <input name="email" type="email" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group input-icon">
                                <label>{{ keywords.password }}</label>
                                <input name="password" type="password" class="form-control" required>
                                <span><i class="ri-eye-line show_password cursor-pointer"></i></span>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="keywords.sign_in">
                            </div>
                            <p class="text-center">
                                <inertia-link href="/forget-password">{{ keywords.forget_password }}</inertia-link>
                            </p>
                            <p class="text-center">
                                <span>{{ keywords.dont_have_account }} ? </span>
                                <inertia-link href="/register">{{ keywords.sign_up }}</inertia-link>
                            </p>
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
    </div>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import {mapActions,mapGetters} from "vuex";
export default {
    name: "sign_in",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent},
    methods:{
        ...mapActions({
          'login':'login/login'
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
