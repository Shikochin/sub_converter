<script setup lang="ts">
import { useCustomFeaturesStore } from '@/stores/customFeaturesStore';
import { useProxyClientsStore } from '@/stores/proxyClientsStore';

const customFeaturesStore = useCustomFeaturesStore()
const proxyClientsStore = useProxyClientsStore()

</script>

<template>

    <v-card title="Custom Features">
        <v-select chips multiple
            :items="proxyClientsStore.proxyClient === 'Clash' ? customFeaturesStore.customFeatures : ['Surge.DoH', 'NeteaseCloud']"
            label="Custom Features" v-model="customFeaturesStore.choosedFeatures"></v-select>
    </v-card>

</template>