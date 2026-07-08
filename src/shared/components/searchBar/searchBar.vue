<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const query = ref('');

    function submitSearch() {
        const searchQuery = query.value.trim;
        router.push({
            path: "/search",
            query: {
                // Return a null if the searchQuery is empty
                cardName: searchQuery || null
            }
        });
    }   
</script>

<template>
    <form>
        <input 
            type = "text" 
            placeholder = "Enter card name here" 
            class = "search-bar"
            @submit="submitSearch"
        >
    </form>
</template>