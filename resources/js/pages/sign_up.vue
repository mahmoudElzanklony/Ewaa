<template>
    <div>
        <navbar-component></navbar-component>
        <div class="auth mt-5 mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <h2 class="mb-4">{{ keywords.sign_up }}</h2>
                            <div class="form-group">
                                <label>{{ keywords.username }}</label>
                                <input name="email" type="email" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.email }}</label>
                                <input name="email" type="email" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.password }}</label>
                                <input name="password" type="password" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.phone }}</label>
                                <input name="phone" type="number" class="form-control" required>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <label>{{ keywords.user_type }}</label>
                                <select name="type"  class="form-control" required>
                                    <option value="private_owner">{{ keywords.private_owner }}</option>
                                    <option value="freelancer">{{ keywords.freelancer }}</option>
                                    <option value="coupounded_developer">{{ keywords.coupounded_developer }}</option>
                                    <option value="brokerage_company">{{ keywords.brokerage_company }}</option>
                                </select>
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="send"
                                       class="btn btn-primary"
                                       :value="keywords.sign_up">
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
    </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "sign_up",
    props:['keywords'],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
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
