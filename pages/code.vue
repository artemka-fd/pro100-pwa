<template>
    <section class="code">
        <div class="container">
            <div class="code__text">
                <h2 class="display-small">Код</h2>
                <p class="title-medium">Введіть код, який прийшов на номер</p>
                <NuxtLink to="register" class="label-large">
                    +380 (063) 111 11 11
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_55_1448)">
                    <path d="M9.26611 3.33344H3.43278C2.99075 3.33344 2.56683 3.50904 2.25427 3.8216C1.94171 4.13416 1.76611 4.55808 1.76611 5.00011V16.6668C1.76611 17.1088 1.94171 17.5327 2.25427 17.8453C2.56683 18.1578 2.99075 18.3334 3.43278 18.3334H15.0994C15.5415 18.3334 15.9654 18.1578 16.278 17.8453C16.5905 17.5327 16.7661 17.1088 16.7661 16.6668V10.8334M15.5161 2.08344C15.8476 1.75192 16.2973 1.56567 16.7661 1.56567C17.235 1.56567 17.6846 1.75192 18.0161 2.08344C18.3476 2.41496 18.5339 2.8646 18.5339 3.33344C18.5339 3.80228 18.3476 4.25192 18.0161 4.58344L10.0994 12.5001L6.76611 13.3334L7.59945 10.0001L15.5161 2.08344Z" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_55_1448">
                    <rect width="20" height="20" fill="white" transform="translate(0.0996094)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </NuxtLink>
            </div>
            <div class="otp-container">
              <input
                v-for="(digit, index) in code"
                :key="index"
                v-model="code[index]"
                ref="inputs"
                type="text"
                maxlength="1"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="one-time-code"
                @input="handleInput($event, index)"
                @keydown="handleBackspace($event, index)"
              />
            </div>
            <div class="code__resend">
                <p class="body-medium">Не прийшов код?</p>
                <NuxtLink
                    to="register"
                    class="btn btn--transparent"
                >
                    <p class="label-large">Надіслати повторно</p>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9328 1.66675L9.76611 10.8334M18.9328 1.66675L13.0994 18.3334L9.76611 10.8334M18.9328 1.66675L2.26611 7.50008L9.76611 10.8334" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const code = ref(["", "", "", ""]); // Масив із 4 полів
const inputs = ref([]); // Масив посилань на інпути
const router = useRouter()

// Функція зміни значення
const handleInput = (event, index) => {
  const value = event.target.value;
  
  if (/\d/.test(value)) { // Вводити тільки цифри
    code.value[index] = value;
    if (index < inputs.value.length - 1) {
      inputs.value[index + 1].focus(); // Перехід на наступне поле
    }
  } else {
    code.value[index] = "";
  }
  console.log(index, value, code.value.toString())
  if(code.value.toString() === '1,4,8,8') {
    router.push('/')
  }
};

// Обробка Backspace
const handleBackspace = (event, index) => {
  if (event.key === "Backspace" && index > 0 && !code.value[index]) {
    inputs.value[index - 1].focus(); // Перехід назад
  }
};

// Автоматичне заповнення коду з SMS (iOS)
onMounted(() => {
  if (inputs.value.length) {
    inputs.value[0].focus();
  }
});
</script>

<style lang="scss" scoped>
.code {
    height: calc(100vh - 36rem);
    padding: 8rem 0;
    &__text {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
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
    .display-small, .title-medium {
        text-align: center;
        margin: 0 0 1.6rem 0;
    } 
    .label-large {
        margin: 0 auto;
        display: flex;
        gap: 0.8rem;
        text-decoration: none;
        color: var(--primary-700)
    }
    &__resend {
        .body-medium {
            margin: 0 0 0.8rem 0;
            text-align: center;
            color: var(--neutrals-700)
        }
        .label-large {
            margin: 0;
        }
        .btn {
            color: var(--primary-700)
        }
    }
}

.otp-container {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
}

input {
  width: 4.8rem;
  height: 4.8rem;
  text-align: center;
  font-size: 1.6rem;
  font-family: 'Cy Grotesk', sans-serif;
  box-shadow: 0px 4px 16px 0px #0000000F;
  border: 2px solid var(--neutrals-300);
  border-radius: 8px;
}
</style>
