import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);
import counter from './modules/counter';
import counter2 from './modules/counter2';
import register from "./modules/auth/register";
import login from "./modules/auth/login";
import personal_info from "./modules/profile/personal_info";
import notes from"./modules/profile/notes";
//------------------- start of  dashboard---------------------------
import categories_dash from "./modules/dashboard/categories/categories";
//------------------- end of  dashboard---------------------------
// Create a new store instance.
console.log(counter);
const store = new Vuex.Store({
    modules:{
        counter,
        counter2,
        register,
        login,
        personal_info,
        notes,
        categories_dash,
    }
})

export {store};
