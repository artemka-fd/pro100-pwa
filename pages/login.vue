<template>
<section class="login">
    <div class="container">
        <div class="login__text">
            <h2 class="display-small">Логін</h2>
            <p class="title-medium">Введіть свій номер телефону</p>
        </div>
        <div class="login__tel">
            <InputComponent label="Номер телефону" placeholder="Введіть свій номер" />
        </div>
        <div class="login__register">
            <p class="body-medium">Ще не маєте акаунту на Vroom?</p>
            <NuxtLink
                to="register"
                class="btn btn--transparent"
            >
                <p class="label-large">Зареєструватися</p>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4329 10.8333L16.4329 15.8333M3.09961 2.5L8.99128 16.6417L11.0829 10.4833L17.2413 8.39167L3.09961 2.5Z" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>
        </div>
        <NuxtLink to="code" class="btn btn--primary btn--full-width">
            Підтвердити
        </NuxtLink>
    </div>
</section>
</template>

<script setup>

</script>

<style lang="scss">
.login {
    height: calc(100vh - 18rem);
    padding: 8rem 0;
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