<template>
<section class="map">
    <div class="map__menu">
        <TagsComponent :tags="['Ремонт двигуна', 'Заміна масла', 'Покраска']" />
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
// import { getStations } from '~/services/api/stations'

// dropdown
const filters = [
{ id: 1, name: 'Durward Reynolds', unavailable: false },
{ id: 2, name: 'Kenton Towne', unavailable: false },
{ id: 3, name: 'Therese Wunsch', unavailable: false },
{ id: 4, name: 'Benedict Kessler', unavailable: true },
{ id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedFilter = ref(filters[0])

const getStations = async (lat, lon, tagIds) => {
    const { $api } = useNuxtApp()
    console.log('i\'m using this getstaations and getting undefined')
    try {
        const data = await $api('/service-station/find-by-criteria', {
            method: 'POST',
            body: {
                latitude: lat,
                longitude: lon,
                tagId: tagIds ?? []
            }
        })
        return data
    } catch (error) {
        console.error(error)
    }
}

// map
// const stations = getStations(50.4, 30.5)
// const stations = Array.from({ length: 30 }, (_, i) => ({
//   name: Math.random().toString(),
//   address: 'Столичне шосе, 101Г, Київ',
//   totalRating: (Math.random() * 0.2).toString().slice(2,3),
//   rating: (Math.random() * 0.2).toString().slice(2,3), 
//   time: `Працює з ${Math.random().toString().slice(2,3)}:${Math.random().toString().slice(3,5)}`,
//   id: i,
//   lat: 50.4 + Math.random() * 0.1,
//   lng: 30.5 + Math.random() * 0.1,
//   imageUrl: 'https://placecats.com/300/200?fit=contain&position=top',
// }))

const stations = [
    {
    "id": 2,
    "ownerId": 1,
    "name": "СТО на вул. Сімʼї Хохлових",
    "nameSlug": "sto-na-vul-simyi-khokhlovykh-02896",
    "description": "asdfasdf",
    "address": "asdfasdf",
    "workingHours": {
        "friday": {
            "end": 17,
            "start": 8
        },
        "monday": {
            "end": 17,
            "start": 8
        },
        "sunday": {
            "end": 17,
            "start": 8
        },
        "tuesday": {
            "end": 17,
            "start": 8
        },
        "saturday": {
            "end": 17,
            "start": 8
        },
        "thursday": {
            "end": 17,
            "start": 8
        },
        "wednesday": {
            "end": 17,
            "start": 8
        }
    },
    "location": {
        "type": "Point",
        "coordinates": [
            30.5234,
            50.4501
        ]
    },
    "tagId": [],
    "photoUrls": [
        "https://vroom.pictures.s3.us-east-1.amazonaws.com/stations/temp/d2b1782f-34b1-4184-87f4-3dfa2b43b93e/1746800699588-0.jpeg",
        "https://vroom.pictures.s3.us-east-1.amazonaws.com/stations/temp/d2b1782f-34b1-4184-87f4-3dfa2b43b93e/1746800699590-1.png",
        "https://vroom.pictures.s3.us-east-1.amazonaws.com/stations/temp/d2b1782f-34b1-4184-87f4-3dfa2b43b93e/1746800699590-2.png"
    ],
    "distance": 5.8,
    "ratings": [],
    "averageRating": 0
}
]

function handleMarkerClick(location) {
  console.log('Clicked:', location)
}

onMounted(() => {
    console.log(stations.value)
})
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
        @media screen and (min-width: 1024px) {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1120px;
            margin: 2.8rem auto 4rem auto;
            padding: 0;
            > .tags-container-wrapper {
                margin-bottom: 0;
                max-width: 50%;
            }
            .map__menu__dropdown {
                width: 34.3rem;
            }
        }
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
        @media screen and (min-width: 1024px) {
            max-width: 1120px;
            height: 53rem;
            margin: 0 auto;
            overflow: hidden;
            margin-bottom: 4rem;
            border-radius: 2.8rem;
        }
        .mapboxgl-ctrl-bottom-left {
            margin: 0 0 10px 0;
        }
        .mapboxgl-ctrl-bottom-right {
            margin: 0 0 10px 0;
        }
    }
}
</style>