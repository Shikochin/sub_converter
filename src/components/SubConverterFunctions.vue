<script setup lang="ts">
import { useResultsStore } from '@/stores/resultsStore';
import { useOthersStore } from '@/stores/othersStore';
import { useProxyClientsStore } from '@/stores/proxyClientsStore';
import { useCustomFeaturesStore } from '@/stores/customFeaturesStore';
import { useRemoteConfigsStore } from '@/stores/remoteConfigsStore';
import { useMoreOptionsStore } from '@/stores/moreOptionsStore';
import Swal from 'sweetalert2'

const resultStore = useResultsStore()
const othersStore = useOthersStore()
const proxyClientsStore = useProxyClientsStore()
const customFeaturesStore = useCustomFeaturesStore()
const remoteConfigsStore = useRemoteConfigsStore()
const moreOptionsStore = useMoreOptionsStore()

function genSubLink() {
    const backendAddress = othersStore.backendAddress === '' ? "https://api.wcc.best/sub?" : othersStore.backendAddress

    const subscriptionLinks = othersStore.subscriptionLinks.replace(/(\n|\r|\n\r)/g, "|")

    resultStore.customSubscriptionLink = `${backendAddress}target=${proxyClientsStore.proxyClients.get(proxyClientsStore.proxyClient)}&url=${encodeURIComponent(subscriptionLinks)}&insert=${customFeaturesStore.choosedFeatures.includes("NeteaseCloud")}`

    if (othersStore.mode === 'advanced') {
        if (remoteConfigsStore.remoteConfig !== "") {
            resultStore.customSubscriptionLink += `&config=${encodeURIComponent(remoteConfigsStore.remoteConfigs.get(remoteConfigsStore.remoteConfig) as string)}`
        }
        if (othersStore.nodeName.exclude !== "") {
            resultStore.customSubscriptionLink += `&exclude=${encodeURIComponent(othersStore.nodeName.exclude)}`
        }
        if (othersStore.nodeName.include !== "") {
            resultStore.customSubscriptionLink += `&include=${encodeURIComponent(othersStore.nodeName.include)}`
        }
        if (othersStore.returnedFileName !== "") {
            resultStore.customSubscriptionLink += `&filename=${encodeURIComponent(othersStore.returnedFileName)}`
        }
        if (moreOptionsStore.choosedOptions.includes("Node type")) {
            resultStore.customSubscriptionLink += "&append_type=true"
        }
        resultStore.customSubscriptionLink += `&emoji=${moreOptionsStore.choosedOptions.includes('Emoji')}&list=${othersStore.exportAsNodeList}&scv=${moreOptionsStore.choosedOptions.includes('Skip certificate verification')}&fdn=${moreOptionsStore.choosedOptions.includes("Filter illegal nodes")}&sort=${moreOptionsStore.choosedOptions.includes("Sort nodes")}`

        if (moreOptionsStore.choosedOptions.includes('Enable UDP')) {
            resultStore.customSubscriptionLink += "&udp=true"
        }

        if (customFeaturesStore.choosedFeatures.includes("Surge.DoH")) {
            resultStore.customSubscriptionLink += "&surge.doh=true"
        }

        if (proxyClientsStore.proxyClient === 'Clash') {
            if (customFeaturesStore.choosedFeatures.includes("Clash.DoH")) {
                resultStore.customSubscriptionLink += "&clash.doh=true"
            }
            resultStore.customSubscriptionLink += `&new_name=true`
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
            othersStore.backendAddress = `${url.origin}${url.pathname}?`
            const params = new URLSearchParams(url.search)

            const target = params.get('target') ?? ''
            if (target === '') {
                proxyClientsStore.proxyClient = 'Clash'
            } else if (target === 'surge') {
                const version = params.get('ver') ?? '4'
                proxyClientsStore.proxyClient = proxyClientsStore.getProxyClientKey(`surge&ver=${version}`)
            } else {
                proxyClientsStore.proxyClient = proxyClientsStore.getProxyClientKey(target)
            }

            othersStore.subscriptionLinks = params.get('url') ?? ''

            const choosedFeatures = []
            if (params.get('surge.doh') === 'true') {
                choosedFeatures.push('Surge.DoH')
            }
            if (params.get('clash.doh') === 'true') {
                choosedFeatures.push('Clash.DoH')
            }
            if (params.get('insert') === 'true') {
                choosedFeatures.push('NeteaseCloud')
            }
            customFeaturesStore.choosedFeatures = choosedFeatures

            const remoteConfig = params.get('config') ?? ''
            if (remoteConfig == '') {
                remoteConfigsStore.remoteConfig = ''
            } else {
                remoteConfigsStore.remoteConfig = remoteConfigsStore.getRemoteConfigKey(remoteConfig)
            }

            othersStore.nodeName.exclude = params.get('exclude') ?? ''
            othersStore.nodeName.include = params.get('include') ?? ''
            othersStore.returnedFileName = params.get('filename') ?? ''

            const choosedOptions = []
            if (params.get('emoji') === 'true') {
                choosedOptions.push('Emoji')
            }
            if (params.get('scv') === 'true') {
                choosedOptions.push('Skip certificate verification')
            }
            if (params.get('udp') === 'true') {
                choosedOptions.push('Enable UDP')
            }
            if (params.get('append_type') === 'true') {
                choosedOptions.push('Node type')
            }
            if (params.get('sort') === 'true') {
                choosedOptions.push('Sort nodes')
            }
            if (params.get('fdn') === 'true') {
                choosedOptions.push('Filter illegal nodes')
            }
            moreOptionsStore.choosedOptions = choosedOptions

            othersStore.exportAsNodeList = params.get('list') === 'true'

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
    <div id="functions">
        <v-btn variant="flat" color="pink"
            :disabled="othersStore.subscriptionLinks === '' || proxyClientsStore.proxyClient === ''"
            @click="genSubLink">Generate
            subscription link</v-btn>
        <v-btn variant="flat" color="primary"
            :disabled="resultStore.customSubscriptionLink === '' || proxyClientsStore.proxyClient !== 'Clash'"
            @click="importToClash">Import to
            Clash</v-btn>
        <v-btn variant="flat" color="primary" @click="parseFromUrl">Parse from URL</v-btn>
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