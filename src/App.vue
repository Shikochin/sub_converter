<script setup lang="ts">
import SubConverterHeader from './components/SubConverterHeader.vue';
import SubConverterParams from './components/SubConverterParamsSets/SubConverterParams.vue';
import { onMounted } from 'vue';
import Swal from 'sweetalert2';

onMounted(async () => {
    await Swal.fire({
        icon: 'info',
        title: 'Uni 机场',
        text: `Uni，致力于打造一个精品机场，独有隧道技术在保障系节点稳定的同时又能让保证三网用户在速度方面的体验，全节点流媒体解锁保证，有机场专属emby，含奈非、迪士尼资源 
官网：fanmagic.top`
    })
})
</script>

<template>
    <SubConverterHeader></SubConverterHeader>
    <SubConverterParams></SubConverterParams>
</template>