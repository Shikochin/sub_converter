<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';
import remoteConfigs from '@/data/remoteConfigs';
import getKeys from '@/funcs/getKeys';

const remoteConfigsNames = getKeys(remoteConfigs)

const store = useParamsStore()
</script>

<template>
    <v-card title="Remote Config" class="params" color="secondary">
        <v-select label="Remote Config" :items="remoteConfigsNames"
            v-model="store.data.advancedParams.remoteConfig"></v-select>
    </v-card>
</template>