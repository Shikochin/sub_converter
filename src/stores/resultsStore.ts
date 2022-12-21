import { defineStore } from 'pinia'

export const useResultsStore = defineStore({
    id: 'resultsStore',
    state: () => ({
        customSubscriptionLink: '',
        subscriptionShortLink: '',
    }),
})
