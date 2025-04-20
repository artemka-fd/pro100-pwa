<template>
<section class="map">
    <div class="map__menu">
        <div class="map__menu__filters">
            <div class="tag tag--active label-medium">Всі</div>
            <div class="tag label-medium">Авто</div>
            <div class="tag label-medium">Мото</div>
            <div class="tag label-medium">Кардан</div>
            <div class="tag label-medium">Карбюратор</div>
            <div class="tag label-medium">ГБО</div>
        </div>
        <div class="map__menu__dropdown">
            <Listbox
                as="div"
                class="map__menu__dropdown-listbox"
                v-model="selectedFilter"
            >
                <ListboxButton><p class="body-large">{{ selectedFilter.name }}</p></ListboxButton>
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
        </div>
    </div>
    <MapBoxMap
        :locations="stations"
        :zoom="11"
        @marker-click="handleMarkerClick"
    />
</section>
</template>

<script setup>
import MapBoxMap from '~/components/MapBoxMap.vue';

import { ref } from 'vue'
import {
Listbox,
ListboxButton,
ListboxOptions,
ListboxOption,
} from '@headlessui/vue'

// dropdown
const filters = [
{ id: 1, name: 'Durward Reynolds', unavailable: false },
{ id: 2, name: 'Kenton Towne', unavailable: false },
{ id: 3, name: 'Therese Wunsch', unavailable: false },
{ id: 4, name: 'Benedict Kessler', unavailable: true },
{ id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedFilter = ref(filters[0])

// map
const stations = Array.from({ length: 30 }, (_, i) => ({
  name: Math.random().toString(),
  address: 'Столичне шосе, 101Г, Київ',
  totalRating: (Math.random() * 0.2).toString().slice(2,3),
  rating: (Math.random() * 0.2).toString().slice(2,3), 
  time: `Працює з ${Math.random().toString().slice(2,3)}:${Math.random().toString().slice(3,5)}`,
  id: i,
  lat: 50.4 + Math.random() * 0.1,
  lng: 30.5 + Math.random() * 0.1,
  imageUrl: 'https://placecats.com/300/200?fit=contain&position=top',
}))

function handleMarkerClick(location) {
  console.log('Clicked:', location)
}
</script>

<style lang="scss">
.map {
    position: relative;
    &__menu {
        width: 100%;
        overflow: unset;
        position: absolute;
        padding: 2rem 1.6rem 2rem 1.6rem;
        background-image: radial-gradient(transparent 1px,#ffffff28 1px);
        background-size: 4px 4px;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        z-index: 2;
        &__filters {
            margin: 0 -1.6rem 1.6rem 0;
            display: flex;
            gap: 0.8rem;
            overflow-x: scroll;
        }
        &__dropdown {
            position: relative;
            width: 100%;
            &-listbox {
                position: relative;
                width: 100%;
                >button {
                    position: relative;
                    width: 100%;
                    background-color: var(--neutrals-100);
                    border-radius: var(--round-8);
                    border: 1px solid var(--neutrals-400);
                    padding: 0.8rem 1.6rem;
                    display: flex;
                    justify-content: start;
                    > p {
                        margin: 0;
                    }
                }
                >ul {
                    position: absolute;
                    z-index: 3;
                }
            }
        }
    }
    .map-container {
        .mapboxgl-ctrl-bottom-left {
            margin: 0 0 10px 0;
        }
        .mapboxgl-ctrl-bottom-right {
            margin: 0 0 10px 0;
        }
    }
}
</style>