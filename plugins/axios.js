import { GET_LOADER } from '~/store/types'

export default function ({ $axios, store }) {

    $axios.onRequest((config) => {
        if (config.showLoader) {
            store.dispatch(`app/${GET_LOADER}`, true)
        }

        const idToken =
            store?.state?.auth?.user?.signInUserSession?.idToken?.jwtToken || ''

        if (idToken) {
            $axios.setHeader('Authorization', `Bearer ${idToken}`)
        }
    })

    $axios.onResponse(() => {
        store.dispatch(`app/${GET_LOADER}`, false)
    })

    $axios.onError((error) => {
        console.log(error)
        store.dispatch(`app/${GET_LOADER}`, false)
    })
}