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
    <table id="card-sets">
        <thead>
            <tr>
                <th>Set Number</th>
                <th>Set Name</th>
                <th>Block</th>
                <th>Release Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="set in sets" :key="set.id">
                <td>{{ set.setNumber }}</td>
                <td>{{ set.setName }}</td>
                <td>{{ set.blockNumber }}</td>
                <td>{{ set.printDate }}</td>
            </tr>
        </tbody>
    </table>
</template>