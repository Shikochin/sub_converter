<script setup lang="ts">
import genSubLink from '@/funcs/genSubLink';
import { proxyClients, remoteConfigs, extraParams } from '@/data';
import { SubConverterConfig } from '../../../subconverter.config';
import { useParamsStore } from '@/stores/paramsStore';
import { computed } from 'vue'

import { useClipboard } from '@vueuse/core'
import Swal from 'sweetalert2';

const paramsStore = useParamsStore()
const generatedSubLink = computed(() => genSubLink(paramsStore, proxyClients, remoteConfigs, extraParams, SubConverterConfig))

const { copy } = useClipboard()
async function copyToast() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'green',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    })
    await Toast.fire({
        icon: 'success',
        title: 'Copied!'
    })
}
</script>

<template>

    <v-card title="Generated Subscription Link" id="copy-field" class="params" color="primary">
        <br>
        <v-text-field disabled variant="outlined" v-model="generatedSubLink"></v-text-field>
        <v-btn @click="copy(generatedSubLink).then(copyToast)" color="button">Copy</v-btn>
    </v-card>

</template>

<style scoped>
#copy-field {
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 1vw
}
</style>