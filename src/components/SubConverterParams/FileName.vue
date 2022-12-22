<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';

const store = useParamsStore()
</script>
<template>

    <v-card title="File Name" class="params" color="secondary">
        <v-text-field label="File Name" v-model="store.advancedParams.fileName"></v-text-field>
    </v-card>

</template>