import Vue from 'vue'
import router from './components/vue-rooter/index'
import store from './components/vuex/index'
let vue=new Vue({
    el:'.app',
    router,
    store
})
