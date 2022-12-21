<script setup lang="ts">
import { useRemoteConfigsStore } from '@/stores/remoteConfigsStore';

const store = useRemoteConfigsStore()

</script>

<template>
    <v-card title="Remote Config">
        <v-select label="Remote Config" :items="store.remoteConfigsNames" v-model="store.remoteConfig"></v-select>
    </v-card>
</template>