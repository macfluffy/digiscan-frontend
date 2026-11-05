<script setup>
    import Footer from '../../components/footer/footer.vue';
    import crtLayout from '../crtLayout/crtLayout.vue';
</script>

<template>
    <crtLayout>
        <RouterView />
        <Footer />
    </crtLayout>
</template>