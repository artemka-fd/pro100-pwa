<template>
<div>
    <SideMenu :isOpen="isOpen" @close="isOpen = false" :screenshot="screenshot" />
    <header :class="['header', 'soft-shadows-4', {'header--no-margin': currentRoute === 'map'}]">
        <NuxtLink to="/profile" class="header__user">
            <div class="header__user-pfp img-wrap img-wrap--contain">
                <img :src="pfpSrc" alt="">
            </div>
            <div class="header__user-text">
                <p class="label-large">{{ profileName }}</p>
                <p class="label-medium">{{ carName }}</p>
            </div>
        </NuxtLink>
        <div class="header__btns">
            <NuxtLink to="" class="btn--icon">
                <img src="/public/img/svg/icons/search.svg" alt="search">
            </NuxtLink>
            <NuxtLink to="map" class="btn--icon">
                <img src="/public/img/svg/icons/map.svg" alt="map">
            </NuxtLink>
            <div class="btn--icon" @click="menuOpen">
                <img src="/public/img/svg/icons/menu-burger.svg" alt="menu">
            </div>
        </div>
    </header>
</div>
</template>

<script setup lang="js">
import SideMenu from '~/components/layout/SideMenu.vue'
import html2canvas from 'html2canvas'

const props = defineProps({
    profileName: {
        type: String,
        default: 'Іван Стович'
    },
    carName: {
        type: String,
        default: 'Daewoo Lanos'
    },
    pfpSrc: {
        type: String,
        default: 'https://s3-alpha-sig.figma.com/img/6810/1dd2/cac2a6a99166d7ca4ce845874861dd9a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqMexgKhs7iu-tdroxWiT5lIwUD8cWb8PciWzSwLCMpm4qiu4A6mB0v0KVm1SNicDM0Rhco8mQQXqhZGXhDNJFJ8QV4J4BWhzNnKUXJ6P6Z967xCtmi9sXkCxP~8Sa7v-xnSY4aWUcSh4lrJO1TaXr6B0Ap47FUtZKgkw4nO3vPezUhfV9YMee9PUCQpRucMY8SKgqsc1rtjr6cQNACqwSg7an4rbzmh6SjPLPvKVawJMQtHy0snzHF-zIqpLyODppc4Ur2j3tDjcwm66eZn9ENM9e5fYEEFHhxG1WNqF1EaYXWycpZevhQbuqrHdz30EewpsR9r-UbkrCk3L3Suew__'
    }
})

const router = useRouter()
const currentRoute = ref(router.currentRoute.value.name);

const screenshot = ref(null)
const isOpen =ref(false)

const menuOpen = () => {
    const screenshotElement = document.body // або #app
    html2canvas(screenshotElement)
    .then(canvas => {
        const dataURL = canvas.toDataURL('image/png')
        screenshot.value = dataURL
        isOpen.value = true
    })
    return isOpen.value
}

watch(router.currentRoute, () => {
    currentRoute.value = router.currentRoute.value.name;
})
</script>

<style lang="scss">
.header {
    position: sticky;
    top: 0;
    padding: 0.8rem 1.6rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 16px 32px -12px #585C5F1A;
    &__user {
        display: flex;
        gap: 0.8rem;
        text-decoration: none;
        &-pfp {
            border-radius: var(--round-full);
            width: 4rem;
        }
        .label-large {
            color: #000;
            font-weight: 500;
        }
        .label-medium {
            font-weight: 500;
            color: var(--neutrals-500)
        }
        p {
            margin: 0;
        }
    }
    &__btns {
        display: flex;
        gap: 0.8rem;
    }
    &--no-margin {
        margin-bottom: 0;
        position: relative;
        z-index: 2;
    }
}
</style>
