export default interface Parameters {
    paramsMode: undefined | string
    basicParams: BasicParams
    advancedParams: AdvancedParams
}

interface BasicParams {
    subscriptionLinks: string
    proxyClient: string
}

interface AdvancedParams {
    backendUrl: string
    remoteConfig: string
    nodeName: {
        include: string
        exclude: string
    }
    fileName: string
    choosedParams: string[]
}
