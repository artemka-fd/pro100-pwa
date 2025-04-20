<template>
<footer ref="footer" :class="['footer', 'elevation-dark-4', {'footer--no-margin': currentRoute === 'map'}]">
    <div class="container">
        <div class="footer__top">
            <div class="footer__top__logo img-wrap img-wrap--contain">
                <img src="../../public/img/svg/icons/logo.svg" alt="asdf" />
            </div>
        </div>
        <div class="footer__info">
            <p class="title-medium">vroomsupport@gmail.com</p>
            <p class="title-medium">+38 (063) 111 11 11</p>
            <p class="title-medium">Київ, вул. Покровська 9а, 01001</p>
        </div>
        <div class="footer__socials">
            <div class="btn--icon">
                <img src="/public/img/svg/icons/insta_logo.svg" alt="instagram">
            </div>
            <div class="btn--icon">
                <img src="/public/img/svg/icons/twitter_logo.svg" alt="instagram">
            </div>
            <div class="btn--icon">
                <img src="/public/img/svg/icons/yt_logo.svg" alt="instagram">
            </div>
        </div>
        <div class="footer__bottom">
            <p>Vroom App © 2025. All rights reserved</p>
        </div>
    </div>
</footer>
</template>

<script setup>
const router = useRouter()
const currentRoute = ref(router.currentRoute.value.name);

watch(router.currentRoute, () => {
    currentRoute.value = router.currentRoute.value.name;
})
</script>

<style lang="scss">
.footer {
    margin-top: 2rem;
    background-color: #FFFFFF;
    padding: 4rem 0;
    border-radius: 1.6rem 1.6rem 0 0;
    &__top {
        padding-bottom: 2.8rem;
        &__logo {
            width: 15rem;
        }
    }
    &__info {
        margin-bottom: 2.8rem;
        > p {
            margin: 0 0 0.4rem 0;
        }
        >p:nth-child(2) {
            margin: 0 0 2.8rem 0;
        }
    }
    &__socials {
        margin-bottom: 2.8rem;
        display: flex;
        gap: 0.8rem;
    }
    &__bottom {
        border-top: 0.2rem dashed #D9D9D9;
        padding-top: 2.8rem;
        color: #6A6A6A;
    }
    &--no-margin {
        margin-top: 0;
        position: relative;
    }
}
</style>