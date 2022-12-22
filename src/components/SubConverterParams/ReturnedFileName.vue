<script setup lang="ts">
import { useOthersStore } from '@/stores/othersStore';

const store = useOthersStore()
</script>
<template>

    <v-card title="Returned File Name" class="params" color="secondary">
        <v-text-field label="Returned File Name" v-model="store.returnedFileName"></v-text-field>
    </v-card>

</template>