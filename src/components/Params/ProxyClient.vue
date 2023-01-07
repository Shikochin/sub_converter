<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';
import proxyClients from '@/data/proxyClients';
import getKeys from '@/funcs/getKeys';

const proxyClientsNames = getKeys(proxyClients)

const store = useParamsStore()

</script>

<template>
    <v-card class="params" title="Proxy Client" color="primary">
        <v-select label="Proxy Client" :items="proxyClientsNames"
            v-model="store.data.basicParams.proxyClient"></v-select>
    </v-card>
</template>