import Vue from 'vue'
import AppSRBList from './AppSRBList.vue'
import vuetify from '../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppSRBList)
}).$mount('#app')
