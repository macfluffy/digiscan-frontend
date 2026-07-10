<script setup>
    import { useRouter } from "vue-router";

    import { api } from '../../api/api.js';

    import logo from '../../assets/digiscan_logo.svg';
    import SearchBar from '../../shared/components/searchBar/searchBar.vue';

    const router = useRouter();

    async function viewAllSets() {
        router.push('/sets');
    }

    async function viewAllCards() {
        router.push('/search');
    }

    async function gotoAdvancedSearch() {
        router.push('/advancedSearch');
    }
</script>

<template>
    <section class="flex-container flex-columns" id="front-page-main">
        <div id="front-page-logo-container">
            <img 
                :src="logo" 
                alt="Front Page Digiscan Logo" 
                id="front-page-logo" 
            />
        </div>
        
        <div class="flex-container" id="search-bar-container">
            <SearchBar id="front-page-search-bar" />
        </div>
        
        <section class="flex-container flex-rows" id="front-page-menu">
            <button class="front-page-buttons" @click="gotoAdvancedSearch">Advanced Search</button>
            <button class="front-page-buttons" @click="viewAllSets">View All Sets</button>
            <button class="front-page-buttons" @click="viewAllCards">Random Card</button>
        </section>
        
        <section class="flex-container flex-rows" id="front-page-news">
            <h2>News</h2>
        </section>
    </section>
</template>

<style scoped src="./frontPage.css" />