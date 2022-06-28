require('./bootstrap');

const Toast = Swal.mixin({
    toast: true,
    position: 'top-left',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;
window.Swal = Swal;

require('./plugin');
require('jq-ajax-progress');

import { App, plugin } from '@inertiajs/inertia-vue';

import Vue from 'vue';
// import CKEditor from 'ckeditor4-vue';
import VueRouter from 'vue-router'
import Swal from 'sweetalert2';

import VueLazyload from 'vue-lazyload';

window.Vue = Vue;

Vue.use(VueLazyload);

// document.addEventListener('contextmenu', event => event.preventDefault());


Vue.use(VueRouter);
Vue.use(plugin);



window.VueRouter = VueRouter;



import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();


const el = document.getElementById('app');

import { Inertia } from '@inertiajs/inertia'


//Inertia.visit(url, { preserveScroll: true })


var vm = new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import('./Pages/' + name + '.vue').then(module => module.default)
        }

    }),
}).$mount(el)


window.vm = vm;



Inertia.on('start', (event) => {
    console.log(`Starting a visit to ${event.detail.visit.url}`)
});

Inertia.on('navigate', (event) => {
    console.log(Inertia.page.props.user)
    if(Inertia.page.props.user){
        /*if(Inertia.page.props.user.type == 'client' || Inertia.page.props.user.type == 'seller' ){
            document.addEventListener('contextmenu', removeDbclick);
        }else{
            document.removeEventListener('contextmenu', removeDbclick);
        }*/
    }


    // event.detail.visit.cancelled = true;
    // console.log(vm);
    // console.log('document height = '+$(document).height());
    // console.log('body height = '+$('body').height());
    //vm.$forceUpdate();
    // console.log(document);
    //location.reload();
    //console.log(vm.$forceUpdate());
    // console.log(`The route changed to ${event.detail.visit.url}`)
});




