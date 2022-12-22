<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';

const store = useParamsStore()
</script>

<template>
    <v-card title="Node Name" class="params" color="secondary">
        <v-form>
            <v-text-field label="Include" placeholder="Node included keywords, support regular expressions"
                v-model="store.advancedParams.nodeName.include"></v-text-field>
            <v-text-field label="Exclude" placeholder="Node excluded keywords, support regular expressions"
                v-model="store.advancedParams.nodeName.exclude"></v-text-field>
        </v-form>
    </v-card>
</template>