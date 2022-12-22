<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useResultsStore } from '@/stores/resultsStore';
import Swal from 'sweetalert2';

const store = useResultsStore()

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

    <v-card title="Custom Subscription" id="copy-field" class="params" color="primary">
        <br>
        <v-text-field disabled variant="outlined" v-model="store.customSubscriptionLink"></v-text-field>
        <v-btn :disabled="store.customSubscriptionLink === ''"
            @click="copy(store.customSubscriptionLink).then(copyToast)" color="button">Copy</v-btn>
    </v-card>

</template>

<style scoped>
#copy-field {
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 1vw
}
</style>