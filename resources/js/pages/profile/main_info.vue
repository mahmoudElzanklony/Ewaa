<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <div class="inner-profile">
            <ProfileNavComponent></ProfileNavComponent>
            <div class="change_data">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form>
                                    <h2 class="d-flex align-items-center main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.edit_main_info }}</span>
                                    </h2>
                                    <div>
                                        <img src="/images/users/default.png">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.profile_picture }}</label>
                                        <input class="form-control" type="file" name="profile_picture">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.email }}</label>
                                        <input class="form-control" type="email" name="email">
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form>
                                    <h2 class="d-flex align-items-center mb-4 main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.change_password }}</span>
                                    </h2>
                                    <div class="form-group">
                                        <label>{{ keywords.current_password }}</label>
                                        <input class="form-control" type="password" name="current_password">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.make_new_password }}</label>
                                        <input class="form-control" type="password" name="current_password">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.password_confirmed }}</label>
                                        <input class="form-control" type="password" name="password_confirmed">
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                    </div>


                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form>
                                    <h2 class="d-flex align-items-center mb-4 main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.edit_personal_info }}</span>
                                    </h2>
                                    <div class="form-group">
                                        <label>{{ keywords.full_name }}</label>
                                        <input class="form-control"  name="full_name">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.username }}</label>
                                        <input class="form-control" name="username">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.phone }}</label>
                                        <input class="form-control" type="number" name="phone">
                                    </div>
                                    <div class="what_app_status d-flex- align-items-center form-group">
                                        <span><i class="ri-whatsapp-line"></i></span>
                                        <span>{{ keywords.this_number_has_whatsapp }}</span>
                                        <input type="checkbox" class="toggle-checkbox-status">
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form>
                                    <h2 class="d-flex align-items-center mb-4 main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.company_settings }}</span>
                                    </h2>
                                    <div class="form-group">
                                        <label>{{ keywords.company_bio }}</label>
                                        <textarea style="height:232px" class="form-control" name="company_bio"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.company_logo }}</label>
                                        <input type="file" name="company_logo" class="form-control">
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="section_inputs">
                                <form>
                                    <h2 class="d-flex align-items-center mb-4 main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.edit_main_info }}</span>
                                    </h2>
                                    <div class="row">
                                        <div class="col-md-6 col-12">
                                            <div class="form-group">
                                                <label>{{ keywords.age }}</label>
                                                <select name="age" class="form-control">
                                                    <option value=""></option>
                                                    <option value="18:25">18 - 25</option>
                                                    <option value="26:30">26 - 30</option>
                                                    <option value="31:40">31 - 40</option>
                                                    <option value="41:50">41 - 50</option>
                                                    <option value="51">+51</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>{{ keywords.gender }}</label>
                                                <select name="age" class="form-control">
                                                    <option value=""></option>
                                                    <option value="male">{{ keywords.male }}</option>
                                                    <option value="female">{{ keywords.female }}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>{{ keywords.marital_status }}</label>
                                                <select name="age" class="form-control">
                                                    <option value=""></option>
                                                    <option v-for="i in ['single','engaged','married','seperated','widowed']" :value="i">{{ keywords[i] }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="form-group">
                                                <label>{{ keywords.education }}</label>
                                                <select name="age" class="form-control">
                                                    <option value=""></option>
                                                    <option
                                                        v-for="i in ['high_school','diploma','bachelors','masters','phd']"
                                                        :key="i" :value="i">{{ keywords[i] }}</option>
                                                </select>
                                            </div>
                                            <div  class="form-group">
                                                <label>{{ keywords.industry }}</label>
                                                <input name="industry" class="form-control">
                                            </div>
                                            <div  class="form-group">
                                                <label>{{ keywords.position }}</label>
                                                <input name="position" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
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
import ProfileNavComponent from "../../components/ProfileNavComponent";
export default {
    name: "main_info",
    props:['keywords'],
    components: {ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.profile{
    .change_data{
        margin-top: 20px;
        .section_inputs{
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 10px;
            img{
                height: 110px;
                display: block;
                margin: auto;
            }
            .what_app_status{
                span:first-of-type{
                    color:$sub_main_color;
                }
                span:last-of-type{
                    position: relative;
                    top:-6px
                }
            }
        }
    }
}

.ar{
    .profile{
        .inner-profile{
            .section_inputs{
                .what_app_status{
                    span{
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}

.en{
    .profile{
        .inner-profile{
            .section_inputs{
                .what_app_status{
                    span{
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}

</style>
