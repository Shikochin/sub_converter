<script setup lang="ts">
import SubLinks from '../SubConverterParams/SubLinks.vue';
import ProxyClient from '../SubConverterParams/ProxyClient.vue';
import SubConverterResults from '../SubConverterResults.vue';
import SubConverterFunctions from '../SubConverterFunctions.vue';
</script>

<template>
    <SubLinks></SubLinks>
    <ProxyClient></ProxyClient>
    <v-divider id="divider"></v-divider>
    <SubConverterResults></SubConverterResults>
    <SubConverterFunctions></SubConverterFunctions>
</template>

<style scoped>
#divider {
    margin-top: 3vh;
    margin-bottom: 3vh;
}
</style>