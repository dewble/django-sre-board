import Vue from 'vue'
import AppSRBDetail from './AppSREDetail.vue'
import vuetify from '../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppSRBDetail)
}).$mount('#app')
