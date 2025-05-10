<template>
    <div class="input__wrap">
      <p v-if="label !== ''" class="input__label body-large">{{ label }}</p>
      <div class="input">
        <input
          type="text"
          class="input__text"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          v-maska="mask"
        >
        <div
          v-if="iconSrc !== ''"
          class="img-wrap"
        >
          <img :src="iconSrc" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { vMaska } from 'maska/vue';
  const props = defineProps({
    placeholder: {
      type: String,
      default: 'placeholder'
    },
    label: {
      type: String,
      default: ''
    },
    iconSrc: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    mask: {
        type: String,
        default: null,
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  </script>
  

<style lang="scss">
.input {
    display: flex;
    padding: 0.8rem 1.6rem;
    justify-content: space-between;
    background-color: var(--neutrals-200);
    border: 1px solid var(--neutrals-300);
    border-radius: 0.8rem;
    box-shadow: 0px 4px 16px 0px #0000000F;
    &:focus{
        outline: none;
        //@at-root .input__wrap{&} {
        //}
    }
    &__label {
        margin: 0 0 0.8rem 0;
        color: var(--neutrals-700);
    }
    &__text {
        width: 100%;
        gap: 0.8rem;
        color: var(--neutrals-500);
        background-color: transparent;
        border: none;
        font-family: 'Cy Grotesk', sans-serif;
        font-size: 1.6rem;
        line-height: 2.4000rem;
        &::placeholder {
            font-family: 'Cy Grotesk', sans-serif;
            font-size: 1.6rem;
            line-height: 2.4000rem;
        }
    }
}
</style>