<template>
<section class="station">
    <div class="container">
        <!-- breadcrumbs -->
        <div class="btn btn--transparent btn--back desktop--hide" @click="handleBackBtn">
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
            <div class="station__main__top">
                <div class="station__main__gallery">
                    <div class="img-wrap">
                        <img :src="station.photoUrls[0].replace('https', 'http') ?? 'https://placecats.com/millie_neo/300/200'" alt="gallery" />
                    </div>
                </div>
                <div class="station__main__description-wrap">
                    <p class="mobile--hide title-large">Опис</p>
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
                            <p class="body-small">{{station.address}}</p>                   
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
                            <p class="body-small">Працює з {{ dayOfWeek.start }}:00</p>
                        </div>
                    </div>
                    <TagsComponent :tags="['Ремонт двигуна', 'Заміна масла', 'Покраска']" />
                </div>
            </div>
            <div class="station__main__bottom">
                <div class="station__main__bottom-left">
                    <div class="station__main__contacts">
                        <h3 class="title-large">Контактна інформація</h3>
                        <p class="title-small">Ви можете лишити заявку і бізнес зкомуніуцє з вами або звʼязатись з компанією самостійсно.</p>
                    </div>
                    <div class="station__main__schedule">
                        <h3 class="title-large">Графік роботи:</h3>
                        <p class="body-large">Пн-Пт: {{ station.workingHours.monday.start }} - {{ station.workingHours.monday.end }}</p>
                        <p class="body-large">Сб-Нд: {{ station.workingHours }} - {{ station.workingHours }}</p>
                        <!-- <p class="body-large">32432</p> -->
                    </div>
                    <div class="desktop--hide btn btn--primary">Звʼязатися</div>
                </div>
                <div class="station__map">
                    <MapBoxMap
                        :locations="[station]"
                        ref="mapRef"
                    /> 
                </div>
            </div>
            <div class="station__main__btns">
                <p class="label-small">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0013 9.58332C9.44877 9.58332 8.91886 9.36383 8.52816 8.97313C8.13746 8.58243 7.91797 8.05252 7.91797 7.49999C7.91797 6.94746 8.13746 6.41755 8.52816 6.02685C8.91886 5.63615 9.44877 5.41666 10.0013 5.41666C10.5538 5.41666 11.0837 5.63615 11.4744 6.02685C11.8651 6.41755 12.0846 6.94746 12.0846 7.49999C12.0846 7.77358 12.0307 8.04449 11.9261 8.29725C11.8214 8.55001 11.6679 8.77967 11.4744 8.97313C11.281 9.16658 11.0513 9.32004 10.7986 9.42474C10.5458 9.52944 10.2749 9.58332 10.0013 9.58332ZM10.0013 1.66666C8.45421 1.66666 6.97047 2.28124 5.87651 3.3752C4.78255 4.46916 4.16797 5.95289 4.16797 7.49999C4.16797 11.875 10.0013 18.3333 10.0013 18.3333C10.0013 18.3333 15.8346 11.875 15.8346 7.49999C15.8346 5.95289 15.2201 4.46916 14.1261 3.3752C13.0321 2.28124 11.5484 1.66666 10.0013 1.66666Z" fill="#0B0A0A"/>
                        </svg>
                    {{ station.address }}
                </p>
                <a
                    class="btn btn--primary-dark"
                    target="_blank"
                    :href="`https://www.google.com/maps/search/?api=1&query=${station.location.coordinates[1]},${station.location.coordinates[0]}`"
                >
                    Прокласти маршрут
                </a>
                <div class="mobile--hide btn btn--primary">Звʼязатися</div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import TagsComponent from '~/components/TagsComponent.vue';
import { getStation } from '~/services/api/stations';
import moment from 'moment';

const router = useRouter()
const dayOfWeek = ref('')
const date = moment()
const momentDayOfWeek = date.weekday()



const { data: station, pending, error } = await useAsyncData('station', () =>
  getStation(router.currentRoute.value.params.id)
)


switch (momentDayOfWeek) {
    case 0: dayOfWeek.value = station.value.workingHours.sunday ?? '';
            break;
    case 1: dayOfWeek.value = station.value.workingHours.monday ?? '';
            break;
    case 2: dayOfWeek.value = station.value.workingHours.tuesday ?? '';
            break;
    case 3: dayOfWeek.value = 'station.value.workingHours.wednesday' ?? '';
            break;
    case 4: dayOfWeek.value = station.value.workingHours.thursday ?? '';
            break;
    case 5: dayOfWeek.value = station.value.workingHours.friday ?? '';
            break;
    case 6: dayOfWeek.value = station.value.workingHours.saturday ?? '';
            break;
}

// for tags
const tagsContainer = ref(null);
const showGradientLeft = ref(false);
const showGradientRight = ref(false);
let startX = 0;
let scrollLeft = 0;
const handleScroll = () => {
  const container = tagsContainer.value;
  if (container) {
    showGradientLeft.value = container.scrollLeft > 0;
    showGradientRight.value = container.scrollLeft + container.offsetWidth < container.scrollWidth;
  }
};
const handleTouchStart = (e) => {
  if (tagsContainer.value) {
    startX = e.touches[0].clientX;
    scrollLeft = tagsContainer.value.scrollLeft;
    tagsContainer.value.style.scrollBehavior = 'auto'; // Вимикаємо плавну прокрутку на час свайпу
  }
};
const handleTouchMove = (e) => {
  if (tagsContainer.value) {
    const diffX = e.touches[0].clientX - startX;
    tagsContainer.value.scrollLeft = scrollLeft - diffX;
  }
};
const handleTouchEnd = () => {
  if (tagsContainer.value) {
    tagsContainer.value.style.scrollBehavior = 'smooth'; // Вмикаємо плавну прокрутку після свайпу
  }
};
const handleBackBtn = () => {
    router.back()
}

onMounted(() => {
  if (tagsContainer.value) {
    tagsContainer.value.addEventListener('scroll', handleScroll);
    tagsContainer.value.addEventListener('touchstart', handleTouchStart);
    tagsContainer.value.addEventListener('touchmove', handleTouchMove);
    tagsContainer.value.addEventListener('touchend', handleTouchEnd);
    handleScroll(); // Ініціалізуємо відображення градієнтів при завантаженні
  }

  console.log(momentDayOfWeek);  
  console.log(dayOfWeek.value);  
  console.log(station.value);  
});

</script>

<style lang="scss">
.station {
    margin-bottom: 8rem;
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
        &__top {
            display: flex;
            flex-direction: column;
            @media screen and (min-width: 1024px) {
                flex-direction: row;
                gap: 2.8rem;
                .station__main__gallery {
                    width: 51.5rem;
                    flex-shrink: 0;
                    height: 35.1rem;
                }
                .tags-container-wrapper {
                    overflow: hidden;
                    width: 57.7rem;
                }
            }
        }
        &__bottom {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            @media screen and (min-width: 1024px) {
                flex-direction: row;
                .map-container {
                    height: 26.8rem;
                    border-radius: 1.6rem;
                    margin-bottom: 0;
                }
            }
        }
        &__btns {
            display: flex;
            flex-direction: column;
            @media screen and (min-width: 1024px) {
                margin-top: 2.8rem;
                flex-direction: row-reverse;
                justify-content: space-between;
                align-items: center;
                gap: 7rem;
                .label-small {
                    margin: 0;
                }
                .btn {
                    width: 100%;
                    margin-bottom: 0 !important;
                }
            }
        }
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
                height: 100%;
                img {
                    object-fit: cover;
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
        @media screen and (min-width: 768px) {
            width: 100%;
        }
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