<template>
<HeaderCompoonent />
<slot />
<FooterComponent />
</template>

<script setup>
import FooterComponent from '~/components/layout/FooterComponent.vue'
import HeaderCompoonent from '~/components/layout/HeaderCompoonent.vue';
</script>

<style lang="scss">

</style>