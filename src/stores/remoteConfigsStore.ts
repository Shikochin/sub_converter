import { defineStore } from 'pinia'

const remoteConfigs: Map<string, string> = new Map()

remoteConfigs.set(
    'No-Urltest',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini'
)
remoteConfigs.set(
    'Urltest',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini'
)
remoteConfigs.set(
    'Maying',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini'
)
remoteConfigs.set(
    'Ytoo',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini'
)
remoteConfigs.set(
    'FlowerCloud',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini'
)
remoteConfigs.set(
    'Nexitally',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini'
)
remoteConfigs.set(
    'SoCloud',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini'
)
remoteConfigs.set(
    'ARK',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini'
)
remoteConfigs.set(
    'ssrCloud',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini'
)
remoteConfigs.set(
    'NeteaseUnblock(Only rules, No-Urltest)',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini'
)
remoteConfigs.set(
    'Basic(Only GEOIP CN + Final)',
    'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini'
)

export const useRemoteConfigsStore = defineStore({
    id: 'remoteConfigsStore',
    state: () => ({
        remoteConfig: '',
        remoteConfigs,
    }),
    getters: {
        remoteConfigsNames: (state) => {
            const remoteConfigs = []
            for (const name of state.remoteConfigs.keys()) {
                remoteConfigs.push(name)
            }
            return remoteConfigs
        },
    },
    actions: {
        getRemoteConfigKey(remoteConfig: string): string {
            let parsedRemoteConfig = ''
            for (const [key, value] of remoteConfigs) {
                if (value === remoteConfig) {
                    parsedRemoteConfig = key
                }
            }
            return parsedRemoteConfig
        },
    },
})
