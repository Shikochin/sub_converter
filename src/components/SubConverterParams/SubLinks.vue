<script setup lang="ts">
import { useOthersStore } from '@/stores/othersStore';

const store = useOthersStore()
</script>

<template>
    <v-card class="params" title="Subscription Links" color="primary"
        subtitle="Support 'subscription links' or 'ss/ssr/vmess link'. Multiple links, one per line or separated by |">
        <v-textarea label="Subscription Links" v-model="store.subscriptionLinks"></v-textarea>
    </v-card>
</template>