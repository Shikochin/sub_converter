import { defineStore } from 'pinia'
import type Parameters from '@/types/Parameters'

export const useParamsStore = defineStore({
    id: 'paramsStore',
    state: () =>
        <Parameters>{
            paramsMode: undefined,
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
            },
        },
})
