<template>
<div class="accordeon">
    <Disclosure>
        <DisclosureButton>
            <span class="title-medium">
                {{ title }}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#525252" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
            </span>
            <Transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
                name="content"
            >
                <DisclosurePanel>
                    <p class="body-medium">{{ content }}</p>
                </DisclosurePanel>
            </Transition>
        </DisclosureButton>
    </Disclosure>
</div>    
</template>

<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
import { Transition } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Як відбувається оплата?'
    },
    content: {
        type: String,
        required: true,
        default: 'Отримайте відповіді на свої питання про проєкт, отримання послугі або будь-які інші питання по порталу. Якщо ти не знайшов тут відповідь на своє питання - залиш відгук на пошту або за номером телефону на сторінці “Контакти”'
    }
})
</script>

<style lang="scss" scoped>
.accordeon {
    box-shadow: 0px 16px 32px -12px #585C5F1A;
    transition: all 0.2s ease;
    * {
        transition: all 0.2s ease;
    }
    > button {
        width: 100%;
        padding: 2rem;
        background-color: var(--neutrals-100);
        border-radius: var(--round-16);
        border: 1px solid var(--neutrals-400);
    }
    .title-medium {
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .body-medium {
        font-size: 1.4rem;
        margin-top: 1.6rem;
        margin-bottom: 0;
        text-align: start;

    }
}
.content-enter-active,
.content-leave-active {
  transition: all 0.2s;
}
</style>