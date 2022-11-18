import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/modules/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(store)

new Vue({
   el: '#app',
   store: store,
   render: h => h(App),
   router
})


