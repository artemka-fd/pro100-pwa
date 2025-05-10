<template>
<div class="reservation-card">
    <div class="reservation-card__top">
        <div class="reservation-card__top-image img-wrap img-wrap--cover">
            <img :src="station.imageUrl" :alt="`${station.name} Logo`">
        </div>
        <p class="title-medium">{{ station.name }}</p>
    </div>
    <div class="reservation-card__info">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_3010)">
            <path d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54926 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54926 14 5.07539 14 6.66669Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_233_3010">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>                    
        <p class="body-medium">{{ station.address }}</p>
    </div>
    <div class="reservation-card__info">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_3014)">
            <path d="M8.00016 3.99998V7.99998L10.6668 9.33331M14.6668 7.99998C14.6668 11.6819 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 7.99998C1.3335 4.31808 4.31826 1.33331 8.00016 1.33331C11.6821 1.33331 14.6668 4.31808 14.6668 7.99998Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_233_3014">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>                                      
        <p class="body-medium">{{ station.time }}</p>
    </div>
    <div class="reservation-card__btns">
        <div class="btn btn--primary-dark label-large">
            Детально
        </div>
        <div class="btn btn--primary label-large">
            Звʼязатися
        </div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    station: {
        type: Object,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.reservation-card {
    background-color: var(--neutrals-100);
    padding: 1.6rem;
    border-radius: var(--round-12);
    box-shadow: 0px 4px 16px 0px #0000000F;
    &__top {
        display: flex;
        justify-content: start;
        gap: 0.8rem;
        align-items: center;
        margin-bottom: 1.6rem;
        .title-medium {
            margin: 0;
        }
        .img-wrap {
            border-radius: var(--round-4);
            border: 0.88px solid var(--neutrals-400);
            width: 3.2rem;
            height: 3.2rem;
        }
        &__image {
            .title-medium {
                margin-top: 0;
            }
        }
    }
    &__info {
        display: flex;
        gap: 0.8rem;
        align-items: center;
        margin-bottom: 1.6rem;
        p {
            margin: 0;
        }
        @media screen and (min-width: 768px) {
            margin-bottom: 0.8rem;
        }
    }
    &__btns {
        display: flex;
        gap: 0.8rem;
        .btn {
            flex-grow: 1;
        }
        @media screen and (min-width: 768px) {
            margin-top: 1.6rem;
        }
    }
    &--disabled {
        opacity: 0.5;
    }
}
</style>