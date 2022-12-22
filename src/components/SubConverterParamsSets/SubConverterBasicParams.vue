<script setup lang="ts">
import SubLinks from '../SubConverterParams/SubLinks.vue';
import ProxyClient from '../SubConverterParams/ProxyClient.vue';
</script>

<template>
    <section class="sub-parts">
        <SubLinks></SubLinks>
    </section>
    <section class="sub-parts">
        <ProxyClient></ProxyClient>
    </section>
</template>

<style scoped>
.sub-parts {
    margin-top: 1vh;
}
</style>