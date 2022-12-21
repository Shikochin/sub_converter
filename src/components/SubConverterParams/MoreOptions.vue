<script setup lang="ts">
import { useMoreOptionsStore } from '@/stores/moreOptionsStore';

const store = useMoreOptionsStore()

</script>

<template>

    <v-card title="More Options">
        <v-select chips multiple :items="store.moreOptions" label="More Options"
            v-model="store.choosedOptions"></v-select>
    </v-card>

</template>