import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);
import counter from './modules/counter';
import counter2 from './modules/counter2';
// Create a new store instance.
console.log(counter);
const store = new Vuex.Store({
    modules:{
        counter,
        counter2,
    }
})

export {store};
