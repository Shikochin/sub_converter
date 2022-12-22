<script setup lang="ts">
import BackendUrl from '../SubConverterParams/BackendUrl.vue';
import RemoteConfig from '../SubConverterParams/RemoteConfig.vue';
import NodeName from '../SubConverterParams/NodeName.vue'
import ReturnedFileName from '../SubConverterParams/ReturnedFileName.vue';
import MoreOptions from '../SubConverterParams/MoreOptions.vue';
import CustomFeatures from '../SubConverterParams/CustomFeatures.vue';
import ExportAsNodeList from '../SubConverterParams/ExportAsNodeList.vue'
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
        <ReturnedFileName></ReturnedFileName>
    </section>
    <section class="sub-parts">
        <MoreOptions></MoreOptions>
    </section>
    <section class="sub-parts">
        <CustomFeatures></CustomFeatures>
    </section>
    <section class="sub-parts">
        <ExportAsNodeList></ExportAsNodeList>
    </section>
</template>

<style scoped>
.sub-parts {
    margin-top: 1vh;
}
</style>