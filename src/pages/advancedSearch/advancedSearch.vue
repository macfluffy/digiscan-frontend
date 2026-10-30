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
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="cardType" 
                    value="digiegg" 
                />
                Digi-Egg
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="cardType" 
                    value="digimon" 
                />
                Digimon
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="cardType" 
                    value="tamer" 
                />
                Tamer
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="cardType" 
                    value="option" 
                />
                Option
            </label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-level">
            <h3 class="advanced-search-label">Card Level</h3>
            <p>Card includes:</p>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="level" 
                    value="2" 
                />
                Level 2
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="level" 
                    value="3" 
                />
                Level 3
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="level" 
                    value="4" 
                />
                Level 4
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="level" 
                    value="5" 
                />
                Level 5
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="level" 
                    value="6" 
                />
                Level 6
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="level" 
                    value="7" 
                />
                Level 7
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
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="colourName" 
                    value="red" 
                />
                Red
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="colourName" 
                    value="blue" 
                />
                Blue
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="colourName" 
                    value="yellow" 
                />
                Yellow
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="colourName" 
                    value="green" 
                />
                Green
            </label>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="colourName" 
                    value="black" 
                />
                Black
            </label>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="colourName" 
                    value="purple" 
                />
                Purple
            </label>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="colourName" 
                    value="white" 
                />
                White
            </label>
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
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="rarity" 
                    value="common" 
                />
                Common
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="rarity" 
                    value="uncommon" 
                />
                Uncommon
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="rarity" 
                    value="rare" 
                />
                Rare
            </label>
            <label>
                <input 
                    type="checkbox" 
                    class="advanced-search-checkboxes"
                    name="rarity" 
                    value="super" 
                />
                Super Rare
            </label>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="rarity" 
                    value="ultra" 
                />
                Ultra Rare
            </label>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="rarity" 
                    value="secret" 
                />
                Secret Rare
            </label>
        </fieldset>

        <fieldset class="flex-container flex-rows advanced-search-input" 
            id="card-cost">
            <h3 class="advanced-search-label">Card Cost:</h3>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="costType" 
                    value="play-cost" 
                />
                Play
            </label>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="costType" 
                    value="use-cost" 
                />
                Use
            </label>
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
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="cardTreatment" 
                    value="regular-art" 
                />
                Regular Art
            </label>
            <label>
                <input
                    type="checkbox"
                    class="advanced-search-checkboxes"
                    name="cardTreatment" 
                    value="parallel-rare" 
                />
                Parallel Rare
            </label>
        </fieldset>

        <button class="holographic-buttons" id="advanced-search-button">
            Search
        </button>
    </form>
</template>

<style scoped src="./advancedSearch.css" />