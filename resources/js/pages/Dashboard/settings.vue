<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content">
            <div class="container settings">
                <h2 class="text-center">{{ main_title }}</h2>
                <form class="" method="post" @submit.prevent="save_settings">
                    <div class="row">
                        <input type="hidden" name="id" :value="$inertia.page.props.user['id']">
                        <div class="col-6" v-for="(i,index) in Object.keys(keywords)" :key="index">
                            <div class="form-group input-icon" >
                                <label>{{ keywords[i] }}</label>
                                <select class="form-control" :name="i" v-if="i == 'country_id'">
                                    <option value="">{{ switchWord('select_country') }}</option>
                                    <option v-for="(c,index) in countries" :key="index"
                                            :selected="$inertia.page.props.user[i] == c['id']"
                                            :value="c['id']">
                                        {{ c['name'] }}
                                    </option>
                                </select>
                                <input v-else :name="i" :type="i == 'password'?'password':'text'"
                                       :value="$inertia.page.props.user[i]"
                                       :required="i != 'password'"
                                       :placeholder="i == 'password'?switchWord('leave_password'):''"
                                       class="form-control">
                                <span v-if="i == 'password'">
                                    <i class="ri-eye-line show_password cursor-pointer"></i>
                                </span>

                                <p class="alert-danger alert"></p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn  btn-primary" :value="switchWord('save')">
                    </div>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from  "vuex";
export default {
    name: "settings",
    props:['keywords','main_title','countries'],
    mixins:[SwitchLangWord],
    components:{
        SideNavbarComponent
    },
    methods:{
      ...mapActions({
            'save_settings':'settings_dash/save_settings'
      })
    },
}
</script>

<style lang="scss" scoped>
.settings{
    h2{
        padding-top: 45px;
    }
    form{
        margin: 20px auto;
    }

}
.alert{
    display: none;
}
</style>
