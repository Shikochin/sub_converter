<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';
import extraParams from '@/data/extraParams';
import getKeys from '@/funcs/getKeys';

const extraParamsNames = getKeys(extraParams)

const store = useParamsStore()
</script>

<template>

    <v-card title="Extra Params" class="params" color="secondary">
        <v-select chips multiple :items="extraParamsNames" label="Extra Params"
            v-model="store.data.advancedParams.choosedParams"></v-select>
    </v-card>

</template>