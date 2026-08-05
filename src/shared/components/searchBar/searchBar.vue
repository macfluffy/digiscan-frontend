<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const query = ref('');

    function capitaliseFirstLetter(searchQuery) {
        const firstLetterIndex = 0;
        const restOfTheWordIndex = 1;

        return (
                searchQuery.charAt(firstLetterIndex).toUpperCase() 
                + 
                searchQuery.slice(restOfTheWordIndex)
            );
    }

    function submitSearch() {
        const searchQuery = capitaliseFirstLetter(query.value.trim());
        router.push({
            path: "/search",
            query: {
                // Return an undefined value if 
                // the searchQuery is empty. Null
                // will append ?cardName to the url
                cardName: searchQuery || undefined
            }
        });
    }   
</script>

<template>
    <form @submit.prevent = "submitSearch">
        <input 
            type = "search" 
            v-model = "query"
            placeholder = "Enter card name here" 
            class = "search-bar"
        >
    </form>
</template>