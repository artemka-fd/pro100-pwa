<template>
<section class="faq">
    <div class="container">
        <div class="faq__heading">
            <div class="btn btn--transparent" @click="handleBackBtn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="label-large">Назад</p>                    
            </div>
            <p class="body-large">Часті питання та інше</p>
        </div>
        <div class="faq__tags">
            <div :class="['tag', 'label-medium', {'tag--active': page == 'faq'}]" @click="changePage('faq')">Часті питання</div> 
            <div :class="['tag', 'label-medium', {'tag--active': page == 'privacy'}]" @click="changePage('privacy')">Privacy policy</div>
            <div :class="['tag', 'label-medium', {'tag--active': page == 'terms'}]" @click="changePage('terms')">Terms & Conditions</div>
        </div>
        <Transition
            name="pages"
        >
            <div
                v-if="page === 'faq'"
                class="faq__questions"
            >
                <h2 class="title-medium">Тут ви можете отримати відповіді на багато частих питань від юзерів :)</h2>
                <AccordeonComponent
                    title="Як відбуваєтсья оплата?"
                    content="Отримайте відповіді на свої питання про проєкт, отримання послугі або будь-які інші питання по порталу. Якщо ти не знайшов тут відповідь на своє питання - залиш відгук на пошту або за номером телефону на сторінці “Контакти”"
                />
                <AccordeonComponent
                    title="Як відбуваєтсья оплата?"
                    content="Отримайте відповіді на свої питання про проєкт, отримання послугі або будь-які інші питання по порталу. Якщо ти не знайшов тут відповідь на своє питання - залиш відгук на пошту або за номером телефону на сторінці “Контакти”"
                />
                <AccordeonComponent
                    title="Як відбуваєтсья оплата?"
                    content="Отримайте відповіді на свої питання про проєкт, отримання послугі або будь-які інші питання по порталу. Якщо ти не знайшов тут відповідь на своє питання - залиш відгук на пошту або за номером телефону на сторінці “Контакти”"
                />
                <AccordeonComponent
                    title="Як відбуваєтсья оплата?"
                    content="Отримайте відповіді на свої питання про проєкт, отримання послугі або будь-які інші питання по порталу. Якщо ти не знайшов тут відповідь на своє питання - залиш відгук на пошту або за номером телефону на сторінці “Контакти”"
                />
            </div>
            <div
                class="faq__questions"
                v-else-if="page === 'privacy'"
            >
                <h2 class="title-large">Privacy policy</h2>  
                <p class="body-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>  
            </div>
            <div
                class="faq__questions"
                v-else-if="page === 'terms'"
            >
                <h2 class="title-large">Terms & Conditions</h2>   
                <p class="body-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p> 
            </div>
        </Transition>
    </div>
</section>
</template>

<script setup>
import { Transition } from 'vue'
const page = ref('faq')
const router = useRouter()
const changePage = (pageName) => {
    console.log(pageName)
    page.value = pageName
}

const handleBackBtn = () => {
    router.back();
}
</script>

<style lang="scss">
.faq {
    &__heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        p {
            margin: 0;
        }
        .btn {
            padding-left: 0;
            p {
                margin: 0;
                color: var(--primary-700);
            }
        }
    }
    &__tags {
        margin-bottom: 2rem;
        display: flex;
        overflow-x: scroll;
        gap: 0.8rem;
    }
    &__questions {
        margin-bottom: 4rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        > .title-large {
            font-weight: 500;
            font-size: 2.2rem;
            margin: 0;
        }
        > .body-medium {
            color: var(--neutrals-700);
            margin: 0;
        }
    }
}
.pages-enter-active,
.pages-leave-active {
  transition: all 0.2s ease;
} 
.pages-enter-from,
.pages-leave-to {
  opacity: 0;;
}
</style>