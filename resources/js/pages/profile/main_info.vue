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
                                <form method="post" @submit.prevent="update_username_image">
                                    <h2 class="d-flex align-items-center main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.edit_main_info }}</span>
                                    </h2>
                                    <div>
                                        <img :src="'/images/users/'+user.image">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.profile_picture }}</label>
                                        <input class="form-control preview-image"
                                               accept="image/*"
                                               selector=".profile .change_data .section_inputs img"
                                               type="file" name="profile_picture">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.email }}</label>
                                        <input class="form-control" type="email" name="email"
                                               :value="user.email" required>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="section_inputs">
                                <form method="post" @submit.prevent="update_password">
                                    <h2 class="d-flex align-items-center mb-4 main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.change_password }}</span>
                                    </h2>
                                    <div class="form-group">
                                        <label>{{ keywords.current_password }}</label>
                                        <input class="form-control" type="password" name="current_password">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.make_new_password }}</label>
                                        <input class="form-control" type="password" name="password">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.password_confirmed }}</label>
                                        <input class="form-control" type="password" name="password_confirmation">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                    </div>


                        <div :class="role.name == 'brokerage_company' ? 'col-6':'' +'col-12'">
                            <div class="section_inputs">
                                <form method="post" @submit.prevent="update_personal_data">
                                    <h2 class="d-flex align-items-center mb-4 main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.edit_personal_info }}</span>
                                    </h2>
                                    <div class="form-group">
                                        <label>{{ keywords.full_name }}</label>
                                        <input class="form-control"  name="full_name"
                                               :value="data.personal_data.full_name">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.username }}</label>
                                        <input class="form-control" name="username"
                                               :value="user.username"
                                        >
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.phone }}</label>
                                        <input class="form-control" type="number"
                                               :value="user.phone"
                                               name="phone">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="what_app_status d-flex- align-items-center form-group">
                                        <span><i class="ri-whatsapp-line"></i></span>
                                        <span>{{ keywords.this_number_has_whatsapp }}</span>
                                        <input type="checkbox"
                                               name="whatapp_status"
                                               class="toggle-checkbox-status"
                                               :checked="data.personal_data.whatapp_status"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-md-6 col-12" v-if="role.name == 'brokerage_company'">
                            <div class="section_inputs company_bio">
                                <form method="post" @submit.prevent="update_company_data">
                                    <h2 class="d-flex align-items-center mb-4 main-title">
                                        <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                                        <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                                        <span>{{ keywords.company_settings }}</span>
                                    </h2>
                                    <div>
                                        <img v-if="data.hasOwnProperty('company_info') && data.company_info.image == ''"                                                src="/images/default.png">
                                        <img v-else-if="data.hasOwnProperty('company_info') && data.company_info.image != ''"                                                :src="'/images/companies/'+data.company_info.image">
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.company_bio }}</label>
                                        <textarea style="height:100px"
                                                  class="form-control"
                                                  name="bio"
                                                  :value="data.hasOwnProperty('company_info') ? data.company_info.bio:''"
                                        ></textarea>
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ keywords.company_logo }}</label>
                                        <input class="form-control preview-image"
                                               accept="image/*"
                                               selector=".profile .change_data .section_inputs.company_bio img"
                                               type="file" name="image">
                                        <p class="alert alert-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="save" class="btn btn-primary" :value="keywords.save">
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="section_inputs">
                                <form method="post" @submit.prevent="update_secondary_data">
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
                                                    <option v-for="(age,index) in Object.keys(data.ages)"
                                                            :key="index" :value="age" :selected="data.personal_data.age == age">
                                                        {{ data.ages[age] }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>{{ keywords.gender }}</label>
                                                <select name="gender" class="form-control">
                                                    <option value=""></option>
                                                    <option value="male" :selected="data.personal_data.gender == 'male'">{{ keywords.male }}</option>
                                                    <option value="female" :selected="data.personal_data.gender == 'female'">{{ keywords.female }}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>{{ keywords.marital_status }}</label>
                                                <select name="marital_status" class="form-control">
                                                    <option value=""></option>
                                                    <option v-for="i in ['single','engaged','married','seperated','widowed']" :value="i" :selected="data.personal_data.marital_status == i">{{ keywords[i] }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="form-group">
                                                <label>{{ keywords.education }}</label>
                                                <select name="education" class="form-control" required>
                                                    <option value=""></option>
                                                    <option
                                                        v-for="i in ['high_school','diploma','bachelors','masters','phd']"
                                                        :key="i" :value="i"
                                                        :selected="data.personal_data.education == i">
                                                        {{ keywords[i] }}</option>
                                                </select>
                                            </div>
                                            <div  class="form-group">
                                                <label>{{ keywords.industry }}</label>
                                                <input name="industry" class="form-control" :value="data.personal_data.industry">
                                            </div>
                                            <div  class="form-group">
                                                <label>{{ keywords.position }}</label>
                                                <input name="position" class="form-control" :value="data.personal_data.position" required>
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
import {mapActions} from "vuex";
export default {
    name: "main_info",
    props:['keywords','data','role'],
    computed:{
        user:function (){
            return this.$inertia.page.props.user
        }
    },
    methods:{
      ...mapActions({
         'update_username_image':'personal_info/update_username_image',
         'update_password':'personal_info/change_password',
         'update_personal_data':'personal_info/update_personal_data',
         'update_company_data':'personal_info/update_company_data',
         'update_secondary_data':'personal_info/update_secondary_data',
      }),
    },
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
                object-fit: cover;
                width: 110px;
                border-radius: 50%;
                border:1px solid #ddd;
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
.alert-danger{
    display: none;
}

</style>
