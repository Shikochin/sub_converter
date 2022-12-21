<script setup lang="ts">
import { ref } from 'vue';
const exportAsNodeList = ref(false)
</script>


<template>
    <v-card>
        <v-switch color="black" label="Export As Node List" v-model="exportAsNodeList" class="switches"></v-switch>
    </v-card>
</template>

<style scoped>
.switches {
    padding-left: 1vw;
}
</style>