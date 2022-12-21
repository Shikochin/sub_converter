<script setup lang="ts">
const remoteConfigs = ['No-Urltest', 'Urltest', 'Maying', 'Ytoo', 'FlowerCloud', 'Nexitally', 'SoCloud', 'ARK', 'ssrCloud', 'NeteaseUnblock(Only rule, No-Urltest)', 'Basic(Only GEOIP CN + Final)']
</script>

<template>
    <v-card title="Remote Config">
        <v-select label="Remote Config" :items="remoteConfigs"></v-select>
    </v-card>
</template>