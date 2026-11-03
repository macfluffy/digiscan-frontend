<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        colours: {
            type: Array,
            default: () => [],
        },
    });

    const segmentColours = [
        { title: 'red', abbreviation: 'R' },
        { title: 'blue', abbreviation: 'Blu' },
        { title: 'yellow', abbreviation: 'Y' },
        { title: 'green', abbreviation: 'G' },
        { title: 'black', abbreviation: 'Blk' },
        { title: 'purple', abbreviation: 'P' },
        { title: 'white', abbreviation: 'W' }
    ];

    // This compares the colours of a card and lights 
    // the segments that matches the card's colours
    const thisCardColours = computed(() => new Set(props.colours.map(
        colour => colour.colourName.toLowerCase()))
    );
    const segments = computed(() => segmentColours.map(
        colour => ({ ...colour, isSegmentLit: thisCardColours.value.has(colour.title)}))
    );

    console.log('cardColours:', thisCardColours);
    console.log('isSegmentLit', segments);
</script>

<template>
    <div class="colour-bar">
        <span
            v-for="segment in segments"
            :key="segment.title"
            class="colour-segment"
            :class="
                [`colour-segment-${segment.title}`, 
                { 'is-lit': segment.isSegmentLit }]"
            >
                {{ segment.abbreviation }}
        </span>
    </div>
</template>

<style scoped src="./colourBar.css" />