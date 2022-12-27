import type Parameters from '@/types/Parameters'
import type SubConverterConfig from '@/types/SubConverterConfig'

export default function genSubLink(
    params: Parameters,
    proxyClients: Map<string, string>,
    remoteConfigs: Map<string, string>,
    extraParams: Map<string, string>,
    config: SubConverterConfig
) {
    // basic params
    let generatedSubLink = ''
    const backendUrl =
        params.advancedParams.backendUrl === ''
            ? config.defaultBackendUrl
            : params.advancedParams.backendUrl
    const subLinks = params.basicParams.subscriptionLinks.replace(
        /(\n|\r|\n\r)/g,
        '|'
    )
    generatedSubLink = `${backendUrl}target=${proxyClients.get(
        params.basicParams.proxyClient
    )}&url=${encodeURIComponent(subLinks)}`

    // advanced params
    if (params.paramsMode === 'advanced') {
        const {
            remoteConfig,
            nodeName: { include, exclude },
            fileName,
            choosedParams,
        } = params.advancedParams

        if (remoteConfig !== '') {
            generatedSubLink += `&config=${encodeURIComponent(
                remoteConfigs.get(remoteConfig) as string
            )}`
        }
        if (include !== '') {
            generatedSubLink += `&include=${encodeURIComponent(include)}`
        }
        if (exclude !== '') {
            generatedSubLink += `&exclude=${encodeURIComponent(exclude)}`
        }
        if (fileName !== '') {
            generatedSubLink += `&filename=${encodeURIComponent(fileName)}`
        }
        for (const [k, v] of extraParams) {
            if (choosedParams.includes(k)) {
                generatedSubLink += `&${v}=true`
            }
        }
    }
    return generatedSubLink
}
