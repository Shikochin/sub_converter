<script setup lang="ts">
import { useProxyClientsStore } from '@/stores/proxyClientsStore';

const store = useProxyClientsStore()

</script>

<template>
    <v-card title="Proxy Client">
        <v-select label="Proxy Client" :items="store.proxyClientsNames" v-model="store.proxyClient"></v-select>
    </v-card>
</template>