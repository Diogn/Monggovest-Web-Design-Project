// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style/main.scss'

Vue.use(BootstrapVue)
Vue.config.productionTip = false



var config = {
  apiKey: "AIzaSyBy_Uy9r8XPus7WimxGsj7XDeK9y2ITYl4",
  authDomain: "monggovest-d0683.firebaseapp.com",
  databaseURL: "https://monggovest-d0683.firebaseio.com",
  projectId: "monggovest-d0683",
  storageBucket: "monggovest-d0683.appspot.com",
  messagingSenderId: "713140536451"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
 })
