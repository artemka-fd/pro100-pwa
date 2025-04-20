<template>
<section class="home">
    <div class="container">
        <div class="home__tags">
            <div class="tag tag--active label-medium">Всі</div>
            <div class="tag label-medium">Авто</div>
            <div class="tag label-medium">Мото</div>
            <div class="tag label-medium">Кардан</div>
            <div class="tag label-medium">Карбюратор</div>
            <div class="tag label-medium">ГБО</div>
        </div>
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
            <StationCard v-for="station in stations" :key="station.name" :station="station" />
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

const stations = ref([
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
        gallery: ['https://s3-alpha-sig.figma.com/img/57d9/327e/009ead6e9d3fe305bd7332c3462417fb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BC0KygqnFzR9v5g-OPQBPZLd4DhEDMvSTUOubyPiCf1UJeDIJnVBnrAefwJT6-QqVT1njOZc3A4ggqfmEbJzF71TjrpDbU-e6541ut6WhJRJtwn8VPorcC~lv~fxTpzxKgmlDaZ~Au-1tWyfgaQ~Nlqzz0ZL71-CZHuxHiS1WIbcP4gX-4nMkWJpG13AoPJgybMxM6Es29GTJpyzuHLf4x2bg5l7gB0BIwsl54TSlRUr4YjNfu9SQ96JgNZNhy5H7oLR59WYnwiuLM3JIAOhuYNSUMQDcNYTMTS8lJ5dri6zaWL3V7XQHpIBfOVQ63L8aUmsUAiwuguVP6RfSPmgow__'],
        imageUrl: 'https://s3-alpha-sig.figma.com/img/7f6f/1740/bb519962ee07438a1a28951c5d5294c7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MWS6KVrp~OkZacjoisEJvaehhMmoIiYyADmqVrvSp5aJ5D1cSvWxGqxKFYNzb-grBxv47arVlwXVaCiUq7vHJGUicicZ3QlbT0EqtHCXPxB~KWnk8jK51ZfcvskZYgLcGD6vq8Ir6SgDbQcJInvBpb5pixETFSXCdaGz5XW4gJa4UydkV2CQpictQD1YsLz-SOpg7UyZcun0VSZErsd7d~CEQpdwGkHlPTzTJPzb~Dt3w7AJDsTgCWRS52x1w8e2AvHITVVQahDpJ7JtrvJAFFPlQiH4Ak44mVh6xCBKO68kUCHWLDK-sir36zENVqui9WRAMrupBnjxes8rhI-SDg__',
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
        gallery: ['https://s3-alpha-sig.figma.com/img/57d9/327e/009ead6e9d3fe305bd7332c3462417fb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BC0KygqnFzR9v5g-OPQBPZLd4DhEDMvSTUOubyPiCf1UJeDIJnVBnrAefwJT6-QqVT1njOZc3A4ggqfmEbJzF71TjrpDbU-e6541ut6WhJRJtwn8VPorcC~lv~fxTpzxKgmlDaZ~Au-1tWyfgaQ~Nlqzz0ZL71-CZHuxHiS1WIbcP4gX-4nMkWJpG13AoPJgybMxM6Es29GTJpyzuHLf4x2bg5l7gB0BIwsl54TSlRUr4YjNfu9SQ96JgNZNhy5H7oLR59WYnwiuLM3JIAOhuYNSUMQDcNYTMTS8lJ5dri6zaWL3V7XQHpIBfOVQ63L8aUmsUAiwuguVP6RfSPmgow__'],
        imageUrl: 'https://s3-alpha-sig.figma.com/img/7f6f/1740/bb519962ee07438a1a28951c5d5294c7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MWS6KVrp~OkZacjoisEJvaehhMmoIiYyADmqVrvSp5aJ5D1cSvWxGqxKFYNzb-grBxv47arVlwXVaCiUq7vHJGUicicZ3QlbT0EqtHCXPxB~KWnk8jK51ZfcvskZYgLcGD6vq8Ir6SgDbQcJInvBpb5pixETFSXCdaGz5XW4gJa4UydkV2CQpictQD1YsLz-SOpg7UyZcun0VSZErsd7d~CEQpdwGkHlPTzTJPzb~Dt3w7AJDsTgCWRS52x1w8e2AvHITVVQahDpJ7JtrvJAFFPlQiH4Ak44mVh6xCBKO68kUCHWLDK-sir36zENVqui9WRAMrupBnjxes8rhI-SDg__',
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
        gallery: ['https://s3-alpha-sig.figma.com/img/57d9/327e/009ead6e9d3fe305bd7332c3462417fb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BC0KygqnFzR9v5g-OPQBPZLd4DhEDMvSTUOubyPiCf1UJeDIJnVBnrAefwJT6-QqVT1njOZc3A4ggqfmEbJzF71TjrpDbU-e6541ut6WhJRJtwn8VPorcC~lv~fxTpzxKgmlDaZ~Au-1tWyfgaQ~Nlqzz0ZL71-CZHuxHiS1WIbcP4gX-4nMkWJpG13AoPJgybMxM6Es29GTJpyzuHLf4x2bg5l7gB0BIwsl54TSlRUr4YjNfu9SQ96JgNZNhy5H7oLR59WYnwiuLM3JIAOhuYNSUMQDcNYTMTS8lJ5dri6zaWL3V7XQHpIBfOVQ63L8aUmsUAiwuguVP6RfSPmgow__'],
        imageUrl: 'https://s3-alpha-sig.figma.com/img/7f6f/1740/bb519962ee07438a1a28951c5d5294c7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MWS6KVrp~OkZacjoisEJvaehhMmoIiYyADmqVrvSp5aJ5D1cSvWxGqxKFYNzb-grBxv47arVlwXVaCiUq7vHJGUicicZ3QlbT0EqtHCXPxB~KWnk8jK51ZfcvskZYgLcGD6vq8Ir6SgDbQcJInvBpb5pixETFSXCdaGz5XW4gJa4UydkV2CQpictQD1YsLz-SOpg7UyZcun0VSZErsd7d~CEQpdwGkHlPTzTJPzb~Dt3w7AJDsTgCWRS52x1w8e2AvHITVVQahDpJ7JtrvJAFFPlQiH4Ak44mVh6xCBKO68kUCHWLDK-sir36zENVqui9WRAMrupBnjxes8rhI-SDg__',
    },
])

// dropdown
const filters = [
{ id: 1, name: 'Найпопулярніші', unavailable: false },
{ id: 2, name: 'Kenton Towne', unavailable: false },
{ id: 3, name: 'Therese Wunsch', unavailable: false },
{ id: 4, name: 'Benedict Kessler', unavailable: true },
{ id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedFilter = ref(filters[0])
</script>

<style lang="scss">
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