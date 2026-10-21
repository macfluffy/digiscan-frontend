<script setup>
    import Header from '../../components/header/header.vue';
    import Footer from '../../components/footer/footer.vue';
    import crtLayout from '../../components/crtTheme/crtLayout.vue';
</script>

<template>
    <crtLayout>
        <Header />
        <RouterView />
        <Footer />
    </crtLayout>        
</template>