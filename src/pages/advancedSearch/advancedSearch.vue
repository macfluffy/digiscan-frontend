<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const queryConfig = {
        cardName: (value) => String(value),
        cardText: (value) => String(value),
        inheritable: (value) => String(value),
        cardType: (value) => String(value),
        level: (value) => String(value),
        colourName: (value) => String(value),
        setNumber: (value) => String(value),
        rarity: (value) => String(value),
        power: (value) => String(value),
    };

    const searchInputs = ref({
        cardName: '',
        cardText: '',
        inheritable: '',
        cardType: '',
        level: '',
        colourName: '',
        setNumber: '',
        rarity: '',
        power: ''
    });

    // Construct the query object, removing empty values and placing any multiple 
    // values for the same key into an array
    function formatQuery(rawQuery) {
        const nonEmptyEntries = [...rawQuery.entries()].filter(([key, value]) => {
            return value !== '';
        });

        const formattedQuery = nonEmptyEntries.reduce(
            (result, [key, value]) => {
                const transform = queryConfig[key] ?? ((defaultValue) => String(defaultValue));
                const transformedValue = transform(value);

                // Create an array if the key appears again in the Query object
                if (key in result) {
                    result[key] = Array.isArray(result[key]) 
                        ? [...result[key], transformedValue]
                        : [result[key], transformedValue];
                }
                else {
                    result[key] = transformedValue;
                }

                return result;
            }, {}
        );

        return formattedQuery;
    }

    function submitAdvancedSearch() {
        const formInput = document.forms['advanced-search-page-container'];
        const formData = new FormData(formInput);
        const searchQuery = formatQuery(formData);
        router.push({
            path: "/search",
            query: searchQuery,
        });
    }
</script>

<template>
    <form class="flex-container flex-columns wrapper-container" 
        id="advanced-search-page-container" 
        @submit.prevent="submitAdvancedSearch">

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-name">
            <h3 class="advanced-search-label">Card Name:</h3>
            <input 
                type="text" 
                v-model="searchInputs.cardName"
                class="advanced-search-text-input" 
                id="card-name-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-text">
            <h3 class="advanced-search-label">Card Text:</h3>
            <input 
                type="text" 
                v-model="searchInputs.cardText"
                class="advanced-search-text-input" 
                id="card-text-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="inheritable-effects">
            <h3 class="advanced-search-label">Inheritable:</h3>
            <input 
                type="text" 
                v-model="searchInputs.inheritable"
                class="advanced-search-text-input" 
                id="inheritable-effects-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-type">
            <h3 class="advanced-search-label">Card Type:</h3>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="digiegg"
                name="cardType" 
                value="digiegg" 
            />
            <label for="digi-egg">Digi-Egg</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="digimon"
                name="cardType" 
                value="digimon" 
            />
            <label for="digimon">Digimon</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="tamer"
                name="cardType" 
                value="tamer" 
            />
            <label for="tamer">Tamer</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="options"
                name="cardType" 
                value="options" 
            />
            <label for="options">Options</label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-level">
            <h3 class="advanced-search-label">Card Level</h3>
            <p>Card includes:</p>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="level-2" 
                name="level" 
                value="2" 
            />
            <label for="level-2">Level 2</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="level-3" 
                name="level" 
                value="3" 
            />
            <label for="level-3">Level 3</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="level-4" 
                name="level" 
                value="4" 
            />
            <label for="level-4">Level 4</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="level-5" 
                name="level" 
                value="5" 
            />
            <label for="level-5">Level 5</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="level-6" 
                name="level" 
                value="6" 
            />
            <label for="level-6">Level 6</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="level-7" 
                name="level" 
                value="7" 
            />
            <label for="level-7">Level 7</label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-colour">
            <h3 class="advanced-search-label">Card Colour:</h3>
            <select class="dropdown-menu" 
                id="colour-operator">
                <option value="AND">must include</option>
                <option value="NOT">does not contain</option>
                <option value="OR">contains at least one</option>
            </select>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="red" 
                name="colourName" 
                value="red" 
            />
            <label for="red">Red</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="blue" 
                name="colourName" 
                value="blue" 
            />
            <label for="blue">Blue</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="yellow" 
                name="colourName" 
                value="yellow" 
            />
            <label for="yellow">Yellow</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="green" 
                name="colourName" 
                value="green" 
            />
            <label for="green">Green</label>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="black" 
                name="colourName" 
                value="black" 
            />
            <label for="black">Black</label>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="purple" 
                name="colourName" 
                value="purple" 
            />
            <label for="purple">Purple</label>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="white" 
                name="colourName" 
                value="white" 
            />
            <label for="white">White</label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-set">
            <h3 class="advanced-search-label">Card Set:</h3>
            <input 
                type="text" 
                v-model="searchInputs.setNumber"
                class="advanced-search-text-input" 
                id="card-set-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="block-number">
            <h3 class="advanced-search-label">Block:</h3>
            <input 
                type="text" 
                class="advanced-search-text-input" 
                id="block-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-rarity">
            <h3 class="advanced-search-label">Card Rarity:</h3>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="common" 
                name="rarity" 
                value="common" 
            />
            <label for="common">Common</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="uncommon" 
                name="rarity" 
                value="uncommon" 
            />
            <label for="uncommon">Uncommon</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="rare" 
                name="rarity" 
                value="rare" 
            />
            <label for="rare">Rare</label>
            <input 
                type="checkbox" 
                class="advanced-search-checkboxes"
                id="super" 
                name="rarity" 
                value="super" 
            />
            <label for="super">Super Rare</label>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="ultra" 
                name="rarity" 
                value="ultra" 
            />
            <label for="ultra">Ultra Rare</label>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="secret" 
                name="rarity" 
                value="secret" 
            />
            <label for="secret">Secret Rare</label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-cost">
            <h3 class="advanced-search-label">Card Cost:</h3>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="play-cost" 
                name="costType" 
                value="play-cost" 
            />
            <label for="play-cost">Play</label>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="use-cost" 
                name="costType" 
                value="use-cost" 
            />
            <label for="use-cost">Use</label>
            <input 
                type="text" 
                class="advanced-search-text-input" 
                id="cost-input" 
                name="cardCost"
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="digivolution-cost">
            <h3 class="advanced-search-label">Digivolution Cost:</h3>
            <input 
                type="text" 
                class="advanced-search-text-input" 
                id="digivolution-cost-input" 
            />
        </fieldset>
        
        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="digimon-power">
            <h3 class="advanced-search-label">Power:</h3>
            <input 
                type="text" 
                v-model="searchInputs.power"
                class="advanced-search-text-input" 
                id="power-input" 
                name="power"
            />
            <p>DP</p>
        </fieldset>   
        
        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="art-container">
            <h3 class="advanced-search-label">Card Art:</h3>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="regular-art" 
                name="cardTreatment" 
                value="regular-art" 
            />
            <label for="regular-art">Regular Art</label>
            <input
                type="checkbox"
                class="advanced-search-checkboxes"
                id="parallel-rare" 
                name="cardTreatment" 
                value="parallel-rare" 
            />
            <label for="parallel-rare">Parallel Rare</label>
        </fieldset>

        <button class="holographic-buttons" id="advanced-search-button">
            Search
        </button>
    </form>
</template>

<style scoped src="./advancedSearch.css" />