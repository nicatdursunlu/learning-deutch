import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebaseConfig from "@/config/firebase";
import VuetifyConfirm from 'vuetify-confirm';
import firebase from "firebase";
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.config.productionTip = false

Vue.use(VuetifyConfirm, {
    vuetify,
    bottomTruText: 'Yes',
    bottomFalseText: "No",
})
Vue.use(VueYouTubeEmbed)

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
