<template>
  <NuxtLayout>
    <section class="app-wrap" :class="{ 'menu-opened': menuOpened }">
      <NuxtPage />
    </section>
  </NuxtLayout>
</template>

<script setup>
import { useMenuStore } from './stores/menuStore'

const menuOpened = ref(false)

const menuStore = useMenuStore()
menuStore.$subscribe((mutation,state) => {
  menuOpened.value = state.menuOpened
})

useHead({
  title: 'Vroom',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Vroom - це програма для замовлення стосунків в СТО та пошуку контактів з ними.' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'theme-color', content: '#3422F2' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'Vroom' },
    { name: 'application-name', content: 'Vroom' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
  ],

})
</script>

<style lang="scss">
section {
  min-height: 70vh;
  @media screen and (min-width: 1024px) {
    min-height: 50vh;
  }
  &.app-wrap {
    transition: all 0.2s ease;
  }
  &.menu-opened {
    position: absolute;
    z-index: 51;
    background: white;
    padding: 2rem 0;
    transform: scale(0.5);
    top: 1%;
    left: -10rem;
    height: 80rem;
    overflow: hidden;
    border-radius: var(--round-16);
    opacity: 0.5;
    * {
      touch-action: none;
      overflow: hidden;
    }
  }
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.4rem);
}
</style>