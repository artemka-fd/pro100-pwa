<template>
<HeaderCompoonent 
    :profileName="user.name"
/>
<slot />
<FooterComponent />
</template>

<script setup>
import FooterComponent from '~/components/layout/FooterComponent.vue'
import HeaderCompoonent from '~/components/layout/HeaderCompoonent.vue';

const authStore = useAuthStore();
const user = authStore.user || "";
</script>

<style lang="scss">

</style>