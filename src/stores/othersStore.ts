import { defineStore } from 'pinia'

export const useOthersStore = defineStore({
    id: 'othersStore',
    state: () => ({
        mode: 'basic',
        subscriptionLinks: '',
        backendAddress: '',
        nodeName: {
            include: '',
            exclude: '',
        },
        returnedFileName: '',
        exportAsNodeList: false,
    }),
})
