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
            console.log("Response:", results);
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
    <div class="flex-container flex-columns" 
        v-else-if="results"
        v-for="card in results"
        :key = "card.id">

        <img class="card-showcase" 
            :src="api.getCardImageURL(card.cardNumber)"
            :alt="card.cardName" />

        <section id="card-details">
            <p class="capitalise" id="cardname">{{ card.cardName }}</p>
            
            <section class="grid">
                <template v-if="card.level">
                    <p class="detail-heading">Level</p>
                    <p class="detail-text">{{ card.level }}</p>
                </template>

                <p class="detail-heading">Type</p>
                <p class="capitalise detail-text">
                    {{ 
                        card.card_types
                        .map(type => type.cardType)
                        .join(', ') 
                    }}
                </p>
                
                <template v-if="card.cardText">
                    <p class="detail-heading">Effects</p>
                    <p class="detail-text">{{ card.cardText }}</p>
                </template>

                <template v-if="card.inheritable">
                    <p class="detail-heading">Inherited Effect</p> 
                    <p class="detail-text">{{ card.inheritable }}</p>
                </template>
                
                <template v-if="card.card_costs" 
                    v-for="cost in card.card_costs">
                    <p class="detail-heading capitalise">{{ cost.costType }} Cost</p> 
                    <p class="detail-text">{{ cost.CardCostings.cardCost }}</p>
                </template>

                <template v-if="card.power">
                    <p class="detail-heading">Power</p> 
                    <p class="detail-text">{{ card.power }} DP</p>
                </template>

                <p class="detail-heading">
                    Colours
                </p>
                <p class="capitalise detail-text">
                    {{ 
                        card.colours
                        .map(colour => colour.colourName)
                        .join(', ') 
                    }}
                </p>

                <template v-if="card.card_traits">
                    <p class="detail-heading">Traits</p>
                    <p class="detail-text">
                        {{ 
                            card.card_traits
                            .map(trait => trait.cardTrait)
                            .join(', ') 
                        }}
                    </p>
                </template>
            </section>
        </section>

        <section id="card-printing-details">
            <p v-for="set in card.card_sets">{{ set.setNumber }} {{ set.setName }}</p>
            <p class="capitalise">{{ card.cardNumber }} {{ card.rarity }}</p>            
        </section>
    </div>
</template>

<style scoped src="./card.css" />