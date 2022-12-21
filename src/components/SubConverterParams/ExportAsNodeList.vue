<script setup lang="ts">
import { useOthersStore } from '@/stores/othersStore';

const store = useOthersStore()
</script>


<template>
    <v-card>
        <v-switch color="black" label="Export As Node List" v-model="store.exportAsNodeList"
            class="switches"></v-switch>
    </v-card>
</template>

<style scoped>
.switches {
    padding-left: 1vw;
}
</style>