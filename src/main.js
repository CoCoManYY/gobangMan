import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import 'weui/dist/style/weui.min.css'
import './reset.scss'
import i18n from './i18n/index.js'
//import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
