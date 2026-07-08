<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const query = ref('');

    function submitSearch() {
        const searchQuery = query.value.trim();
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