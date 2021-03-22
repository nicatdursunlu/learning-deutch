import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebaseConfig from "@/config/firebase";
import VuetifyConfrim from 'vuetify-confirm';
import firebase from "firebase";

Vue.config.productionTip = false

Vue.use(VuetifyConfrim, {
    bottomTruText: 'Yes',
    bottomFalseText: "No",
    // color: 'warning',
    // icon: 'warning',
    // title: 'Warning',
    // width: 300,
    // property: "$confirm"
})

firebase.initializeApp(firebaseConfig)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        let vm = this
        firebase.auth().onAuthStateChanged(function (user) {
            vm.$store.dispatch("STATE_CHANGED", user)
        })
    }
}).$mount('#app')
