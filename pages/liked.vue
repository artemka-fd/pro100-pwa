<template>
<section class="liked">
    <div class="container">
        <div class="liked__heading">            
            <div class="btn btn--transparent" @click="handleBackBtn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="label-large">Назад</p>                    
            </div>
            <p class="body-large">Обрані</p>
        </div>
        <h2 class="title-medium">На цій сторінці ви можете переглянути <span>картки СТО-шек,</span> які ви відмітили :)</h2>
    </div>
</section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const handleBackBtn = () => {
    router.back();
}
</script>

<style lang="scss">
.liked {
    .title-medium {
        margin-top: 0rem;
        margin-bottom: 2.8rem;
        span {
            color: var(--warning-500)
        }
    }
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
}
</style>