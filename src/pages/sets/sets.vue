<script setup>
    import { ref, onMounted } from "vue";
    import { getAllSets } from "../../api/cardSetServices.js";

    const sets = ref([]);
    const loading = ref(false);
    const error = ref(null);

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
            <tr class="hoverable-row" v-for="set in sets" :key="set.id">
                <td>{{ set.setNumber }}</td>
                <td>{{ set.setName }}</td>
                <td class="block-number">{{ set.blockNumber }}</td>
                <td class="print-date">{{ set.printDate }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped src="./sets.css" />