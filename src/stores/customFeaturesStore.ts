import { defineStore } from 'pinia'

export const useCustomFeaturesStore = defineStore({
    id: 'customFeaturesStore',
    state: () => ({
        customFeatures: ['Surge.DoH', 'Clash.DoH', 'NeteaseCloud'],
        choosedFeatures: [] as string[],
    }),
})
