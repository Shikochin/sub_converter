import getFirstKey from '@/funcs/getFirstKey'
import Swal from 'sweetalert2'
import type Parameters from '@/types/Parameters'

export default async function parseFromUrl(
    params: Parameters,
    proxyClients: Map<string, string>,
    remoteConfigs: Map<string, string>,
    extraParams: Map<string, string>
) {
    Swal.fire({
        input: 'textarea',
        inputLabel: 'Parse old subscription and fill in the page',
        inputPlaceholder: 'Old subscriptions',
        inputAttributes: {
            'aria-label': 'Old subscriptions',
        },
        showCancelButton: true,
    }).then(async ({ value }) => {
        if (value.includes('target')) {
            let url: URL
            try {
                url = new URL(value)
            } catch (e) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter a legal subscription link!',
                })
                console.error(e)
                throw new Error('Please enter a legal subscription link!')
            }
            params.advancedParams.backendUrl = `${url.origin}${url.pathname}?`
            const urlParams = new URLSearchParams(url.search)

            const target = urlParams.get('target') ?? ''
            if (target === 'surge') {
                const version = urlParams.get('ver') ?? '4'
                params.basicParams.proxyClient =
                    getFirstKey(`surge&ver=${version}`, proxyClients) ?? ''
            } else {
                params.basicParams.proxyClient =
                    getFirstKey(target, proxyClients) ?? ''
            }

            params.basicParams.subscriptionLinks = urlParams.get('url') ?? ''

            const remoteConfig = urlParams.get('config') ?? ''
            params.advancedParams.remoteConfig =
                getFirstKey(remoteConfig, remoteConfigs) ?? ''

            params.advancedParams.nodeName.exclude =
                urlParams.get('exclude') ?? ''
            params.advancedParams.nodeName.include =
                urlParams.get('include') ?? ''
            params.advancedParams.fileName = urlParams.get('filename') ?? ''

            const choosedParams = []
            const paramsNames = Array.from(urlParams.keys())
            for (const [k, v] of extraParams) {
                if (paramsNames.includes(v)) {
                    choosedParams.push(k)
                }
            }
            params.advancedParams.choosedParams = choosedParams

            await Swal.fire(
                'Result',
                'Link parsed, all parameters have been filled',
                'success'
            )
        } else {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a legal subscription link!',
            })
        }
    })
}
