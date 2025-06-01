<template>
    <div class="station-card">
        <div class="station-card__top" ref="cardTop" @click="handleCardClick">
            <div class="station-card__top-top">
                <div class="station-card__top-image img-wrap">
                    <NuxtImg
                        :src="logo"
                        :alt="station.name"
                        format="webp"
                    />
                    <!-- <img :src="station.imageUrl ?? 'https://placecats.com/neo_banana/300/200'" alt="station-card" /> -->
                </div>
                <div class="station-card__top-like">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8936 3.07333C13.5531 2.73267 13.1488 2.46243 12.7038 2.27805C12.2588 2.09368 11.7819 1.99878 11.3002 1.99878C10.8186 1.99878 10.3416 2.09368 9.89667 2.27805C9.4517 2.46243 9.04741 2.73267 8.70691 3.07333L8.00024 3.78L7.29358 3.07333C6.60578 2.38554 5.67293 1.99914 4.70024 1.99914C3.72755 1.99914 2.7947 2.38554 2.10691 3.07333C1.41911 3.76112 1.03271 4.69397 1.03271 5.66666C1.03271 6.63935 1.41911 7.5722 2.10691 8.26L8.00024 14.1533L13.8936 8.26C14.2342 7.91949 14.5045 7.51521 14.6889 7.07023C14.8732 6.62526 14.9681 6.14832 14.9681 5.66666C14.9681 5.185 14.8732 4.70807 14.6889 4.26309C14.5045 3.81812 14.2342 3.41383 13.8936 3.07333Z" fill="white" stroke="#2111C5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                        
                </div>
            </div>
            <div class="station-card__top-bottom">
                <p class="title-large">{{ station.name }}</p>
                <div class="station-card__top-bottom__info">
                    <p class="label-medium">{{ station.distance }} км від вас</p>
                    <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00016 1.33331L10.0602 5.50665L14.6668 6.17998L11.3335 9.42665L12.1202 14.0133L8.00016 11.8466L3.88016 14.0133L4.66683 9.42665L1.3335 6.17998L5.94016 5.50665L8.00016 1.33331Z" fill="#FFC211" stroke="#FFC211" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.0002 1.33331L28.0602 5.50665L32.6668 6.17998L29.3335 9.42665L30.1202 14.0133L26.0002 11.8466L21.8802 14.0133L22.6668 9.42665L19.3335 6.17998L23.9402 5.50665L26.0002 1.33331Z" fill="#FFC211" stroke="#FFC211" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M44.0002 1.33331L46.0602 5.50665L50.6668 6.17998L47.3335 9.42665L48.1202 14.0133L44.0002 11.8466L39.8802 14.0133L40.6668 9.42665L37.3335 6.17998L41.9402 5.50665L44.0002 1.33331Z" fill="#FFC211" stroke="#FFC211" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M62.0002 1.33331L64.0602 5.50665L68.6668 6.17998L65.3335 9.42665L66.1202 14.0133L62.0002 11.8466L57.8802 14.0133L58.6668 9.42665L55.3335 6.17998L59.9402 5.50665L62.0002 1.33331Z" fill="#FFC211" stroke="#FFC211" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M80.0002 1.33331L82.0602 5.50665L86.6668 6.17998L83.3335 9.42665L84.1202 14.0133L80.0002 11.8466L75.8802 14.0133L76.6668 9.42665L73.3335 6.17998L77.9402 5.50665L80.0002 1.33331Z" stroke="#FFC211" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="station-card__bottom">
            <div class="station-card__bottom__info">
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
                <p class="body-medium">
                    {{ station.address }}
                </p>
            </div>
            <div class="station-card__bottom__info">
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
                <p class="body-medium">Працює з {{ station.workingHours.monday.start }}</p>
            </div>
            <TagsComponent :tags="['Ремонт двигуна', 'Заміна масла', 'Покраска']" />
            <div class="station-card__bottom__btns">
                <div class="btn btn--primary-dark">
                    <p class="label-large">Бронювати</p>
                </div>
                <div class="btn btn--primary">
                    <NuxtLink :to="`/station/${station.nameSlug}`" class="label-large">Детальніше</NuxtLink>
                </div>
                <div class="btn btn--transparent">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_241_2161)">
                        <path d="M18.3332 14.1V16.6C18.3341 16.8321 18.2866 17.0618 18.1936 17.2745C18.1006 17.4871 17.9643 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1112 17.2005 18.1856C16.9806 18.2599 16.7477 18.2876 16.5165 18.2667C13.9522 17.988 11.489 17.1118 9.32486 15.7083C7.31139 14.4289 5.60431 12.7218 4.32486 10.7083C2.91651 8.53434 2.04007 6.05916 1.76653 3.48334C1.7457 3.25289 1.77309 3.02064 1.84695 2.80136C1.9208 2.58208 2.03951 2.38058 2.1955 2.20969C2.3515 2.0388 2.54137 1.90226 2.75302 1.80877C2.96468 1.71528 3.19348 1.66689 3.42486 1.66667H5.92486C6.32928 1.66269 6.72136 1.8059 7.028 2.06961C7.33464 2.33332 7.53493 2.69954 7.59153 3.1C7.69705 3.90006 7.89274 4.68561 8.17486 5.44167C8.28698 5.73994 8.31125 6.0641 8.24478 6.37574C8.17832 6.68737 8.02392 6.97343 7.79986 7.2L6.74153 8.25834C7.92783 10.3446 9.65524 12.072 11.7415 13.2583L12.7999 12.2C13.0264 11.9759 13.3125 11.8215 13.6241 11.7551C13.9358 11.6886 14.2599 11.7129 14.5582 11.825C15.3143 12.1071 16.0998 12.3028 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2932 18.3433 13.6913 18.3332 14.1Z" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_241_2161">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>                        
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    station: {
        type: Object,
        required: true,
    },
    userCoords: {
        type: Object,
        required: false,
        default: {
            lat: 50.4,
            lon: 30.5
        }
    }
})
const router = useRouter()
const config = useRuntimeConfig()

const cardTop = ref(null)
const logo = ref(null)

const handleCardClick = () => {
    router.push(`/station/${props.station.nameSlug}`)
}

onMounted(async () => {
    cardTop.value.style.backgroundImage = `url(${props.station.photoUrls[0].replace('https', 'http')})`
    logo.value = props.station.logoUrl.replace('https', 'http')
})

</script>

<style lang="scss">
.station-card {
    box-shadow: 0px 0px 100px 0px #0000001A;
    border-radius: var(--round-16);
    min-width: 0;
    &__top {
        background-size: cover;
        position: relative;
        padding: 0.8rem;
        border-radius: var(--round-16) var(--round-16) 0 0;
        z-index: 2;
        cursor: pointer;
        &-like {
            padding: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--primary-200);
            border-radius: var(--round-8);
            svg {
                width: 1.6rem;
                height: 1.6rem;
                fill: var(--primary-1000);
            }
        }
        &-top {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 4.8rem;
        }
        &-bottom {
            padding: 0 0.8rem;
            margin: -0.8rem;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
            &__info {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .title-large {
                color: var(--neutrals-100);
                font-weight: 500;
                margin: 0;
            }
            .label-medium {
                color: var(--warning-500);
            }
        }
        &-image {
            width: 5.6rem;
            height: 5.6rem;
            border: 0.88px solid var(--neutrals-400);
            border-radius: var(--round-8);
            > img {
                object-fit: cover;
                border-radius: var(--round-8);
            }
        }
    }
    &__bottom {
        padding: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
            .tags-container-wrapper {
                margin-bottom: 0;
                flex-shrink: 1;
            }
        &__info {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            p {
                margin: 0;
            }
        }
        &__tags {
            display: flex;
            overflow-x: scroll;
            gap: 0.8rem;
            p {
                margin: 0;
            }
        }
        &__btns {
            display: flex;
            justify-content: space-between;
            gap: 0.8rem;
            .btn {
                flex-grow: 1;
                p {
                    font-weight: 500;
                    letter-spacing: 0.1px;
                }
            }
            .btn--transparent {
                flex-grow: 0;
            }
        }
    }
}
</style>