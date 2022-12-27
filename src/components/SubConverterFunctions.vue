<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';
import { proxyClients, remoteConfigs, extraParams } from '@/data';
import genSubLink from '@/funcs/genSubLink';
import parseFromUrl from '@/funcs/parseFromUrl';
import { SubConverterConfig } from '../../subconverter.config'
import { computed } from 'vue';

const paramsStore = useParamsStore()
const generatedSubLink = computed(() => genSubLink(paramsStore, proxyClients, remoteConfigs, extraParams, SubConverterConfig))

function importToClash() {
    const url = "clash://install-config?url="
    window.open(`${url}${encodeURIComponent(generatedSubLink.value)}`)
}
</script>

<template>
    <div id="functions" class="params">
        <v-btn color="button" :disabled="generatedSubLink === '' || paramsStore.basicParams.proxyClient !== 'Clash'"
            @click="importToClash">Import to Clash</v-btn>
        <v-btn color="button" @click="parseFromUrl(paramsStore, proxyClients, remoteConfigs, extraParams)">Parse from
            URL</v-btn>
    </div>
</template>

<style scoped>
#functions {
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: grid;
    gap: 1vw;
}

@media screen and (min-width: 1000px) {

    #functions {
        margin-top: 5vh;
        margin-bottom: 5vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1vw;
    }

}
</style>