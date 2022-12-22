<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';
import moreParams from '@/data/moreParams';
import getKeys from '@/funcs/getKeys';

const moreParamsNames = getKeys(moreParams)

const store = useParamsStore()
</script>

<template>

    <v-card title="More Params" class="params" color="secondary">
        <v-select chips multiple :items="moreParamsNames" label="More Params"
            v-model="store.advancedParams.choosedParams"></v-select>
    </v-card>

</template>