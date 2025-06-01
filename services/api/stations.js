export const getStations = async (lat, lon, tagIds) => {
    const { $api } = useNuxtApp()

    try {
        const data = await $api('/service-station/find-by-criteria', {
            method: 'POST',
            body: {
                latitude: lat,
                longitude: lon,
                tagId: tagIds ?? []
            }
        })
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getStation = async (id) => {
    const { $api } = useNuxtApp()

    try {
        const data = await $api(`/service-station/${id}`)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}