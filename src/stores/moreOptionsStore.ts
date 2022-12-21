import { defineStore } from 'pinia'

export const useMoreOptionsStore = defineStore({
    id: 'moreOptionsStore',
    state: () => ({
        moreOptions: [
            'Emoji',
            'Skip certificate verification',
            'Enable UDP',
            'Node type',
            'Sort nodes',
            'Filter illegal nodes',
        ],
        choosedOptions: ['Emoji', 'Skip certificate verification'],
    }),
})
