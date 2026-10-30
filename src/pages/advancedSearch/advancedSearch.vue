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

    const types = [
        { value: 'digiegg', label: 'Digi-Egg' },
        { value: 'digimon', label: 'Digimon' },
        { value: 'tamer', label: 'Tamer' },
        { value: 'option', label: 'Option' }
    ];

    const colours = [
        'red',
        'blue',
        'yellow',
        'green',
        'black',
        'purple',
        'white'
    ];

    const levels = [2, 3, 4, 5, 6, 7];
    const rarities = [
        { value: 'common', label: 'Common' },
        { value: 'uncommon', label: 'Uncommon' },
        { value: 'rare', label: 'Rare' },
        { value: 'superRare', label: 'Super Rare' },
        { value: 'ultraRare', label: 'Ultra Rare' },
        { value: 'secretRare', label: 'Secret Rare' },
    ];

    const cardCostTypes = [
        { value: 'play-cost', label: 'Play'},
        { value: 'use-cost', label: 'Use'}
    ];

    const treatments = [
        { value:'regular-art', label: 'Regular Art'},
        { value:'parallel-rare', label: 'Parallel Rare'}
    ];

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
                name="cardName"
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
                name="cardText"
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
                name="inheritable"
                id="inheritable-effects-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-type">
            <h3 class="advanced-search-label">Card Type:</h3>
            <label v-for="type in types" :key="type.value">
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="cardType" 
                    :value="type.value" 
                />
                {{ type.label }}
            </label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-level">
            <h3 class="advanced-search-label">Card Level</h3>
            <p>Card includes:</p>
            <label v-for="level in levels" :key="level">
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="level" 
                    :value="level" 
                />
                Level {{ level }}
            </label>
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
            <label v-for="colour in colours" :key="colour" class="colour-options">
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="colourName"
                    :value="colour"
                />
                {{ colour }}
            </label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-set">
            <h3 class="advanced-search-label">Card Set:</h3>
            <input 
                type="text" 
                v-model="searchInputs.setNumber"
                class="advanced-search-text-input" 
                name="cardSet"
                id="card-set-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="block-number">
            <h3 class="advanced-search-label">Block:</h3>
            <input 
                type="text" 
                class="advanced-search-text-input" 
                name="blockNumber"
                id="block-input" 
            />
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-rarity">
            <h3 class="advanced-search-label">Card Rarity:</h3>
            <label v-for="rarity in rarities" :key="rarity.value">
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="rarity" 
                    :value="rarity.value" 
                />
                {{ rarity.label }}
            </label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-cost">
            <h3 class="advanced-search-label">Card Cost:</h3>
            <label v-for="cardCostType in cardCostTypes" :key="cardCostType.value">
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="costType" 
                    :value="cardCostType.value" 
                />
                {{ cardCostType.label }}
            </label>
            <input 
                type="text" 
                class="advanced-search-text-input" 
                name="cardCost"
                id="cost-input" 
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
                name="power"
                id="power-input" 
            />
            <p>DP</p>
        </fieldset>   
        
        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="art-container">
            <h3 class="advanced-search-label">Card Art:</h3>
            <label v-for="treatment in treatments" :key="treatment.value">
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="cardTreatment" 
                    :value="treatment.value" 
                />
                {{ treatment.label }}
            </label>
        </fieldset>

        <button class="holographic-buttons" id="advanced-search-button">
            Search
        </button>
    </form>
</template>

<style scoped src="./advancedSearch.css" />