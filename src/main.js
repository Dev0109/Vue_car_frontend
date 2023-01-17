import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
import VueRouter from 'vue-router';
import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing);
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false


Vue.use(VueAnalytics, {
    id: 'UA-49816843-2',
    router
});
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')