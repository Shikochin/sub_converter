import { defineStore } from 'pinia'

const proxyClients: Map<string, string> = new Map()

proxyClients.set('Clash', 'clash')
proxyClients.set('ClashR', 'clashr')
proxyClients.set('Surge2', 'surge&ver=2')
proxyClients.set('Surge3', 'surge&ver=3')
proxyClients.set('Surge4', 'surge&ver=4')
proxyClients.set('Quantumult', 'quan')
proxyClients.set('QuantumultX', 'quanx')
proxyClients.set('Surfboard', 'surfboard')
proxyClients.set('Loon', 'loon')
proxyClients.set('SSAndroid', 'sssub')
proxyClients.set('V2Ray', 'v2ray')
proxyClients.set('ShadowSocks', 'ss')
proxyClients.set('ShadowSocksR', 'ssr')
proxyClients.set('ShadowSocksD', 'ssd')

export const useProxyClientsStore = defineStore({
    id: 'proxyClientsStore',
    state: () => ({
        proxyClient: '',
        proxyClients,
    }),
    getters: {
        proxyClientsNames: (state) => {
            const proxyClients = []
            for (const name of state.proxyClients.keys()) {
                proxyClients.push(name)
            }
            return proxyClients
        },
    },
    actions: {
        getProxyClientKey(proxyClient: string): string {
            let parsedProxyClient = ''
            for (const [key, value] of proxyClients) {
                if (value === proxyClient) {
                    parsedProxyClient = key
                }
            }
            return parsedProxyClient
        },
    },
})
