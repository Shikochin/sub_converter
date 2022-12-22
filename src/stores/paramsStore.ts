import { defineStore } from 'pinia'

export const useParamsStore = defineStore({
    id: 'paramsStore',
    state: () => ({
        paramsMode: undefined as undefined | 'advanced',
        basicParams: {
            subscriptionLinks: '',
            proxyClient: '',
        },
        advancedParams: {
            backendUrl: '',
            remoteConfig: '',
            nodeName: {
                include: '',
                exclude: '',
            },
            fileName: '',
            choosedParams: [
                'Emoji',
                'Insert insert_url',
                'Filter illegal nodes',
            ],
            exportAsNodeList: false,
        },
    }),
    getters: {
        advanced: (state) => state.paramsMode === 'advanced',
        subscriptionLinks: (state) =>
            state.basicParams.subscriptionLinks.replace(/(\n|\r|\n\r)/g, '|'),
        backendUrl: (state) =>
            state.advancedParams.backendUrl === ''
                ? 'https://api.wcc.best/sub?'
                : state.advancedParams.backendUrl,
    },
})
