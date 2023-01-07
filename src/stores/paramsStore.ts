import { defineStore } from 'pinia'
import type Parameters from '@/types/Parameters'

export const useParamsStore = defineStore({
    id: 'paramsStore',
    state: () => ({
        data: (JSON.parse(
            localStorage.getItem('data') as string
        ) as Parameters | null) ?? {
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
    }),
    actions: {
        saveData() {
            localStorage.setItem('data', JSON.stringify(this.data))
        },
    },
})
