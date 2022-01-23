import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import SignIn from './sign-in/SignIn.vue';
import Cart from './cart/Cart.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/sign-in/',
    component: SignIn
  },

  {
    path: '/cart/',
    component: Cart
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}