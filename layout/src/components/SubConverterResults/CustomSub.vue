<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue';

const result = ref("")
const snackbar = ref(false)

const { copy } = useClipboard()

</script>

<template>

    <v-card title="Custom Subscription" id="copy-field">
        <br>
        <v-text-field disabled variant="outlined" v-model="result"></v-text-field>
        <v-btn @click="copy(result).then(() => { snackbar = true })" variant="flat" color="secondary">Copy</v-btn>
    </v-card>
    <v-snackbar v-model="snackbar" timeout="500">Copied!</v-snackbar>

</template>

<style scoped>
#copy-field {
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 1vw
}
</style>