<script setup>
    import { computed, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    import { api } from '../../api/api';
    import { getAllCards } from '../../api/cardServices';

    const route = useRoute();
    
    const isLoading = ref(false);
    const results = ref([]);
    const pagination = ref({    // Initialised with arbitrary numbers
        currentPage: 1,
        cardsPerPage: 20,
        totalCardsFound: 0,
        totalPages: 1
    });
    
    const minCardRange = computed(() => {
        const currentPage = pagination.value.currentPage;
        const cardsPerPage = pagination.value.cardsPerPage;

        return (currentPage - 1) * cardsPerPage + 1; 
    });

    const maxCardRange = computed(() => {
        const currentPage = pagination.value.currentPage;
        const cardsPerPage= pagination.value.cardsPerPage;
        const totalCardsFound = pagination.value.totalCardsFound;

        return Math.min(
            ((currentPage - 1) * cardsPerPage + cardsPerPage), 
            totalCardsFound
        );
    });

    async function fetchResults(query, page = 1) {
        isLoading.value = true;
        try {
            const response = query 
                ? await api.getCard(query)  // Truthy
                : await getAllCards();      // Falsy
            
            results.value = response.data;
            pagination.value = {
                currentPage: response.pagination.page,
                cardsPerPage: response.pagination.cardsPerPage,
                totalCardsFound: response.pagination.total,
                totalPages: response.pagination.totalPages
            }
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
        () => [route.query, route.query.page],              // What we're watching
        ([query, page]) => fetchResults(query, 
                                        Number(page) || 1), // Callbacks fetchResults() when query changes
        { immediate: true }                                 // Fire the callback once the watcher is setup
    );
</script>

<template>
    <p>Showing cards {{ minCardRange }} to {{ maxCardRange }} of {{ pagination.totalCardsFound }} found.</p>
        <p v-for="result in results"
            :key ="result.id">
                ID: {{ result.id }}
                Card Name: {{ result.cardName }}
                Card Number: {{ result.cardNumber }}
        </p>
    <!-- <RouterLink to =""></RouterLink> -->
</template>