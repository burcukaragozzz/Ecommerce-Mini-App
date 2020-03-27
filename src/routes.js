import Home from './containers/Home.vue'
import Cart from './containers/Cart.vue'
import ContinuedOrder from './containers/ContinuedOrder.vue'

export default [
  { 
    path: '/', 
    component: Home 
  },

  { 
    path: '/cart', 
    component: Cart 
  },

  { 
    path: '/continuedOrder', 
    component: ContinuedOrder 
  }
]