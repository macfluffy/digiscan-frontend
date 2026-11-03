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
    <div class="flex-container flex-columns card-display" 
        v-else-if="results"
        v-for="card in results"
        :key = "card.id">

        <img class="card-showcase" 
            :src="api.getCardImageURL(card.cardNumber)"
            :alt="card.cardName" />
        
        
        <section class="holo-display-window card-display-window">
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
                                <div class="card-stats-title capitalise">{{ cost.costType }} Cost</div> 
                                <div class="card-stats-digits">{{ cost.CardCostings.cardCost }}</div>
                        </section> 

                        <section 
                            v-if="card.power"
                            class="holo card-stats-window"
                            id="stats-power">
                                <div class="card-stats-title">Power</div> 
                                <div class="card-stats-digits">{{ card.power }} <span id="dp-label">DP</span></div>
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
                    <section class="card-printing-details">
                        <div>
                            <h4>Set</h4>
                            <p>{{ card.card_sets[0].setNumber }} {{ card.card_sets[0].setName }}</p>
                        </div>
                        <div>
                            <h4>Artist</h4>
                            <p>Artist's Name</p>
                        </div>
                        <div>
                            <h4>Rarity</h4>
                            <p class="capitalise">{{ card.rarity }}</p>
                        </div>
                        <div>
                            <h4>Source</h4>
                            <p class="capitalise">Which product or event or promo did this come from?</p>
                        </div>
                    </section>
                    <section class="card-rulings">
                        <h4>Notes & Rulings:</h4>
                        <p>Notes and notes and notes</p>
                    </section>
                    <section id="all-card-printing-details">
                        <div>
                            <h4>All Versions</h4>
                            <span>EN</span> <span>JP</span>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Prints</th>
                                        <th>Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="set in card.card_sets">
                                        <td>{{ set.setNumber }} {{ set.setName }}</td>
                                        <td>{{ set.setNumber }} {{ set.setName }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>View All Prints -></p>
                        </div>
                    </section>
                </section>
            </section>   
        </section>
    </div>
</template>

<style scoped src="./card.css" />