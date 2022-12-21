<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useResultsStore } from '@/stores/resultsStore';

const store = useResultsStore()

const { copy } = useClipboard()

function copyAlert() {
    alert('Custom subscription link already copied!')
}

</script>

<template>

    <v-card title="Custom Subscription" id="copy-field">
        <br>
        <v-text-field disabled variant="outlined" v-model="store.customSubscriptionLink"></v-text-field>
        <v-btn :disabled="store.customSubscriptionLink === ''"
            @click="copy(store.customSubscriptionLink).then(copyAlert)" variant="flat" color="secondary">Copy</v-btn>
    </v-card>

</template>

<style scoped>
#copy-field {
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 1vw
}
</style>