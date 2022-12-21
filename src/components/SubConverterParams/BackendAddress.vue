<script setup lang="ts">
import { useOthersStore } from '@/stores/othersStore';

const store = useOthersStore()
</script>

<template>
    <v-card title="Backend Address"
        subtitle="Recommend to build your own back-end service, default: https://api.wcc.best/sub?">
        <v-text-field label="Backend Address" v-model="store.backendAddress"></v-text-field>
        <v-btn href="https://github.com/tindy2013/subconverter/releases" color="grey" id="btn">Project
            repository</v-btn>
    </v-card>
</template>

<style scoped>
#btn {
    margin-bottom: 2vh;
}
</style>