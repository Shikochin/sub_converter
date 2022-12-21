<script setup lang="ts">
import SubLinks from '../SubConverterOptions/SubLinks.vue';
import ProxyClient from '../SubConverterOptions/ProxyClient.vue';
import BackendAddress from '../SubConverterOptions/BackendAddress.vue';
import RemoteConfig from '../SubConverterOptions/RemoteConfig.vue';
import NodeName from '../SubConverterOptions/NodeName.vue'
import FileName from '../SubConverterOptions/FileName.vue';
import MoreOptions from '../SubConverterOptions/MoreOptions.vue';
import CustomFeatures from '../SubConverterOptions/CustomFeatures.vue';
import ExportAsNodeList from '../SubConverterOptions/ExportAsNodeList.vue'
import SubConverterResults from '../SubConverterResults.vue';
import SubConverterFunctions from '../SubConverterFunctions.vue';
</script>

<template>
    <SubLinks></SubLinks>
    <ProxyClient></ProxyClient>
    <BackendAddress></BackendAddress>
    <RemoteConfig></RemoteConfig>
    <NodeName></NodeName>
    <FileName></FileName>
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