<script setup>
import {useCatalog} from '/src/store/catalog.js'
const store = useCatalog()
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

    addToCart() {

    }
  },

  created() {
    this.fetchNewArrivals();
  }
};
</script>