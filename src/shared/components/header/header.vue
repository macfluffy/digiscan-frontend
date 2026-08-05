<script setup>
    import { useRouter } from 'vue-router';

    import SearchBar from '../searchBar/searchBar.vue';

    import logo from '../../../assets/digiscan_header_logo_black_white.png';

    const router = useRouter();
</script>

<template>
    <div class="flex-container" id="search-bar-container">
        <RouterLink to="/">
            <img :src="logo" 
                alt="Header Icon"
                id="header-logo" 
            />
        </RouterLink>

        <SearchBar id="header-search-bar" />
    </div>
</template>

<style scoped src="./header.css" />