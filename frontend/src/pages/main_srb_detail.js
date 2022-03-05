import Vue from 'vue'
import AppSRBDetail from './AppSRBDetail.vue'
import vuetify from '../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppSRBDetail)
}).$mount('#app')
