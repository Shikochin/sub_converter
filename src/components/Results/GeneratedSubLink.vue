<script setup lang="ts">
import genSubLink from '@/funcs/genSubLink';
import { proxyClients, remoteConfigs, extraParams } from '@/data';
import { SubConverterConfig } from '../../../subconverter.config';
import { useParamsStore } from '@/stores/paramsStore';
import { computed } from 'vue'

const paramsStore = useParamsStore()
const generatedSubLink = computed(() => genSubLink(paramsStore.data, proxyClients, remoteConfigs, extraParams, SubConverterConfig))
</script>

<template>
    <v-text-field readonly v-model="generatedSubLink"></v-text-field>
</template>

<style scoped>
#copy-field {
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 1vw
}
</style>