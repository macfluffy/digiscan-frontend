<script setup>
    import { computed } from 'vue';

    // This component only cares about the number of pages in the results
    const props = defineProps({
        currentPage: Number,
        totalPages: Number
    });

    // Event handler name
    const emits = defineEmits([
        'gotoPage'
    ]);  
    
    // Guardrails to stop the user going to pages that don't exist
    const isFirstPage = computed(() => props.currentPage <= 1);
    const isLastPage = computed(() => props.currentPage >= props.totalPages);
</script>

<template>
    <button class="pageNav" 
        :disabled="isFirstPage" 
        @click="$emit('gotoPage', 1)">
        |&lt;&lt;
    </button>
    <button class="pageNav" 
        :disabled="isFirstPage" 
        @click="$emit('gotoPage', props.currentPage - 1)">
        &lt;
    </button>
    <button class="pageNav" 
        :disabled="isLastPage" 
        @click="$emit('gotoPage', props.currentPage + 1)">
        &gt;
    </button>
    <button class="pageNav" 
        :disabled="isLastPage" 
        @click="$emit('gotoPage', props.totalPages)">
        &gt;&gt;|
    </button>
</template>

<style scoped src="./pageNavigation.css" />