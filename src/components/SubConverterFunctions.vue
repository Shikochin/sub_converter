<script setup lang="ts">
import { useResultsStore } from '@/stores/resultsStore';
import { useParamsStore } from '@/stores/paramsStore';
import proxyClients from '@/data/proxyClients';
import remoteConfigs from '@/data/remoteConfigs';
import moreParams from '@/data/moreParams';
import getFirstKey from '@/funcs/getFirstKey';
import Swal from 'sweetalert2'

const resultStore = useResultsStore()
const paramsStore = useParamsStore()

function genSubLink() {

    resultStore.customSubscriptionLink = `${paramsStore.backendUrl}target=${proxyClients.get(paramsStore.basicParams.proxyClient)}&url=${encodeURIComponent(paramsStore.subscriptionLinks)}`

    if (paramsStore.advanced) {
        if (paramsStore.advancedParams.remoteConfig !== "") {
            resultStore.customSubscriptionLink += `&config=${encodeURIComponent(remoteConfigs.get(paramsStore.advancedParams.remoteConfig) as string)}`
        }
        if (paramsStore.advancedParams.nodeName.include !== "") {
            resultStore.customSubscriptionLink += `&include=${encodeURIComponent(paramsStore.advancedParams.nodeName.include)}`
        }
        if (paramsStore.advancedParams.nodeName.exclude !== "") {
            resultStore.customSubscriptionLink += `&exclude=${encodeURIComponent(paramsStore.advancedParams.nodeName.exclude)}`
        }
        if (paramsStore.advancedParams.fileName !== "") {
            resultStore.customSubscriptionLink += `&filename=${encodeURIComponent(paramsStore.advancedParams.fileName)}`
        }
        const { choosedParams } = paramsStore.advancedParams
        for (const [k, v] of moreParams) {
            if (choosedParams.includes(k)) {
                resultStore.customSubscriptionLink += `&${v}=true`
            }
        }
    }
}

function importToClash() {
    const url = "clash://install-config?url="
    window.open(`${url}${encodeURIComponent(resultStore.customSubscriptionLink)}`)
}

async function parseFromUrl() {
    Swal.fire({
        input: 'textarea',
        inputLabel: 'Parse old subscription and fill in the page',
        inputPlaceholder: 'Old subscriptions',
        inputAttributes: {
            'aria-label': 'Old subscriptions'
        },
        showCancelButton: true
    }).then(async ({ value }) => {
        if (value.includes('target')) {
            let url: URL;
            try {
                url = new URL(value)
            } catch (e) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter a legal subscription link!',
                })
                console.error(e)
                throw new Error("Please enter a legal subscription link!");
            }
            paramsStore.advancedParams.backendUrl = `${url.origin}${url.pathname}?`
            const params = new URLSearchParams(url.search)

            const target = params.get('target') ?? ''
            if (target === 'surge') {
                const version = params.get('ver') ?? '4'
                paramsStore.basicParams.proxyClient = getFirstKey(`surge&ver=${version}`, proxyClients) ?? ''
            } else {
                paramsStore.basicParams.proxyClient = getFirstKey(target, proxyClients) ?? ''
            }

            paramsStore.basicParams.subscriptionLinks = params.get('url') ?? ''

            const remoteConfig = params.get('config') ?? ''
            paramsStore.advancedParams.remoteConfig = getFirstKey(remoteConfig, remoteConfigs) ?? ''

            paramsStore.advancedParams.nodeName.exclude = params.get('exclude') ?? ''
            paramsStore.advancedParams.nodeName.include = params.get('include') ?? ''
            paramsStore.advancedParams.fileName = params.get('filename') ?? ''

            const choosedParams = []
            const paramsNames = Array.from(params.keys())
            for (const [k, v] of moreParams) {
                if (paramsNames.includes(v)) {
                    choosedParams.push(k)
                }
            }
            paramsStore.advancedParams.choosedParams = choosedParams

            paramsStore.advancedParams.exportAsNodeList = params.get('list') === 'true'

            resultStore.customSubscriptionLink = value

            await Swal.fire('Result', 'Link parsed, all parameters have been filled', 'success')
        } else {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a legal subscription link!',
            })
        }
    })
}
</script>

<template>
    <div id="functions" class="params">
        <v-btn color="button"
            :disabled="paramsStore.basicParams.subscriptionLinks === '' || paramsStore.basicParams.proxyClient === ''"
            @click="genSubLink">Generate
            subscription link</v-btn>
        <v-btn color="button"
            :disabled="resultStore.customSubscriptionLink === '' || paramsStore.basicParams.proxyClient !== 'Clash'"
            @click="importToClash">Import to
            Clash</v-btn>
        <v-btn color="button" @click="parseFromUrl">Parse from URL</v-btn>
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
        grid-template-columns: repeat(3, 1fr);
        gap: 1vw;
    }

}
</style>