import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);

import register from "./modules/auth/register";
import login from "./modules/auth/login";
import personal_info from "./modules/profile/personal_info";
import notes from"./modules/profile/notes";
//------------------- start of  dashboard---------------------------
import categories_dash from "./modules/dashboard/categories";
import sub_categories_dash from "./modules/dashboard/sub_categories";
import questions_dash from "./modules/dashboard/questions";
import map_locations_dash from "./modules/dashboard/map_locations";
import packages_dash from "./modules/dashboard/packages";
import currencies_dash from "./modules/dashboard/currencies";
import listings_dash from "./modules/dashboard/listings";
import users_dash from "./modules/dashboard/users";
import support_dash from "./modules/dashboard/support"
import pointad_dash from "./modules/dashboard/poindad"
import settings_dash from "./modules/dashboard/settings";

import countries_govenrn_cities_areas from "./modules/map_data";
import notifications from "./modules/notifications";
//------------------- end of  dashboard---------------------------
// Create a new store instance.
const store = new Vuex.Store({
    modules:{
        register,
        login,
        personal_info,
        notes,
        // dashboard modules
        categories_dash,
        sub_categories_dash,
        questions_dash,
        map_locations_dash,
        packages_dash,
        currencies_dash,
        listings_dash,
        users_dash,
        support_dash,
        pointad_dash,
        settings_dash,
        // end dashboard modules
        countries_govenrn_cities_areas,
        notifications
    }
})

export {store};
