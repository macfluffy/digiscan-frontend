<script setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    import { api } from '../../api/api.js';
    
    import ColourBar from './colourBar/colourBar.vue';

    const route = useRoute();

    const isLoading = ref(false);
    const results = ref([]);
    
    async function fetchCard(id) {
        isLoading.value = true;
        try {
            const response = await api.getCardById(id);
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

        <section class="card-display-window">
            <section class="card-display-titlebar">
                <span v-if="card.card_sets">
                    &#9632; &#9632; &#9632; &nbsp; {{ card.card_sets[0].setNumber }} / {{ card.cardNumber }}
                </span>
            </section>

            <section id="card-details">
                
                <section class="card-header">
                    <h1 class="capitalise" id="cardname">{{ card.cardName }}</h1>
                    <ColourBar v-if="card.colours" :colours="card.colours" />
                </section>
                
                <section class="tag-container">
                    <span 
                        v-if="card.card_types" 
                        v-for="type in card.card_types"
                        class="trait-tags card-types capitalise">
                            {{ type.cardType }}
                    </span>
                    <span 
                        v-if="card.card_traits" 
                        v-for="trait in card.card_traits"
                        class="trait-tags capitalise">
                            {{ trait.cardTrait }}
                    </span>
                </section>
                <section>
                    <div class="card-stats-container">
                        <section 
                            v-if="card.level" 
                            class="holo card-stats-window">
                                <div class="card-stats-title">Level</div>
                                <div class="card-stats-digits">{{ card.level }}</div>
                        </section>

                        <section 
                            v-if="card.card_costs" 
                            v-for="cost in card.card_costs"
                            class="holo card-stats-window">
                                <div class="card-stats-title">{{ cost.costType }} Cost</div> 
                                <div class="card-stats-digits">{{ cost.CardCostings.cardCost }}</div>
                        </section> 

                        <section 
                            v-if="card.power"
                            class="holo card-stats-window"
                            id="stats-power">
                                <div class="card-stats-title">Power</div> 
                                <div class="card-stats-digits">{{ card.power }} DP</div>
                        </section>                 
                    </div>
                    
                    <div class="effects-container">
                        <section v-if="card.cardText" class="holo effects">
                            <h4>Effects</h4>
                            <p>{{ card.cardText }}</p>
                        </section>

                        <section v-if="card.inheritable" class="holo effects">
                            <h4>Inherited Effect</h4> 
                            <p>{{ card.inheritable }}</p>
                        </section>
                    </div>
                    <section>
                        <div>
                            <h5>Set</h5>
                            <p>{{ card.card_sets[0].setNumber }} {{ card.card_sets[0].setName }}</p>
                        </div>
                        <div>
                            <h5>Artist</h5>
                            <p>Artist's Name</p>
                        </div>
                    </section>
                    <section>
                        <h5>Notes & Rulings:</h5>
                        <p>Notes and notes and notes</p>
                    </section>
                </section>
            </section>
        </section>

        <section id="card-printing-details">
            <p v-for="set in card.card_sets">{{ set.setNumber }} {{ set.setName }}</p>
            <p class="capitalise">{{ card.cardNumber }} {{ card.rarity }}</p>            
        </section>
    </div>
</template>

<style scoped src="./card.css" />