<script setup lang="ts">
import { useOthersStore } from '@/stores/othersStore';

const store = useOthersStore()
</script>


<template>
    <v-switch color="black" label="Export As Node List" v-model="store.exportAsNodeList"></v-switch>
</template>