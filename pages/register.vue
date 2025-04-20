<template>
<section class="register">
    <div class="container">
        <div class="register__text">
            <h2 class="display-small">Реєстрація</h2>
            <p class="title-medium">Введіть свої дані для авторизації</p>
        </div>
        <div class="register__tel">
            <InputComponent label="Імʼя" placeholder="Введіть своє ПІБ або імʼя" />
            <InputComponent label="Номер телефону" placeholder="Введіть свій номер" />
            <InputComponent label="Пошта" placeholder="Введіть свою електронну адресу" />
        </div>
        <div class="register__register">
            <p class="body-medium">Вже маєте Vroom-акаунт?</p>
            <NuxtLink
                to="register"
                class="btn btn--transparent"
            >
                <p class="label-large">Увійти</p>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4329 10.8333L16.4329 15.8333M3.09961 2.5L8.99128 16.6417L11.0829 10.4833L17.2413 8.39167L3.09961 2.5Z" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>
        </div>
        <NuxtLink to="code" class="btn btn--primary btn--full-width">
            Зареєструватись
        </NuxtLink>
    </div>
</section>
</template>

<script setup>

</script>

<style lang="scss">
.register {
    height: calc(100vh - 18rem);
    padding: 4rem 0 8rem 0;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        height: 100%;
        > .btn {
            margin-top: auto;
        }
    }
    .display-small {
        text-align: center;
        margin: 0 0 1.6rem 0;
    }
    .title-medium {
        text-align: center;
        margin: 0;
    }
    &__tel {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        width: 100%;
    }
    &__register {
        .body-medium {
            margin: 0 0 0.8rem 0;
            color: var(--neutrals-700)
        }
        .btn {
            color: var(--primary-700)
        }
    }
}
</style>