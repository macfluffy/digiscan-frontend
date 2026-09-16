<script setup>
    import { ref, onMounted } from "vue";
    import { getAllSets } from "../../api/cardSetServices.js";
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const sets = ref([]);
    const loading = ref(false);
    const error = ref(null);

    function gotoSet(setNumber) {
        router.push(`/set/${setNumber}`);
    }

    function isSingleDigit(blockNumber) {
        return blockNumber < 10;
    }

    onMounted(async () => {
        loading.value = true;
        try {
            sets.value = await getAllSets();
        }
        catch (errorCode) {
            error.value = `${errorCode}: Failed to load sets.`;
        }
        finally {
            loading.value = false;
        }
    });
</script>

<template>
    <table class="center" id="card-sets">
        <thead>
            <tr>
                <th>Set Number</th>
                <th>Set Name</th>
                <th>Block</th>
                <th>Release Date</th>
            </tr>
        </thead>
        <tbody>
            <tr class="hoverable-row" 
                v-for="set in sets" 
                :key="set.id" 
                @click="gotoSet(set.setNumber)">
                <td class="set-number">{{ set.setNumber }}</td>
                <td>{{ set.setName }}</td>
                <td class="block-number">
                    &lt;
                    <template v-if="isSingleDigit(set.blockNumber)">0</template>
                    {{ set.blockNumber }}&gt;
                </td>
                <td class="print-date">{{ set.printDate }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped src="./sets.css" />