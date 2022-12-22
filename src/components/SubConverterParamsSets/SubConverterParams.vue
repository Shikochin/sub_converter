<script setup lang="ts">
import BasicParams from './SubConverterBasicParams.vue'
import AdvancedParams from './SubConverterAdvancedParams.vue'
import SubConverterResults from '../SubConverterResults.vue';
import SubConverterFunctions from '../SubConverterFunctions.vue';
import { useOthersStore } from '@/stores/othersStore';

const store = useOthersStore()
</script>

<template>
    <section class="part">
        <BasicParams></BasicParams>
    </section>
    <section class="part">
        <v-expansion-panels v-model="store.params" color="primary">
            <v-expansion-panel title="Advanced Parameters" value="advanced" bg-color="primary">
                <v-expansion-panel-text>
                    <AdvancedParams></AdvancedParams>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </section>

    <section class="part">
        <SubConverterResults></SubConverterResults>
        <SubConverterFunctions></SubConverterFunctions>
    </section>
</template>

<style scoped>
.part {
    margin-top: 5vh;
}
</style>