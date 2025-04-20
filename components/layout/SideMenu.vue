<template>
<Transition name="slide-up">
<div class="menu-wrapper" v-if="isOpen">
    <div class="img-wrap">
        <img v-if="screenshot" class="screenshot-bg" :src="screenshot" />
    </div>
    <aside class="side-menu" :class="{ open: isOpen }" @click="closeMenu">
    <div class="menu-top">
        <div class="btn--icon" @click="menuOpen" style="margin-right: auto">
            <img src="/public/img/svg/icons/menu-burger.svg" alt="menu">
        </div>
        <NuxtLink to="" class="btn--icon">
            <img src="/public/img/svg/icons/search.svg" alt="search">
        </NuxtLink>
        <NuxtLink to="map" class="btn--icon">
            <img src="/public/img/svg/icons/map.svg" alt="map">
        </NuxtLink>
    </div>
    <div class="menu-header">
        <img class="avatar" :src="user.avatar" alt="user photo" />
        <p class="username title-large">{{ user.name }}</p>
    </div>
    <nav class="menu-links">
        <NuxtLink to="" class="title-medium">Мій профіль</NuxtLink>
        <NuxtLink to="" class="title-medium">СТО та пошук</NuxtLink>
        <NuxtLink to="" class="title-medium">Про Vroom</NuxtLink>
    </nav>
    <nav class="menu-links menu-links--bottom">
        <NuxtLink to="" class="title-medium">FAQ</NuxtLink>
        <NuxtLink to="" class="title-medium">Terms of use</NuxtLink>
        <NuxtLink to="" class="title-medium">Privacy policy</NuxtLink>
    </nav>
    
    <button class="logout btn btn--transparent">
        <p class="label-large">Вийти</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5" stroke="#FF9275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
            
    </button>
    </aside>
</div>
</Transition>
</template>

<script setup>
    defineProps({
        isOpen: Boolean,
        user: {
            type: Object,
            default: () => ({
            name: 'Іван Стович',
            avatar: 'https://s3-alpha-sig.figma.com/img/6810/1dd2/cac2a6a99166d7ca4ce845874861dd9a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqMexgKhs7iu-tdroxWiT5lIwUD8cWb8PciWzSwLCMpm4qiu4A6mB0v0KVm1SNicDM0Rhco8mQQXqhZGXhDNJFJ8QV4J4BWhzNnKUXJ6P6Z967xCtmi9sXkCxP~8Sa7v-xnSY4aWUcSh4lrJO1TaXr6B0Ap47FUtZKgkw4nO3vPezUhfV9YMee9PUCQpRucMY8SKgqsc1rtjr6cQNACqwSg7an4rbzmh6SjPLPvKVawJMQtHy0snzHF-zIqpLyODppc4Ur2j3tDjcwm66eZn9ENM9e5fYEEFHhxG1WNqF1EaYXWycpZevhQbuqrHdz30EewpsR9r-UbkrCk3L3Suew__' // просто для прикладу
            })
        },
        screenshot: String,
    })
    const emit = defineEmits(['close'])

    function closeMenu() {
        emit('close')
    }
</script>

<style lang="scss">
.menu-wrapper {
    position: absolute;
    inset: 0;
    z-index: 51;
    display: flex;
    width: 100%
}

.side-menu {
    width: 100%;
    background: var(--primary-700);
    color: var(--neutrals-100);
    padding: 1rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform 0.3s ease;

&.open {
    transform: translateX(0);
}

.menu-top {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
}

.menu-header {
    margin-top: auto;
        .avatar {
            width: 12rem;
            height: 12rem;
            border-radius: 100%;
            margin-bottom: 0.8rem;
            border: 2px solid var(--primary-100); 
        }
        .title-large {
            margin: 0;
            font-weight: 500;
            letter-spacing: 0;
        }
    }

    .menu-links {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        a {
            color: var(--neutrals-100);
            text-decoration: none;
        }
        &--bottom {
            opacity: 0.5;
        }
    }

    .logout {
        margin-top: auto;
        background: none;
        border: none;
        color: var(--error-200);
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        &.btn {
            width: fit-content;
            padding-left: 0;
        }
    }
}
.screenshot-bg {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(0.7) translate(70%, 0);
    filter: opacity(0.5) blur(3px);
    border-radius: var(--round-16);
    z-index: 51;
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.2s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
}
</style>
