<script setup lang="ts">
import SubConverterHeader from './components/SubConverterHeader.vue';
import SubConverterParams from './components/SubConverterParamsSets/SubConverterParams.vue';
</script>

<template>
    <main>
        <SubConverterHeader></SubConverterHeader>
        <SubConverterParams></SubConverterParams>
    </main>
</template>

<style>
main {
    padding: 1vw;
    background-color: #e2e8f0;
}
</style>
