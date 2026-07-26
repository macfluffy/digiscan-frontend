<script setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    import { api } from '../../api/api.js';

    const route = useRoute();

    const isLoading = ref(false);
    const results = ref([]);
    
    async function fetchCard(id) {
        isLoading.value = true;
        try {
            const response = await api.getCardById(id)
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
        () => route.params.cardNumber,
        (id) => fetchCard(id),
        { immediate: true }
    );
</script>

<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="results">
        <p v-for="card in results"
            :key = "card.id">
            ID: {{ card.id }}
            Set: {{ card.setName }}
            Card Name: {{ card.cardName }}
            Card Number: {{ card.cardNumber }}
        </p>
    </div>
</template>