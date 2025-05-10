<template>
<div>
    <SideMenu :isOpen="isOpen" @close="closeMenu" :screenshot="screenshot" />
    <header :class="['header', 'soft-shadows-4', {'header--no-margin': currentRoute === 'map', 'header--menu-opened': menuOpened}]">
        <NuxtLink to="/profile" class="header__user">
            <div class="header__user-pfp img-wrap img-wrap--cover">
                <img :src="pfpSrc" alt="">
            </div>
            <div class="header__user-text">
                <p class="label-large">{{ profileName }}</p>
                <p class="label-medium">{{ carName }}</p>
            </div>
        </NuxtLink>
        <div class="header__nav mobile--hide">
            <NuxtLink to="/" class="header__nav-item title-medium">СТО та пошук</NuxtLink> 
            <NuxtLink to="about" class="header__nav-item title-medium">Про Vroom</NuxtLink>
        </div>
        <div class="header__btns">
            <NuxtLink to="" class="btn--icon">
                <img src="/public/img/svg/icons/search.svg" alt="search">
            </NuxtLink>
            <NuxtLink to="map" class="btn--icon">
                <img src="/public/img/svg/icons/map.svg" alt="map">
            </NuxtLink>
            <div class="btn--icon desktop--hide" @click="menuOpen">
                <img src="/public/img/svg/icons/menu-burger.svg" alt="menu">
            </div>
        </div>
    </header>
</div>
</template>

<script setup lang="js">
import SideMenu from '~/components/layout/SideMenu.vue'
import { useMenuStore } from '~/stores/menuStore'
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
        default: 'https://placecats.com/neo_2/300/200'
    }
})

const router = useRouter()
const currentRoute = ref(router.currentRoute.value.name);

const menuStore = useMenuStore()

const menuOpened = ref(false)

menuStore.$subscribe((mutation,state) => {
  menuOpened.value = state.menuOpened
})

const screenshot = ref('null')
const isOpen =ref(false)

const menuOpen = () => {
    // const screenshotElement = document.body // або #app
    // html2canvas(screenshotElement)
    // .then(canvas => {
    //     const dataURL = canvas.toDataURL('image/png')
    //     screenshot.value = dataURL
    //     isOpen.value = true
    // })
    menuStore.setMenuState(true);
    isOpen.value = true
    document.body.style.overflow = 'hidden'
    return isOpen.value
}

const closeMenu = () => {
    menuStore.setMenuState(false);
    isOpen.value = false
    document.body.style.overflow = 'auto'
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
    transition: all 2s ease;
    @media screen and (min-width: 1024px) {
        margin: 4rem auto 2.8rem auto;
        max-width: 112rem;
        border-radius: 2.8rem;
        padding: 1.6rem;
        box-sizing: none;
    }
    &.header--menu-opened {
        position: relative;
        top: -7rem;
    }
    &__user {
        display: flex;
        gap: 0.8rem;
        text-decoration: none;
        &-pfp {
            border-radius: var(--round-full);
            height: 4rem;
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
    &__nav {
        display: flex;
        gap: 2.8rem;
        align-items: center;
        &-item {
            text-decoration: none;
            color: #000;
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
