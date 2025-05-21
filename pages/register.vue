<template>
<section class="register">
    <div class="container">
        <div class="register__text">
            <h2 class="display-small">Реєстрація</h2>
            <p class="title-medium">Введіть свої дані для авторизації</p>
        </div>
        <div class="register__tel">
            <InputComponent
                v-model="name"
                label="Імʼя"
                placeholder="Введіть своє ПІБ або імʼя"
            />
            <InputComponent
                v-model="phone"
                label="Номер телефону"
                placeholder="Введіть свій номер"
            />
            <InputComponent 
                v-model="email"
                label="Пошта"
                placeholder="Введіть свою електронну адресу"
            />
        </div>
        <div class="register__register">
            <p class="body-medium">Вже маєте Vroom-акаунт?</p>
            <NuxtLink
                to="login"
                class="btn btn--transparent"
            >
                <p class="label-large">Увійти</p>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4329 10.8333L16.4329 15.8333M3.09961 2.5L8.99128 16.6417L11.0829 10.4833L17.2413 8.39167L3.09961 2.5Z" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>
        </div>
        <button @click="register" class="btn btn--primary btn--full-width label-large">
            Зареєструватись
        </button>
        <div id="recaptcha-container"></div>
    </div>
</section>
</template>

<script setup>
import {
    createUserWithEmailAndPassword,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useAuthStore } from '~/stores/authStore';
import { useNuxtApp } from 'nuxt/app';

const {$auth} = useNuxtApp();
const authStore = useAuthStore();
const router = useRouter();

// inputs
const name = ref('')
const phone = ref('')
const email = ref('')

const register = async () => {
  try {
    // Створюємо тимчасову пошту та пароль
    const tempEmail = `temp_${Date.now()}@example.com`;
    const tempPassword = Math.random().toString(36).slice(-8);

    // Створюємо користувача з тимчасовими даними
    const userCredential = await createUserWithEmailAndPassword($auth, tempEmail, tempPassword);
    const user = userCredential.user;
    console.log("Користувач успішно зареєстрований (тимчасово):", user);
    console.log("UID користувача:", user.uid);

    // Після успішної реєстрації використовуємо onAuthStateChanged
    onAuthStateChanged($auth, async (user) => {
      if (user) {
        console.log("Користувач знайдений в onAuthStateChanged:", user);
        console.log("UID користувача в onAuthStateChanged:", user.uid);

        // Зберігаємо додаткову інформацію про користувача у Firestore
        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
          name: name.value,
          phone: phone.value,
          email: email.value,
        });
        console.log("Інформація про користувача збережена у Firestore");
      } else {
        console.log("Користувач не знайдений в onAuthStateChanged");
      }
    });

    // Відправляємо код підтвердження на номер телефону
    const appVerifier = new RecaptchaVerifier($auth, 'recaptcha-container', {
      'size': 'invisible',
    });
    const confirmationResult = await signInWithPhoneNumber($auth, phone.value, appVerifier);
    authStore.setConfirmationResult(confirmationResult);
    authStore.setPhoneNumber(phone.value);
    router.push('/code');

  } catch (error) {
    console.error("Помилка реєстрації:", error);
  }
};
definePageMeta({
    layout: 'error'
})
</script>

<style lang="scss">
.register {
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
        @media screen and (min-width: 768px) {
            max-width: 34.3rem;
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