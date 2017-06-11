// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// 引入store
import Store from './store';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  Store,
  router,
  template: '<App/>',
  components: {
    App
  }
});
