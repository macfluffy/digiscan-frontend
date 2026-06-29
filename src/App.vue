<script setup>
  import Footer from './shared/components/footer/footer.vue';
  import SearchBar from './shared/components/searchBar/searchBar.vue'
</script>

<template>
  <SearchBar />
  <RouterView />
  <Footer />
</template>
