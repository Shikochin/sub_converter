<script setup lang="ts">
import { ref } from 'vue';
const genSubLink = ref(false), genShortLink = ref(false), importToClash = ref(false)
</script>

<template>
    <div id="functions">
        <v-btn variant="flat" color="pink" :disabled="!genSubLink">Generate subscription link</v-btn>
        <v-btn variant="flat" color="pink" :disabled="!genShortLink">Generate shortlink</v-btn>
        <v-btn variant="flat" color="primary">Upload config</v-btn>
        <v-btn variant="flat" color="primary" :disabled="!importToClash">Import to Clash</v-btn>
        <v-btn variant="flat" color="primary">Parse from URL</v-btn>
    </div>
</template>

<style scoped>
#functions {
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: grid;
    gap: 1vw;
}

@media screen and (min-width: 1500px) {

    #functions {
        margin-top: 5vh;
        margin-bottom: 5vh;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1vw;
    }

}
</style>