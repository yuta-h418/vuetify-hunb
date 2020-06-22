import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import Modal from './components/Modal.vue';

// Vue.component('modal', Modal);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
