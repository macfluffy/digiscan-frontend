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

        <p>Showing all cards found in set "{{ route.params.setNumber }}".</p>

        <div class="display-cards">
            <RouterLink 
                v-for="result in results"
                :key ="result.id"
                class="card-link"
                :to = "{ path: `/card/${result.card_sets[0].setNumber}/${result.cardNumber}/${result.cardName}` }">
                <img 
                    class="results-cards"
                    :src="api.getCardImageURL(result.cardNumber)"
                    :alt="result.cardName" />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped src="./set.css" />