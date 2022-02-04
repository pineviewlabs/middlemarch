<script setup>
import {useCart} from '/src/store/cart.js'
const cart = useCart()
</script>
<template>
  <nav class="py-2 fixed-top">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 active" aria-current="page">Home</router-link></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">About</a></li>
      </ul>
      <div class="flex-shrink-0 dropdown">
        <a href="#" class="d-block text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false" style="margin-top:5px">
          <img src="/images-cloud/user_account_profile_icon.svg" alt="profile" width="24" height="24" class="rounded-circle">
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="">
          <li><router-link class="dropdown-item" to="/sign-in/">Sign-in</router-link></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="/register/">Register</a></li>
        </ul>
      </div>
      <div class="shopping-cart">
        <router-link to="/cart/" class="d-block text-decoration-none" id="dropdownUser2" aria-expanded="false" style="margin-top:4px">
          <img src="/images-cloud/basket_icon.svg" alt="cart" width="28" class="rounded-circle">
          <span class="badge bg-primary rounded-pill">{{count}}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  #dropdownUser2 {
    min-width: 40px;
  }
  nav .dropdown .dropdown-menu {
    margin-left: -85px !important;
  }
  .wrapper .fixed-top {
    position: sticky;
    z-index: 2100;
  }
  .wrapper nav {
    background-color: rgba(0,0,0,.8);
  }
  .wrapper nav a {
    color: #e1bee7;
    font-weight: 500;
  }
  .wrapper nav a:hover {
    color: #f0ad4e;
  }
  nav .dropdown-menu a {
    color: #222;
  }
  nav .dropdown-menu a:hover {
    color: #555;
  }

  nav .bg-primary {
    --bs-primary-rgb: 255,190,231;
    --bs-bg-opacity: .9;
    color: #0B212B;
  }
  .shopping-cart a .badge {
    font-size: 11px;
    margin-top:-3px;
    padding: 3px 6px;
  }
</style>

<script>
import { mapState} from 'pinia'

export default {
  data() {
    return {

    };
  },

  computed: {
    ...mapState(useCart, {
      count: 'count'
    })
  },

  methods: {

  }
};
</script>