<script setup>
    import { api } from '../../api/api.js';

    import logo from '../../assets/digiscan_logo.svg';
    import SearchBar from '../../shared/components/searchBar/searchBar.vue';

    async function getAllCards() {
        const response = await api.getCards();
        console.log(response);
    }

    async function viewAllSets() {
        const response = await api.getSets();
        console.log(response);
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
            <SearchBar 
                id="front-page-search-bar" 
                @submit.prevent="getAllCards"
            />
        </div>
        
        <section class="flex-container flex-rows" id="front-page-menu">
            <button class="front-page-buttons" @click="getAllCards">Advanced Search</button>
            <button class="front-page-buttons" @click="viewAllSets">View All Sets</button>
            <button class="front-page-buttons" @click="getAllCards">Random Card</button>
        </section>
        
        <section class="flex-container flex-rows" id="front-page-news">
            <h2>News</h2>
        </section>
    </section>
</template>

<style scoped src="./frontPage.css" />