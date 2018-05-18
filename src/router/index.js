import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCar from '@/components/ShoppingCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingCar',
      component: ShoppingCar
    }
  ]
})
