import Vue from 'vue'
import Router from 'vue-router'
import RiskProfileForm from '@/components/RiskProfileForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RiskProfileForm',
      component: RiskProfileForm
    }
  ]
})
