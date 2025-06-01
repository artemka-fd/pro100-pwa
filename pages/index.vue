<template>
<section class="home">
    <div class="container">
        <TagsComponent :tags="['Ремонт двигуна', 'Заміна масла', 'Покраска']" />
        <h3 class="title-medium">На цій сторінці ви можете переглянути <span>картки СТО-шек,</span> які ви відмітили :)</h3>

        <Listbox
            as="div"
            class="home__dropdown-listbox"
            v-model="selectedFilter"
        >
            <ListboxButton>
                <p class="body-large">{{ selectedFilter.name }}</p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </ListboxButton>
            <ListboxOptions>
                <ListboxOption
                v-for="filter in filters"
                :key="filter.id"
                :value="filter"
                :disabled="filter.unavailable"
                >
                {{ filter.name }}
                </ListboxOption>
            </ListboxOptions>
        </Listbox>
        <div class="home__cards">
            <StationCard v-for="station in stations" :key="station.nameSlug" :station="station" :userCoords="userLocation" />
        </div>
        <div class="home__load-more">
            <div class="btn btn--transparent">
                <p class="label-large">Завантажити більше</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10125_5342)">
                    <path d="M19.1663 3.33335V8.33335M19.1663 8.33335H14.1663M19.1663 8.33335L15.2997 4.70001C14.4041 3.80394 13.296 3.14935 12.079 2.79732C10.862 2.4453 9.5756 2.4073 8.33991 2.68689C7.10423 2.96648 5.95951 3.55454 5.01256 4.39619C4.06562 5.23785 3.34731 6.30567 2.92467 7.50001M0.833008 16.6667V11.6667M0.833008 11.6667H5.83301M0.833008 11.6667L4.69967 15.3C5.5953 16.1961 6.70332 16.8507 7.92035 17.2027C9.13738 17.5547 10.4238 17.5927 11.6594 17.3131C12.8951 17.0335 14.0398 16.4455 14.9868 15.6038C15.9337 14.7622 16.652 13.6944 17.0747 12.5" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_10125_5342">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>                    
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue'
import {
Listbox,
ListboxButton,
ListboxOptions,
ListboxOption,
} from '@headlessui/vue'
import TagsComponent from '~/components/TagsComponent.vue';
import { getStations } from '~/services/api/stations' 
import { useAuthStore } from '~/stores/authStore';
// import { getRouteFromMapbox } from '~/utils/getRoute'

// const stations = ref([
//     {
//         name: 'Сервіс на кільцевій',
//         description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
//         rating: 4,
//         address: 'Столичне шосе, 101Г, Київ',
//         time: 'Працює з 9:00',
//         tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
//         scheduleBusiness: 'Пн-Пт: 08:10-20:30',
//         scheduleWeekend: 'Сб-Нд: 9:15-21:00',
//         coords: [50.4, 30.5],
//         gallery: ['https://placecats.com/neo_banana/300/200'],
//         imageUrl: 'https://placecats.com/bella/300/200',
//     },
//     {
//         name: 'Сервіс на кільцевій',
//         description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
//         rating: 4,
//         address: 'Столичне шосе, 101Г, Київ',
//         time: 'Працює з 9:00',
//         tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
//         scheduleBusiness: 'Пн-Пт: 08:10-20:30',
//         scheduleWeekend: 'Сб-Нд: 9:15-21:00',
//         coords: [50.4, 30.5],
//         gallery: ['https://placecats.com/neo_banana/300/200'],
//         imageUrl: 'https://placecats.com/bella/300/200',
//     },
//     {
//         name: 'Сервіс на кільцевій',
//         description: 'Сервіс на Кільцевій - це сучасне СТО з професійним підходом! Сервіс на Кільцевій - це сучасне СТО з професійним підходом та цінами :)',
//         rating: 4,
//         address: 'Столичне шосе, 101Г, Київ',
//         time: 'Працює з 9:00',
//         tags: ['Ремонт двигуна', 'Заміна масла', 'Покраска'],
//         scheduleBusiness: 'Пн-Пт: 08:10-20:30',
//         scheduleWeekend: 'Сб-Нд: 9:15-21:00',
//         coords: [50.4, 30.5],
//         gallery: ['https://placecats.com/neo_banana/300/200'],
//         imageUrl: 'https://placecats.com/bella/300/200',
//     },
// ])

// dropdown

const userLocation = ref({ lat: null, lon: null })
const authStore = useAuthStore();

const { data: stations, pending, error } = await useAsyncData('stations', () =>
  getStations(50.4, 30.5)
)
console.log(stations)

onMounted(async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        userLocation.value.lat = position.coords.latitude
        userLocation.value.lon = position.coords.longitude
      },
      error => {
        userLocation.value.lat = 50.4429
        userLocation.value.lon = 30.5204
        console.error("Не вдалося отримати геолокацію", error)
      }
    )
  }
})

const filters = [
{ id: 1, name: 'Найпопулярніші', unavailable: false },
{ id: 2, name: 'Kenton Towne', unavailable: false },
{ id: 3, name: 'Therese Wunsch', unavailable: false },
{ id: 4, name: 'Benedict Kessler', unavailable: true },
{ id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedFilter = ref(filters[0])
onMounted(() => {
    console.log(authStore, 'user')
})
</script>

<style lang="scss">
$grid-gap: 2.8rem;

.home {
    .title-medium {
        color: var(--primary-1000);
        span {
            color: var(--warning-500)
        }
        margin: 0;
        margin-bottom: 2.8rem;
    }
    &__tags {
        display: flex;
        gap: 0.8rem;
        overflow-x: scroll;
        margin-bottom: 2.8rem;
    }
    &__cards {
        position: relative;
        width: 100%;
        display: grid;
        gap: $grid-gap;
        grid-template-columns: repeat(1, 1fr);
        /*
            Використовуємо вкладені медіа-запити в SCSS
        */

        /* Медіа-запит для планшетів */
        @media screen and (min-width: 768px) {
            /* Два стовпці на планшетах */
            grid-template-columns: repeat(2, 1fr);
        }

        /* Медіа-запит для десктопів */
        @media screen and (min-width: 1280px) {
            /* Три стовпці на десктопах */
            grid-template-columns: repeat(3, 1fr);
        }
    }
    &__load-more {
        margin-top: 2.8rem;
        .btn {
            cursor: pointer;
            width: fit-content;
            margin: 0 auto;
            transition: all 0.2s ease-in-out;
            svg {
                transition: all 0.2s ease-in-out;
            }
            .label-large {
                color: var(--primary-700);
            }
            &:hover {
                background-color: #3422f21a;
                svg {
                    transform: rotate(180deg);
                }
            }
        }
    }
    &__dropdown {
        margin-bottom: 2.8rem;
        position: relative;
        width: 100%;
        &-listbox {
            position: relative;
            width: 100%;
            margin-bottom: 2.8rem;
            >button {
                border: 0.1rem solid var(--neutrals-400);
                position: relative;
                width: 100%;
                background-color: var(--neutrals-100);
                border-radius: var(--round-8);
                padding: 0.8rem 1.6rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 4px 16px 0px #0000000F;
                > svg {
                    transition: all 0.2s ease;
                }
                > p {
                    margin: 0;
                }
                &[data-headlessui-state="open"] {
                    svg {
                        transform: rotate(180deg);
                    }
                }
            }
            >ul {
                position: absolute;
                z-index: 3;
            }
        }
    }
}
</style>