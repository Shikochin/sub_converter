<script setup lang="ts">
import SubConverterHeader from './components/SubConverterHeader.vue';
import SubConverterModes from './components/SubConverterModes/SubConverterModes.vue';
</script>

<template>
    <main>
        <SubConverterHeader></SubConverterHeader>
        <SubConverterModes></SubConverterModes>
    </main>
</template>

<style scoped>
main {
    padding: 1vw;
}
</style>
