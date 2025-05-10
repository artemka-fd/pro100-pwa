<template>
  <div id="map" class="map-container" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import { onMounted, ref, toRaw } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useRuntimeConfig } from 'nuxt/app'
import MapPopup from '@/components/MapPopup.vue'
import { createApp } from 'vue'
import { useRouter } from '#app'

const props = defineProps<{
  locations: Location[]
  center?: [number, number]
}>()

const map = ref<mapboxgl.Map>()
const mapContainer = ref<HTMLElement>()
const markers = ref<mapboxgl.Marker[]>([])
const defaultCenter: [number, number] = props.center || [30.5238, 50.4547]
const activeMarkerId = ref<string | number | null>(null)
const currentPopup = ref<mapboxgl.Popup | null>(null)

const router = useRouter()
const config = useRuntimeConfig()

onMounted(() => {
  mapboxgl.accessToken = config.public.mapboxToken
  map.value = new mapboxgl.Map({
    container: mapContainer.value!,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: defaultCenter,
    zoom: 12,
  })

  map.value.on('load', () => {
    renderMarkers()
    if (props.locations.length === 1) {
      map.value?.flyTo({
        center: {
          lng: props.locations[0].lng,
          lat: props.locations[0].lat,
        },
        essential: true,
        zoom: 13,
        speed: 1.2,
        curve: 1.42,
      })
    }
  })
  map.value?.on('click', (e) => {
    const clickedEl = e.originalEvent.target as HTMLElement
    console.log(clickedEl, currentPopup.value)

    // Якщо це попап або маркер — не закриваємо
    if (
      clickedEl.closest('.mapboxgl-popup') ||
      clickedEl.closest('.custom-marker')
    ) {
      return
    }

    // Інакше — закриваємо попап
    if (currentPopup.value) {
      currentPopup.value.remove()
      currentPopup.value = null
      activeMarkerId.value = null
      updateMarkerStyles()
    }
  })

})

function renderMarkers() {
  props.locations.forEach((loc) => {
    const el = document.createElement('div')
    el.className = 'custom-marker'
    el.innerHTML = `<img src="${loc.imageUrl ?? 'https://placekitten.com/64/64'}" alt="marker" />`

    const marker = new mapboxgl.Marker(el)
      .setLngLat([loc.lng, loc.lat])
      .addTo(toRaw(map.value))

    el.addEventListener('click', () => {
      if (currentPopup.value) {
        console.log()
        currentPopup.value.remove()
        currentPopup.value = null
        activeMarkerId.value = null
        updateMarkerStyles()
      }
      const isMobile = window.innerWidth < 1024

      map.value?.flyTo({
        center: { lng: loc.lng, lat: loc.lat },
        essential: true,
        zoom: 13,
        speed: 1.2,
        curve: 1.42,
        offset: isMobile ? [0, 250] : [0, 150],
      })

      activeMarkerId.value = loc.id
      updateMarkerStyles()

      // Створюємо новий Vue-попап
      const popupNode = document.createElement('div')
      const popupApp = createApp(MapPopup, { loc })
      popupApp.use(router)
      popupApp.mount(popupNode)


      const popup = new mapboxgl.Popup({
        offset: [0, 0],
        anchor: 'bottom',
        closeButton: false,
        closeOnClick: false,
      })
        .setLngLat([loc.lng, loc.lat])
        .setDOMContent(popupNode)
        .addTo(map.value!)

      currentPopup.value = popup
    })

    markers.value.push(marker)
  })
}

function updateMarkerStyles() {
  markers.value.forEach((marker, index) => {
    const el = marker.getElement()
    const markerLoc = props.locations[index]
    if (markerLoc.id === activeMarkerId.value) {
      el.classList.add('active-marker')
    } else {
      el.classList.remove('active-marker')
    }
  })
}
</script>


<style lang="scss">
.map-container {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  margin-bottom: -1.6rem;
}

.custom-marker {
  width: 3.3rem;
  height: 3.9rem;
  display: flex;
  background-image: url('/img/svg/icons/map/pin.svg');
  background-size: cover;
  transform: translate(-50%, -100%);
  cursor: pointer;
}
.custom-marker > img {
  width: 2.2rem;
  height: 2.2rem;
  margin: 0.58rem auto 0;
  border-radius: var(--round-full);
  transition: all 0.2s ease;
  object-fit: cover;
}

.active-marker {
  background-image: url('/img/svg/icons/map/pin-active.svg'); /* заміни на свою активну іконку */
}
.active-marker > img {
  transform: scale(1.15);
  box-shadow: 0 0 0 2px white, 0 0 8px rgba(0, 0, 0, 0.4);
}

.mapboxgl-popup-tip {
  opacity: 0;
}

/* Попап */
.mapboxgl-popup-content {
  background-color: transparent !important;
  box-shadow: none !important;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mapboxgl-popup-close-button {
  display: none;
}
.mapboxgl-popup {
  z-index: 10;
}
</style>