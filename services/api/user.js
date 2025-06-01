export const createUser = async (name, phone, email) => {
    const { $api } = useNuxtApp()

    try {
        const data = await $api('/user/register', {
            method: 'POST',
            body: {
                name: name,
                phoneNumber: phone,
                email: email
            }
        })
        console.log('user createed')
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getUser = async (id) => {
    const { $api } = useNuxtApp()

    try {
        const data = await $api(`/user/${id}`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getUsers = async () => {
    const { $api } = useNuxtApp()

    try {
        const data = await $api('/user')
        return data
    } catch (error) {
        console.error(error)
    }
}

export const patchUser = async (id, name, phone, email) => {
    const { $api } = useNuxtApp()

    try {
        const data = await $api(`/user/${id}`, {
            method: 'PATCH',
            body: {
                name: name,
                phoneNumber: phone,
                email: email
            }
        })
        return data
    } catch (error) {
        console.error(error)
    }
}