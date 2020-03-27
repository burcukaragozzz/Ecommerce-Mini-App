import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter ({
  routes: routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})