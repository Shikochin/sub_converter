<script setup lang="ts">
import ParamsSets from './components/ParamsSets/ParamsSet.vue';
import { useParamsStore } from './stores/paramsStore';

const store = useParamsStore()

window.addEventListener('beforeunload', () => {
    store.saveData()
})
</script>

<template>
    <header>
        <v-card title="Subscription Converter" color="primary" class="params header">
        </v-card>
    </header>
    <ParamsSets></ParamsSets>
    <footer id="footer">
        2022 - present by <a href="https:/www.chinq.xyz">CQBerry</a>
    </footer>
</template>

<style scoped>
#footer {
    text-align: center;
}

#footer>a {
    text-decoration-line: none;
    color: black;
}
</style>