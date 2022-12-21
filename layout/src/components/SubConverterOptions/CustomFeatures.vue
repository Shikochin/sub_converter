<script setup lang="ts">
const features = ['Surge.DoH', 'Clash.DoH', 'NeteaseCloud']
</script>

<template>

    <v-card title="Custom Features">
        <v-select chips multiple :items="features" label="Custom Features"></v-select>
    </v-card>

</template>