<script setup lang="ts">
import BackendUrl from '../Params/BackendUrl.vue';
import RemoteConfig from '../Params/RemoteConfig.vue';
import NodeName from '../Params/NodeName.vue'
import FileName from '../Params/FileName.vue';
import ExtraParams from '../Params/ExtraParams.vue';
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