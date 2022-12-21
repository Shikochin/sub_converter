<script setup lang="ts">
import SubLinks from '../SubConverterParams/SubLinks.vue';
import ProxyClient from '../SubConverterParams/ProxyClient.vue';
import BackendAddress from '../SubConverterParams/BackendAddress.vue';
import RemoteConfig from '../SubConverterParams/RemoteConfig.vue';
import NodeName from '../SubConverterParams/NodeName.vue'
import ReturnedFileName from '../SubConverterParams/ReturnedFileName.vue';
import MoreOptions from '../SubConverterParams/MoreOptions.vue';
import CustomFeatures from '../SubConverterParams/CustomFeatures.vue';
import ExportAsNodeList from '../SubConverterParams/ExportAsNodeList.vue'
import SubConverterResults from '../SubConverterResults.vue';
import SubConverterFunctions from '../SubConverterFunctions.vue';
</script>

<template>
    <SubLinks></SubLinks>
    <ProxyClient></ProxyClient>
    <BackendAddress></BackendAddress>
    <RemoteConfig></RemoteConfig>
    <NodeName></NodeName>
    <ReturnedFileName></ReturnedFileName>
    <MoreOptions></MoreOptions>
    <CustomFeatures></CustomFeatures>
    <ExportAsNodeList></ExportAsNodeList>
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