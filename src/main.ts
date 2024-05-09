import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import { httpClient } from '@/utils/request/http';

Vue.config.productionTip = false;

Vue.prototype.$http = httpClient;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
