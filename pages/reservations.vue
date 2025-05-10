<template>
<section class="reservations">
    <div class="container">
        <div class="reservations__heading desktop--hide">
            <div class="btn btn--transparent" @click="handleBackBtn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="label-large">Назад</p>                    
            </div>
            <p class="body-large">Мої бронювання</p>
        </div>
        <!-- to fix -->
        <div class="reservations__top">
            <div class="reservations__tags">
                <div :class="['tag', 'label-medium', {'tag--active': currentFilter == 'reservations'}]" @click="changeFilter('reservations')">Нові</div> 
                <div :class="['tag', 'label-medium', {'tag--active': currentFilter == 'orders'}]" @click="changeFilter('orders')">В процесі</div> 
                <div :class="['tag', 'label-medium', {'tag--active': currentFilter == 'contracts'}]" @click="changeFilter('contracts')">Завершені</div> 
            </div>
            <h2 class="title-medium">Ми вже передали ваші замовлення сервісам, які скоро звʼяжуться з вами!</h2>
        </div>
        <div class="reservations__cards">
            <ReservationCard v-for="station in stations" :key="station.name" :station="station" @click="handleCardClick(station)" />
        </div>
        <BottomSheetComponent v-if="currentsStation" :visible="bottomSheetVisible" @close="bottomSheetVisible = false">
            <div class="reservation-details">
                <div class="reservation-details__top desktop--hide">
                    <div class="btn btn--transparent" @click="closeBottomSheet">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 15L7.5 10L12.5 5" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="label-large">Назад</p>                    
                    </div>
                    <p class="body-large">Мої бронювання</p>
                </div>
                <h2 class="title-medium desktop--hide">Про СТО</h2>
                <div class="reservation-details__gallery img-wrap img-wrap--cover">
                    <img v-for="img in currentsStation.gallery" :key="currentsStation.gallery" :src="img" alt="station-card" />
                </div>
                <div class="reservation-details__info">
                    <div class="reservation-details__info__title">
                        <div class="img-wrap img-wrap--cover">
                            <img :src="currentsStation.imageUrl" alt="station-card" />
                        </div>
                        <h3 class="title-large">{{ currentsStation.name }}</h3>
                    </div>
                    <div class="rating-stars">
                        <div class="stars">
                          <template v-for="i in 5" :key="i">
                            <svg
                              class="star"
                              :class="{ filled: i <= currentsStation.rating }"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.99967 1.33331L10.0597 5.50665L14.6663 6.17998L11.333 9.42665L12.1197 14.0133L7.99967 11.8466L3.87967 14.0133L4.66634 9.42665L1.33301 6.17998L5.93967 5.50665L7.99967 1.33331Z"
                                stroke="#00B451"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                :fill="i <= currentsStation.rating ? '#00B451' : 'none'"
                              />
                            </svg>
                          </template>
                        </div>
                      </div>
                    <p class="body-medium">{{ currentsStation.description }}</p>
                    <div class="reservation-details__info__data">
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
                        <p class="body-small">{{ currentsStation.address }}</p>
                    </div>
                    <div class="reservation-details__info__data">
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
                        <p class="body-small">{{ currentsStation.time }}</p>
                    </div>
                    <div class="reservation-details__info__tags">
                        <div v-for="tag in currentsStation.tags" :key="tag" class="tag label-medium">{{ tag }}</div>
                    </div>
                </div>
                <div class="reservation-details__btns">
                    <div class="btn btn--primary">
                        <p class="label-large">Звʼязатися</p>
                    </div>
                    <div class="btn btn--transparent btn--transparent--red">
                        <p class="label-large">Відмінити бронювання</p>
                    </div>
                </div>
            </div>
        </BottomSheetComponent>
    </div>
</section>
</template>

<script setup>
import BottomSheetComponent from '~/components/BottomSheetComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const currentFilter = ref('reservations')

const stations = ref([
    {
        name: 'Сервіс на кільцевій',
        description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом!',
        rating: 4,
        address: 'Столичне шосе, 101Г, Київ',
        time: 'Працює з 9:00',
        tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
        scheduleBusiness: 'Пн-Пт: 08:10-20:30',
        scheduleWeekend: 'Сб-Нд: 9:15-21:00',
        coords: [50.4, 30.5],
        gallery: ['https://placecats.com/300/200'],
        imageUrl: 'https://placecats.com/millie_neo/300/200',
    },
    {
        name: 'Сервіс на кільцевій',
        description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
        rating: 4,
        address: 'Столичне шосе, 101Г, Київ',
        time: 'Працює з 9:00',
        tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
        scheduleBusiness: 'Пн-Пт: 08:10-20:30',
        scheduleWeekend: 'Сб-Нд: 9:15-21:00',
        coords: [50.4, 30.5],
        gallery: ['https://placecats.com/300/200'],
        imageUrl: 'https://placecats.com/millie_neo/300/200',
    },
    {
        name: 'Сервіс на кільцевій',
        description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
        rating: 4,
        address: 'Столичне шосе, 101Г, Київ',
        time: 'Працює з 9:00',
        tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
        scheduleBusiness: 'Пн-Пт: 08:10-20:30',
        scheduleWeekend: 'Сб-Нд: 9:15-21:00',
        coords: [50.4, 30.5],
        gallery: ['https://placecats.com/300/200'],
        imageUrl: 'https://placecats.com/millie_neo/300/200',
    },
    {
        name: 'Сервіс на кільцевій',
        description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом!',
        rating: 4,
        address: 'Столичне шосе, 101Г, Київ',
        time: 'Працює з 9:00',
        tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
        scheduleBusiness: 'Пн-Пт: 08:10-20:30',
        scheduleWeekend: 'Сб-Нд: 9:15-21:00',
        coords: [50.4, 30.5],
        gallery: ['https://placecats.com/300/200'],
        imageUrl: 'https://placecats.com/millie_neo/300/200',
    },
    {
        name: 'Сервіс на кільцевій',
        description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
        rating: 4,
        address: 'Столичне шосе, 101Г, Київ',
        time: 'Працює з 9:00',
        tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
        scheduleBusiness: 'Пн-Пт: 08:10-20:30',
        scheduleWeekend: 'Сб-Нд: 9:15-21:00',
        coords: [50.4, 30.5],
        gallery: ['https://placecats.com/300/200'],
        imageUrl: 'https://placecats.com/millie_neo/300/200',
    },
    {
        name: 'Сервіс на кільцевій',
        description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
        rating: 4,
        address: 'Столичне шосе, 101Г, Київ',
        time: 'Працює з 9:00',
        tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
        scheduleBusiness: 'Пн-Пт: 08:10-20:30',
        scheduleWeekend: 'Сб-Нд: 9:15-21:00',
        coords: [50.4, 30.5],
        gallery: ['https://placecats.com/300/200'],
        imageUrl: 'https://placecats.com/millie_neo/300/200',
    },
])
const bottomSheetVisible = ref(true)
const currentsStation = ref(null)

const handleCardClick = (station) => {
    currentsStation.value = station
    document.body.style.overflow = 'hidden'
    bottomSheetVisible.value = true
}

const closeBottomSheet = () => {
    document.body.style.overflow = 'auto'
    bottomSheetVisible.value = false
}

const handleBackBtn = () => {
    router.back();
}
</script>

<style lang="scss">
.reservations {
    .title-medium {
        margin: 2.8rem 0;
        @media screen and (min-width: 768px) {
            margin: 2.8rem 0 0;
        }
    }
    &__heading {
        .btn {
            padding-left: 0;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            margin: 0;
        }
    }
    &__tags {
        margin-top: 2rem;
        display: flex;
        gap: 0.8rem;
        @media screen and (min-width: 768px) {
            margin-bottom: 2.8rem;
        }
    }
    &__top {
        display: flex;
        flex-direction: column;
        align-items: start;
        @media screen and (min-width: 768px) {
            flex-direction: column-reverse;
        }
    }
    &__cards {
        display: flex;
        gap: 1.6rem;
        flex-direction: column;
        @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2.8rem;

        }
    }
}
.reservation-details {
    display: flex;
    flex-direction: column;
    height: 100%;
    .btn--primary {
        margin-bottom: 0.8rem;
    }
    &__top {
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
    &__gallery {
        margin-bottom: 2rem;
        border-radius: var(--round-16);
        @media screen and (min-width: 768px) {
            border-radius: 0;
            margin: -1.6rem -1.6rem 2rem -1.6rem;
        }
    }
    &__info {
        &__title {
            display: flex;
            gap: 0.8rem;
            align-items: center;
            margin-bottom: 1.6rem;
            .title-large {
                margin: 0;
                font-weight: 500;
            }
            .img-wrap {
                width: 3.2rem;
                height: 3.2rem;
                border-radius: var(--round-8);
                border-top: 0.88px solid var(--neutrals-400);
            }
        }
        &__data {
            display: flex;
            gap: 0.8rem;
            align-items: center;
            color: var(--primary-800);
            path {
                stroke: var(--primary-800);
            }
            p {
                margin: 0;
            }
            margin-bottom: 0.8rem;
        }
        &__tags {
            display: flex;
            gap: 0.8rem;
            margin-top: 2.8rem;
            margin-bottom: 6.2rem;
        }
        .rating-stars {
            path {
                stroke: var(--warning-500);
                fill: var(--warning-500);
            }
        }
    }
    &__btns {
        margin-top: auto;
    }
}
</style>