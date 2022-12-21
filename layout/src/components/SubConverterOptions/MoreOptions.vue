<script setup lang="ts">
const options = ['Emoji', 'Skip certificate verification', 'Enable UDP', 'Node type', 'Sort nodes', 'Filter illegal nodes']
</script>

<template>

    <v-card title="More Options">
        <v-select chips multiple :items="options" label="More Options"></v-select>
    </v-card>

</template>