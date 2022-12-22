import { defineStore } from 'pinia'

export const useOthersStore = defineStore({
    id: 'othersStore',
    state: () => ({
        params: undefined as undefined | 'advanced',
        subscriptionLinks: '',
        backendUrl: '',
        nodeName: {
            include: '',
            exclude: '',
        },
        returnedFileName: '',
        exportAsNodeList: false,
    }),
})
