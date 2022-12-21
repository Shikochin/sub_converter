<script setup lang="ts">
import BasicMode from './SubConverterBasicMode.vue'
import AdvancedMode from './SubConverterAdvancedMode.vue'

import { ref } from 'vue';
import type { Ref } from 'vue';
let mode: Ref<"basic" | "advanced"> = ref("basic")
</script>

<template>
    <v-card>
        <v-tabs v-model="mode">
            <v-tab value="basic">Basic</v-tab>
            <v-tab value="advanced">Advanced</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="mode">
                <v-window-item value="basic">
                    <BasicMode></BasicMode>
                </v-window-item>
                <v-window-item value="advanced">
                    <AdvancedMode></AdvancedMode>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>