<template>
    <transition name="slide-up">
      <div v-if="visible" class="bottom-sheet" @click.self="close">
        <div class="bottom-sheet__content">
          <slot />
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  const props = defineProps({
    visible: Boolean,
  })
  const emit = defineEmits(['close'])
  
  const close = () => emit('close')
  </script>
  
  <style lang="scss" scoped>
  .bottom-sheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
  
    &__content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      border-top-left-radius: var(--round-16);
      border-top-right-radius: var(--round-16);
      padding: 1.6rem;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      animation: slide-up-enter 0.3s ease-out forwards;
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
  