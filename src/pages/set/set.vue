<script setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    import { api } from '../../api/api';

    const route = useRoute();
    
    const isLoading = ref(false);
    const results = ref([]);

    async function fetchResults(query) {
        isLoading.value = true;
        try {
            const response = await api.getSet(query);
            results.value = response.data;
        } 
        catch (errorMessage) {
            console.error(errorMessage);
            results.value = [];
        }
        finally {
            isLoading.value = false;
        }
    }

    watch(
        () => route.params.setNumber,   // What we're watching
        (query) => fetchResults(query), // Callbacks fetchResults() when query changes
        { immediate: true }             // Fire the callback once the watcher is setup
    );
</script>

<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="results">

        <p>Showing cards found.</p>

        <template class="grid display-cards" 
            v-for="result in results"
            :key ="result.id">
            <RouterLink :to = "{ path: `/card/${result.card_sets[0].setNumber}/${result.cardNumber}/${result.cardName}` }">
                <img class="results-cards"
                    :src="api.getCardImageURL(result.cardNumber)"
                    :alt="result.cardName" />
            </RouterLink>
        </template>

    </div>
</template>

<style scoped src="./set.css" />