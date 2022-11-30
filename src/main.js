import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/modules/index'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(store)
Vue.use(Vuesax)


new Vue({
   el: '#app',
   store: store,
   render: h => h(App),
   router
})


