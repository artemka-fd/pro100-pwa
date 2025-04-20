<template>
  <div id="map" class="map-container" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import { onMounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useRuntimeConfig } from 'nuxt/app'
import MapPopup from './ MapPopup.vue'
import { createApp } from 'vue'

const props = defineProps<{
  locations: Location[]
}>()

const map = ref<mapboxgl.Map>()
const mapContainer = ref<HTMLElement>()
const markers = ref<mapboxgl.Marker[]>([])
const defaultCenter: [number, number] = props.center || [30.5238, 50.4547]
const activeMarkerId = ref<string | number | null>(null)

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
    if(props.locations.length === 1) {
      map.value?.flyTo({
        center: { lng: props.locations[0].lng, lat: props.locations[0].lat },
        essential: true, // для accessibility
        zoom: 13,         // опціонально: зміни масштаб
        speed: 1.2,       // швидкість анімації (0.5 - повільно, 2 - швидко)
        curve: 1.42       // кривизна траєкторії
      })
    }
    // DEBUG: виводимо map
    console.log('Map loaded!', map.value)
  })
})

function renderMarkers() {
  props.locations.forEach((loc) => {
    const el = document.createElement('div')
    el.className = 'custom-marker'
    el.innerHTML = `<img src="${loc.imageUrl ?? 'https://placekitten.com/64/64'}" alt="marker" />`

    if(props.locations.length === 1) {
      el.addEventListener('click', () => {
        console.log('Clicked marker')
        map.value?.flyTo({
          center: { lng: loc.lng, lat: loc.lat },
          essential: true, // для accessibility
          zoom: 13,         // опціонально: зміни масштаб
          speed: 1.2,       // швидкість анімації (0.5 - повільно, 2 - швидко)
          curve: 1.42       // кривизна траєкторії
        })
        activeMarkerId.value = loc.id

        // popup
        const popupComponent = createApp(MapPopup, { loc });
        const popupHTML = popupComponent.mount(document.createElement('div')).$el;

        marker.setPopup(new mapboxgl.Popup().setDOMContent(popupHTML))
        updateMarkerStyles()
      })
    } else {
      el.addEventListener('click', () => {
        map.value?.flyTo({
          center: { lng: loc.lng, lat: loc.lat },
          essential: true, // для accessibility
          zoom: 13,         // опціонально: зміни масштаб
          speed: 1.2,       // швидкість анімації (0.5 - повільно, 2 - швидко)
          curve: 1.42       // кривизна траєкторії
        })
        activeMarkerId.value = loc.id

        // popup
        const popupComponent = createApp(MapPopup, { loc });
        const popupHTML = popupComponent.mount(document.createElement('div')).$el;

        marker.setPopup(new mapboxgl.Popup({offset: [0, -100], anchor: 'top'}).setDOMContent(popupHTML))
        updateMarkerStyles()
      })
    }
    
    const marker = new mapboxgl.Marker(el)
    .setLngLat([loc.lng, loc.lat])
    .addTo(toRaw(map.value))
    
    markers.value.push(marker)
  })
}

function updateMarkerStyles() {
  Object.entries(markers.value).forEach(([id, marker]) => {
    const el = marker.getElement() 
    if (id === String(activeMarkerId.value)) {
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
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  border: none;
}
.mapboxgl-popup-close-button {
  display: none;
}
.mapboxgl-popup {
  z-index: 10;
}
</style>