import Vue from 'vue';
import App from './App.vue';
import routes from './router';
import storeConfig from './store';
import Router from 'vue-router';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Router);
Vue.use(BootstrapVue);

const store = new Vuex.Store(storeConfig);

let router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});

new Vue({
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
}).$mount("#app");
