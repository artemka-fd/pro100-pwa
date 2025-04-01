<template>
<header class="header">
    <div class="header__user">
        <div class="header__user-pfp img-wrap img-wrap--contain">
            <img src="https://s3-alpha-sig.figma.com/img/6810/1dd2/cac2a6a99166d7ca4ce845874861dd9a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqMexgKhs7iu-tdroxWiT5lIwUD8cWb8PciWzSwLCMpm4qiu4A6mB0v0KVm1SNicDM0Rhco8mQQXqhZGXhDNJFJ8QV4J4BWhzNnKUXJ6P6Z967xCtmi9sXkCxP~8Sa7v-xnSY4aWUcSh4lrJO1TaXr6B0Ap47FUtZKgkw4nO3vPezUhfV9YMee9PUCQpRucMY8SKgqsc1rtjr6cQNACqwSg7an4rbzmh6SjPLPvKVawJMQtHy0snzHF-zIqpLyODppc4Ur2j3tDjcwm66eZn9ENM9e5fYEEFHhxG1WNqF1EaYXWycpZevhQbuqrHdz30EewpsR9r-UbkrCk3L3Suew__" alt="">
        </div>
        <div class="header__user-text">
            <p class="label-large">Іван Стович</p>
            <p class="label-medium">Chevrolet Camaro</p>
        </div>
    </div>
    <div class="header__btns">
        <div class="btn--icon">
            <img src="/public/img/svg/icons/search.svg" alt="search">
        </div>
        <div class="btn--icon">
            <img src="/public/img/svg/icons/map.svg" alt="map">
        </div>
        <div class="btn--icon">
            <img src="/public/img/svg/icons/menu-burger.svg" alt="menu">
        </div>
    </div>
</header>
</template>

<script setup lang="js">

</script>

<style lang="scss">
.header {
    padding: 0.8rem 1.6rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 16px 32px -12px #585C5F1A;
    &__user {
        display: flex;
        gap: 0.8rem;
        &-pfp {
            border-radius: var(--round-full);
            width: 4rem;
        }
        .label-large {
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
}
</style>
