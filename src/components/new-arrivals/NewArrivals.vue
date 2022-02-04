<script setup>
import {useCatalog} from '/src/store/catalog.js'
import {useCart} from '/src/store/cart.js'
const store = useCatalog()
const cart = useCart()
</script>

<template src="./new-arrivals.html"></template>
<style scoped src="./new-arrivals.css"></style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(useCatalog, {
      newArrivals: 'results'
    })
  },

  mounted() {
    console.log('results: ', this.newArrivals)
  },

  methods: {
    ...mapActions(useCatalog, [
      'fetchNewArrivals'
    ]),

    ...mapActions(useCart, [
      'addToCart'
    ])
  },

  created() {
    this.fetchNewArrivals();
  }
};
</script>