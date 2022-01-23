<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import NewArrivals from '../../components/new-arrivals/NewArrivals.vue';
</script>

<template>
  <TopNavbar />
  <NewArrivals />
</template>

<style></style>

<script>
export default {
  components: {
    TopNavbar,
    NewArrivals
  },

  computed: {},

  mounted() {
  },

  data() {
    return {
    };
  },
};
</script>