<script setup>
    import { useRouter } from 'vue-router';

    import SearchBar from '../searchBar/searchBar.vue';

    import logo from '../../../assets/digiscan_header_logo_black_white.png';

    const router = useRouter();

    async function gotoAdvancedSearch() {
        router.push('/advancedSearch');
    }
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

        <button class="header-buttons" @click="gotoAdvancedSearch">Advanced</button>
    </div>
</template>

<style scoped src="./header.css" />