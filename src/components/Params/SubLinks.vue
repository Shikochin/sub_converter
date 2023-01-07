<script setup lang="ts">
import { useParamsStore } from '@/stores/paramsStore';

const store = useParamsStore()
</script>

<template>
    <v-card class="params" title="Subscription Links" color="primary"
        subtitle="Support 'subscription links' or 'ss/ssr/vmess link', multiple links, one per line or separated by |">
        <v-textarea label="Subscription Links" v-model="store.data.basicParams.subscriptionLinks"></v-textarea>
    </v-card>
</template>