<template>
    <section class="forget_password">
        <navbar-component></navbar-component>

        <div class="auth mt-5 mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <h2 class="mb-4">{{ keywords.forget_password }}</h2>
                            <div class="form-group">
                                <label>{{ keywords.email }}</label>
                                <input name="email" type="email" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="keywords.send">
                            </div>
                            <p class="text-center">
                                <span>{{ keywords.have_already_account }} ? </span>
                                <inertia-link href="/login">{{ keywords.sign_in }}</inertia-link>
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
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
export default {
    name: "forget_password",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent}
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
        background-color: #b2dfdb5e;
        width: 100%;
        height: 100%;
    }
}
</style>
