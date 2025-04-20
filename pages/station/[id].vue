<template>
<section class="station">
    <div class="container">
        <div class="btn btn--transparent" @click="handleBackBtn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="label-large">Назад</p>
        </div>
        <div class="station__main">
            <h2 class="title-large">{{station.name}}</h2>
            <div class="station__main__rating">
                <div class="station__main__rating-distance"><p class="label-medium">12км від вас</p></div>
                <div class="station__main__rating-stars">
                    <div class="rating-stars">
                        <div class="stars">
                          <template v-for="i in 5" :key="i">
                            <svg
                              class="star"
                              :class="{ filled: i <= station.rating }"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.99967 1.33331L10.0597 5.50665L14.6663 6.17998L11.333 9.42665L12.1197 14.0133L7.99967 11.8466L3.87967 14.0133L4.66634 9.42665L1.33301 6.17998L5.93967 5.50665L7.99967 1.33331Z"
                                stroke="#FFC211"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                :fill="i <= station.rating ? '#FFC211' : 'none'"
                              />
                            </svg>
                          </template>
                        </div>
                    </div>
                </div>
            </div>
            <div class="station__main__gallery">
                <div class="img-wrap">
                    <img :src="station.gallery[0]" alt="gallery" />
                </div>
            </div>
            <p class="station__main__description body-large">{{station.description}}</p>
            <div class="station__main__info">
                <div class="station__main__info-text">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_29_3446)">
                        <path d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54926 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54926 14 5.07539 14 6.66669Z" stroke="#2111C5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z" stroke="#2111C5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_29_3446">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>     
                    <p class="body-small">Столичне шосе, 101Г, Київ</p>                   
                </div>
                <div class="station__main__info-text">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_29_3449)">
                        <path d="M7.99967 4.00001V8.00001L10.6663 9.33334M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#2111C5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_29_3449">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p class="body-small">Працює з 9:00</p>
                </div>
            </div>
            <div class="station__main__tags">
                <div class="tag label-medium">Ремонт двигуна</div>
                <div class="tag label-medium">Заміна масла</div>    
                <div class="tag label-medium">Ремонт двигуна</div>
                <div class="tag label-medium">Заміна масла</div>    
                <div class="tag label-medium">Ремонт двигуна</div>
                <div class="tag label-medium">Заміна масла</div>    
            </div>
            <div class="station__main__contacts">
                <h3 class="title-large">Контактна інформація</h3>
                <p class="title-small">Ви можете лишити заявку і бізнес зкомуніуцє з вами або звʼязатись з компанією самостійсно.</p>
            </div>
            <div class="station__main__schedule">
                <h3 class="title-large">Графік роботи:</h3>
                <p class="body-large">{{station.scheduleBusiness}}</p>
                <p class="body-large">{{station.scheduleWeekend}}</p>
            </div>
            <div class="btn btn--primary">Звʼязатися</div>
            <div class="station__map">
                <MapBoxMap
                    :locations="[{lat: station.coords[0], lng: station.coords[1], imageUrl: station.imageUrl}]"
                    ref="mapRef"
                /> 
            </div>
            <p class="label-small">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0013 9.58332C9.44877 9.58332 8.91886 9.36383 8.52816 8.97313C8.13746 8.58243 7.91797 8.05252 7.91797 7.49999C7.91797 6.94746 8.13746 6.41755 8.52816 6.02685C8.91886 5.63615 9.44877 5.41666 10.0013 5.41666C10.5538 5.41666 11.0837 5.63615 11.4744 6.02685C11.8651 6.41755 12.0846 6.94746 12.0846 7.49999C12.0846 7.77358 12.0307 8.04449 11.9261 8.29725C11.8214 8.55001 11.6679 8.77967 11.4744 8.97313C11.281 9.16658 11.0513 9.32004 10.7986 9.42474C10.5458 9.52944 10.2749 9.58332 10.0013 9.58332ZM10.0013 1.66666C8.45421 1.66666 6.97047 2.28124 5.87651 3.3752C4.78255 4.46916 4.16797 5.95289 4.16797 7.49999C4.16797 11.875 10.0013 18.3333 10.0013 18.3333C10.0013 18.3333 15.8346 11.875 15.8346 7.49999C15.8346 5.95289 15.2201 4.46916 14.1261 3.3752C13.0321 2.28124 11.5484 1.66666 10.0013 1.66666Z" fill="#0B0A0A"/>
                    </svg>
                {{ station.address }}
            </p>
            <a
                class="btn btn--primary-dark"
                target="_blank"
                :href="`https://www.google.com/maps/search/?api=1&query=${station.coords[0]},${station.coords[1]}`"
            >
                Прокласти маршрут
        </a>
        </div>
    </div>
</section>
</template>

<script setup>
import useRouter from 'vue-router';

const station = ref({
    name: 'Сервіс на кільцевій',
    description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
    rating: 4,
    address: 'Столичне шосе, 101Г, Київ',
    time: 'Працює з 9:00',
    tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
    scheduleBusiness: 'Пн-Пт: 08:10-20:30',
    scheduleWeekend: 'Сб-Нд: 9:15-21:00',
    coords: [50.4, 30.5],
    gallery: ['https://s3-alpha-sig.figma.com/img/57d9/327e/009ead6e9d3fe305bd7332c3462417fb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BC0KygqnFzR9v5g-OPQBPZLd4DhEDMvSTUOubyPiCf1UJeDIJnVBnrAefwJT6-QqVT1njOZc3A4ggqfmEbJzF71TjrpDbU-e6541ut6WhJRJtwn8VPorcC~lv~fxTpzxKgmlDaZ~Au-1tWyfgaQ~Nlqzz0ZL71-CZHuxHiS1WIbcP4gX-4nMkWJpG13AoPJgybMxM6Es29GTJpyzuHLf4x2bg5l7gB0BIwsl54TSlRUr4YjNfu9SQ96JgNZNhy5H7oLR59WYnwiuLM3JIAOhuYNSUMQDcNYTMTS8lJ5dri6zaWL3V7XQHpIBfOVQ63L8aUmsUAiwuguVP6RfSPmgow__'],
    imageUrl: 'https://s3-alpha-sig.figma.com/img/7f6f/1740/bb519962ee07438a1a28951c5d5294c7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MWS6KVrp~OkZacjoisEJvaehhMmoIiYyADmqVrvSp5aJ5D1cSvWxGqxKFYNzb-grBxv47arVlwXVaCiUq7vHJGUicicZ3QlbT0EqtHCXPxB~KWnk8jK51ZfcvskZYgLcGD6vq8Ir6SgDbQcJInvBpb5pixETFSXCdaGz5XW4gJa4UydkV2CQpictQD1YsLz-SOpg7UyZcun0VSZErsd7d~CEQpdwGkHlPTzTJPzb~Dt3w7AJDsTgCWRS52x1w8e2AvHITVVQahDpJ7JtrvJAFFPlQiH4Ak44mVh6xCBKO68kUCHWLDK-sir36zENVqui9WRAMrupBnjxes8rhI-SDg__',
})

const router = useRouter();
const handleBackBtn = () => {
    router.back();
}
</script>

<style lang="scss">
.station {
    .label-small {
        display: flex;
        gap: 0.8rem;
        align-items: center;
        margin-bottom: 2.2rem;
        font-weight: 500;
    }
    > .btn--transparent {
        padding: 0;
        color: var(--primary-700);
        display: flex;
        justify-content: start;
        margin-bottom: 2.8rem;
    }
    &__main {
        .label-medium {
            margin: 0;
        }
        .title-large {
            margin: 0;
            font-weight: 500;
            margin-bottom: 0.8rem;;
        }
        &__rating {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2.8rem;
            &-distance {
                color: var(--warning-500)
            }
        }
        &__gallery {
            margin-bottom: 2.8rem;
            border: 0.1rem solid var(--neutrals-300);
            border-radius: var(--round-16);
            .img-wrap {
                img {
                    border-radius: var(--round-16);
                }
                position: relative;
                &::after {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
                    z-index: 3;
                }
            }
        }
        &__description {
            margin-bottom: 2.8rem;
        }
        &__info {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            margin-bottom: 2.8rem;
            &-text {
                color: var(--primary-800);
                display: flex;
                gap: 0.8rem;
                p {
                    margin: 0;
                }
            }
        }
        &__tags {
            width: 100%;
            overflow-x: scroll;
            display: flex;
            gap: 0.8rem;
            margin-bottom: 2.8rem;
        }
        &__contacts {
            margin-bottom: 2.8rem;
            h3 {
                margin: 0 0 1.6rem 0;
            }
            p {
                font-size: 1.4rem;
                font-weight: 500;
                margin: 0;
            }
        }
        &__schedule {
            margin-bottom: 2.8rem;
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            h3 {
                margin: 0;
                margin-bottom: 0;
                font-weight: 500;
            }
            p {
                margin: 0;
            }
        }
    }
    &__map {
        margin-bottom: 2.8rem;
        box-shadow: 0px 2px 4px 0px #1B1C1D0A;
        > #map {
            border-radius: var(--round-16);
            height: 34.3rem;
        }
    }
    .btn--primary, .btn--primary-dark {
        margin-bottom: 2.8rem;
        padding: 1.1rem 0.925rem;
    }
}
</style>