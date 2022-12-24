<script setup lang="ts">
import BackendUrl from '../SubConverterParams/BackendUrl.vue';
import RemoteConfig from '../SubConverterParams/RemoteConfig.vue';
import NodeName from '../SubConverterParams/NodeName.vue'
import FileName from '../SubConverterParams/FileName.vue';
import ExtraParams from '../SubConverterParams/ExtraParams.vue';
</script>

<template>
    <section class="sub-parts">
        <BackendUrl></BackendUrl>
    </section>
    <section class="sub-parts">
        <RemoteConfig></RemoteConfig>
    </section>
    <section class="sub-parts">
        <NodeName></NodeName>
    </section>
    <section class="sub-parts">
        <FileName></FileName>
    </section>
    <section class="sub-parts">
        <ExtraParams></ExtraParams>
    </section>
</template>

<style scoped>
.sub-parts {
    margin-top: 1vh;
}
</style>