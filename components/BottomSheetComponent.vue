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
    z-index: 999;
    backdrop-filter: blur(0.1rem);
    
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.2);
    }
  
    &__content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 5rem;
      background: white;
      border-top-left-radius: var(--round-16);
      border-top-right-radius: var(--round-16);
      padding: 1.6rem;
      overflow-y: auto;
      box-shadow: 0 -2px 100px rgba(0, 0, 0, 0.2);
      animation: slide-up-enter 0.3s ease-out forwards;

      @media screen and (min-width: 768px) {
        position: relative;
        height: 57rem;
        width: 55.3rem;
        border-radius: var(--round-16);
      }
    }
  }
  
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
  </style>
  