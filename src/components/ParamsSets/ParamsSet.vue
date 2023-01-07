<script setup lang="ts">
import BasicParams from './BasicParams.vue'
import AdvancedParams from './AdvancedParams.vue'
import ShowResults from '../Results/ShowResults.vue';
import FunctionButtons from '../Functions/FunctionButtons.vue';
import { useParamsStore } from '@/stores/paramsStore';

const store = useParamsStore()
</script>

<template>
    <section class="part">
        <BasicParams></BasicParams>
    </section>
    <section class="part">
        <v-expansion-panels v-model="store.data.paramsMode" color="primary">
            <v-expansion-panel title="Advanced Parameters" value="advanced" bg-color="primary">
                <v-expansion-panel-text>
                    <AdvancedParams></AdvancedParams>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </section>

    <section class="part">
        <ShowResults></ShowResults>
        <FunctionButtons></FunctionButtons>
    </section>
</template>

<style scoped>
.part {
    margin-top: 5vh;
}
</style>