<script setup lang="ts">
const proxyClients = ['Clash', 'ClashR', 'Surge2', 'Surge3', 'Surge4', 'Quantumult', 'QuantumultX', 'Surfboard', 'Loon', 'SSAndroid', 'V2Ray', 'ShadowSocks', 'ShadowSocksR', 'ShadowSocksD']
</script>

<template>
    <v-card title="Proxy Client">
        <v-select label="Proxy Client" :items="proxyClients"></v-select>
    </v-card>
</template>