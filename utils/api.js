export const useApi = (path, options = {}) => {
    const config = useRuntimeConfig()
    console.log(`${config.public.apiBase}${path}`)
    return useFetch(`${config.public.apiBase}${path}`, {
        ...options,
    })
}  