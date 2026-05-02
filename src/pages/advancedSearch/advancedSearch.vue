<template>
    <section class="flex-container flex-rows" id="card-name">
        <h3>Card Name:</h3>
        <input type="text" id="card-name-input" />
    </section>

    <section class="flex-container flex-rows" id="card-effects">
        <h3>Card Effects:</h3>
        <input 
            type="checkbox" 
            class="text-type-checkboxes"
            id="card-text" 
            name="card-text" 
            value="card-text" 
        />
        <label for="card-text">Card Text</label>
        <input 
            type="checkbox" 
            class="text-type-checkboxes"
            id="inheritable-effects" 
            name="inheritable-effects" 
            value="inheritable-effects" 
        />
        <label for="inheritable-effects">Inheritable Effects</label>
        <input type="text" id="card-effects-input" />
    </section>

    <section class="flex-container flex-rows" id="card-type">
        <h3>Card Type:</h3>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="digi-egg" 
            name="digi-egg" 
            value="digi-egg" 
        />
        <label for="digi-egg">Digi-Egg</label>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="digimon" 
            name="digimon" 
            value="digimon" 
        />
        <label for="digimon">Digimon</label>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="tamer" 
            name="tamer" 
            value="tamer" 
        />
        <label for="tamer">Tamer</label>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="options" 
            name="options" 
            value="options" 
        />
        <label for="options">Options</label>
    </section>

    <section class="flex-container flex-rows" id="card-level">
        <h3>Card Level</h3>
        <p>Card includes:</p>
        <input 
            type="checkbox" 
            class="level-checkboxes"
            id="level-2" 
            name="level-2" 
            value="2" 
        />
        <label for="level-2">Level 2</label>
        <input 
            type="checkbox" 
            class="level-checkboxes"
            id="level-3" 
            name="level-3" 
            value="3" 
        />
        <label for="level-3">Level 3</label>
        <input 
            type="checkbox" 
            class="level-checkboxes"
            id="level-4" 
            name="level-4" 
            value="4" 
        />
        <label for="level-4">Level 4</label>
        <input 
            type="checkbox" 
            class="level-checkboxes"
            id="level-5" 
            name="level-5" 
            value="5" 
        />
        <label for="level-5">Level 5</label>
        <input 
            type="checkbox" 
            class="level-checkboxes"
            id="level-6" 
            name="level-6" 
            value="6" 
        />
        <label for="level-6">Level 6</label>
    </section>

    <section class="flex-container flex-rows" id="card-colour">
        <h3>Card Colour:</h3>
        <select id="colour-operator">
            <option value="AND">must include</option>
            <option value="NOT">does not contain</option>
            <option value="OR">contains at least one</option>
        </select>
        <input 
            type="checkbox" 
            class="colour-checkboxes"
            id="red" 
            name="red" 
            value="red" 
        />
        <label for="red">Red</label>
        <input 
            type="checkbox" 
            class="colour-checkboxes"
            id="blue" 
            name="blue" 
            value="3" 
        />
        <label for="blue">Blue</label>
        <input 
            type="checkbox" 
            class="colour-checkboxes"
            id="yellow" 
            name="yellow" 
            value="yellow" 
        />
        <label for="yellow">Yellow</label>
        <input 
            type="checkbox" 
            class="colour-checkboxes"
            id="green" 
            name="green" 
            value="green" 
        />
        <label for="green">Green</label>
        <input
            type="checkbox"
            class="colour-checkboxes"
            id="black" 
            name="black" 
            value="black" 
        />
        <label for="black">Black</label>
        <input
            type="checkbox"
            class="colour-checkboxes"
            id="purple" 
            name="purple" 
            value="purple" 
        />
        <label for="purple">Purple</label>
        <input
            type="checkbox"
            class="colour-checkboxes"
            id="white" 
            name="white" 
            value="white" 
        />
        <label for="white">White</label>
    </section>

    <section class="flex-container flex-rows" id="card-set">
        <h3>Card Set:</h3>
        <input type="text" id="card-set-input" />
    </section>

    <section class="flex-container flex-rows" id="block-number">
        <h3>Block:</h3>
        <input type="text" id="block-input" />
    </section>

    <section class="flex-container flex-rows" id="card-rarity">
        <h3>Card Rarity:</h3>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="common" 
            name="common" 
            value="common" 
        />
        <label for="common">Common</label>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="uncommon" 
            name="uncommon" 
            value="uncommon" 
        />
        <label for="uncommon">Uncommon</label>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="rare" 
            name="rare" 
            value="rare" 
        />
        <label for="rare">Rare</label>
        <input 
            type="checkbox" 
            class="rarity-checkboxes"
            id="super" 
            name="super" 
            value="super" 
        />
        <label for="super">Super Rare</label>
        <input
            type="checkbox"
            class="rarity-checkboxes"
            id="ultra" 
            name="ultra" 
            value="ultra" 
        />
        <label for="ultra">Ultra Rare</label>
        <input
            type="checkbox"
            class="rarity-checkboxes"
            id="secret" 
            name="secret" 
            value="secret" 
        />
        <label for="secret">Secret Rare</label>
    </section>

    <section class="flex-container flex-rows" id="card-cost">
        <h3>Card Cost:</h3>
        <input
            type="checkbox"
            class="rarity-checkboxes"
            id="play-cost" 
            name="play-cost" 
            value="play-cost" 
        />
        <label for="play-cost">Play</label>
        <input
            type="checkbox"
            class="rarity-checkboxes"
            id="use-cost" 
            name="use-cost" 
            value="use-cost" 
        />
        <label for="use-cost">Use</label>
        <input type="text" id="cost-input" />
    </section>

    <section class="flex-container flex-rows" id="digivolution-cost">
        <h3>Digivolution Cost:</h3>
        <input type="text" id="digivolution-cost-input" />
    </section>
    
    <section class="flex-container flex-rows" id="digimon-power">
        <h3>Power:</h3>
        <input type="text" id="power-input" /><p>DP</p>
    </section>   
    
    <section class="flex-container flex-rows" id="art-container">
        <h3>Card Art:</h3>
        <input
            type="checkbox"
            class="card-art-checkboxes"
            id="regular-art" 
            name="regular-art" 
            value="regular-art" 
        />
        <label for="regular-art">Regular Art</label>
        <input
            type="checkbox"
            class="card-art-checkboxes"
            id="parallel-rare" 
            name="parallel-rare" 
            value="parallel-rare" 
        />
        <label for="parallel-rare">Parallel Rare</label>
    </section>
</template>

<style scoped src="./advancedSearch.css" />