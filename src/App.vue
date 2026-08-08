<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  import HomeLayout from './shared/layouts/homeLayout/homeLayout.vue';
  import DefaultLayout from './shared/layouts/defaultLayout/defaultLayout.vue';

  const route = useRoute();
  const layouts = {
    DefaultLayout,
    HomeLayout
  }

  const currentLayout = computed(() => {
    const layoutName = route.meta.layout || 'DefaultLayout';
    return layouts[layoutName];
  });
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>
