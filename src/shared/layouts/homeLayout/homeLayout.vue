<script setup>
    import Footer from '../../components/footer/footer.vue';
    import crtLayout from '../../components/crtTheme/crtLayout.vue';
</script>

<template>
    <crtLayout>
        <RouterView />
        <Footer />
    </crtLayout>
</template>