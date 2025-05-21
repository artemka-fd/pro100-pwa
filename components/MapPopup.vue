<template>
  <div class="popup" :class="{ 'visible': isVisible }">
    <div class="popup__top">
      <div class="popup__top__img img-wrap">
        <img :src="loc.imageUrl ?? 'https://placekitten.com/64/64'" alt="marker" />
      </div>
      <h3 class="title-medium">{{ loc.name.length > 20 ? loc.name.substring(0, 20) + '...' : loc.name }}</h3>
    </div>

    <div class="popup__info">
      <div class="popup__address">
        <div class="popup__address-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_29_3395)">
              <path d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54926 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54926 14 5.07539 14 6.66669Z" stroke="#FF7C1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z" stroke="#FF7C1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_29_3395">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="popup__address-text">
          <p class="label-medium label-medium--address">12км від вас</p>
          <p class="label-medium">{{ loc.address }}</p>
        </div>
      </div>

      <div class="popup__address">
        <div class="popup__address-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_29_3400)">
              <path d="M7.99967 3.99998V7.99998L10.6663 9.33331M14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6819 1.33301 7.99998C1.33301 4.31808 4.31778 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z" stroke="#ADA7F5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_29_3400">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="popup__address-text">
          <p class="label-medium label-medium--time">Відкрито</p>
          <p class="label-medium">{{ dayOfWeek.start }}:00 - {{ dayOfWeek.end }}:00</p>
        </div>
    </div>
    <div class="rating-stars">
      <div class="stars">
        <template v-for="i in 5" :key="i">
          <svg
            class="star"
            :class="{ filled: i <= loc.rating }"
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
              :fill="i <= loc.rating ? '#00B451' : 'none'"
            />
          </svg>
        </template>
      </div>
      <span class="count label-medium">{{ loc.averageRating }} відгуків</span>
    </div>
    <TagsComponent :tags="['Ремонт двигуна', 'Заміна масла', 'Покраска']" />
    <div class="popup__call">
      <div class="btn btn--transparent">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_55_3065)">
              <path d="M12.5415 4.16665C13.3555 4.32545 14.1035 4.72353 14.6899 5.30993C15.2763 5.89632 15.6744 6.64437 15.8332 7.45831M12.5415 0.833313C14.2326 1.02118 15.8095 1.77846 17.0134 2.98082C18.2173 4.18318 18.9765 5.75915 19.1665 7.44998M18.3332 14.1V16.6C18.3341 16.8321 18.2866 17.0618 18.1936 17.2744C18.1006 17.4871 17.9643 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1112 17.2005 18.1856C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1118 9.32486 15.7083C7.31139 14.4289 5.60431 12.7218 4.32486 10.7083C2.91651 8.53432 2.04007 6.05914 1.76653 3.48331C1.7457 3.25287 1.77309 3.02061 1.84695 2.80133C1.9208 2.58205 2.03951 2.38055 2.1955 2.20966C2.3515 2.03877 2.54137 1.90224 2.75302 1.80875C2.96468 1.71526 3.19348 1.66686 3.42486 1.66665H5.92486C6.32928 1.66267 6.72136 1.80588 7.028 2.06959C7.33464 2.3333 7.53493 2.69952 7.59153 3.09998C7.69705 3.90003 7.89274 4.68559 8.17486 5.44165C8.28698 5.73992 8.31125 6.06408 8.24478 6.37571C8.17832 6.68735 8.02392 6.97341 7.79986 7.19998L6.74153 8.25831C7.92783 10.3446 9.65524 12.072 11.7415 13.2583L12.7999 12.2C13.0264 11.9759 13.3125 11.8215 13.6241 11.7551C13.9358 11.6886 14.2599 11.7129 14.5582 11.825C15.3143 12.1071 16.0998 12.3028 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6913 18.3332 14.1Z" stroke="#3422F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_55_3065">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
          </svg>
          <p class="label-large">Звʼязатися із сервісом</p>
      </div>
    </div>
    <div class="popup__btns">
      <div class="btn btn--primary-dark"><p class="label-large">Забронювати</p></div>
      <div class="btn btn--primary" @click="goToStation"><p class="label-large">Детальніше</p></div>
    </div>
  </div>
  </div>
  </template>
  
<script setup>
  import { useRouter } from 'vue-router'
  import moment from 'moment'
  const props = defineProps({
    loc: Object
  })
  const isVisible = ref(false)
  const emit = defineEmits(['mounted'])
  const router = useRouter()
  const goToStation = () => {
    router.push(`/station/${props.loc.id}`)
  }

  const dayOfWeek = ref('')
  const date = moment()
  const momentDayOfWeek = date.weekday()

  switch (momentDayOfWeek) {
      case 0: dayOfWeek.value = props.loc.workingHours.sunday;
              break;
      case 1: dayOfWeek.value = props.loc.workingHours.monday;
              break;
      case 2: dayOfWeek.value = props.loc.workingHours.tuesday;
              break;
      case 3: dayOfWeek.value = props.loc.workingHours.wednesday;
              break;
      case 4: dayOfWeek.value = props.loc.workingHours.thursday;
              break;
      case 5: dayOfWeek.value = props.loc.workingHours.friday;
              break;
      case 6: dayOfWeek.value = props.loc.workingHours.saturday;
              break;
  }

  onMounted(() => {
    // невелика затримка для тригеру transition
    emit('mounted')
    requestAnimationFrame(() => {
      isVisible.value = true
    })
  })
  onUnmounted(() => {
    isVisible.value = false
  })
</script>

<style lang="scss">
.popup {
  border: 0.1rem solid var(--primary-300);
  box-shadow: 0px 10px 100px 0px #0000004D;
  width: 28.3rem;
  background-color: #fff;
  padding: 1.6rem;
  border-radius: var(--round-16);
  z-index: 10;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  // transform: scale(0.8);
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .popup__top {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    .title-medium {
      margin: 0;
    }
    &__img {
      flex-shrink: 0;
      height: 3.2rem;;
      width: 3.2rem;
      border-radius: var(--round-4);
      > img {
        object-fit: cover;
      }
    }
  }
  .popup__info {
    margin-top: 1.6rem;
    display: flex;
    gap: 1.6rem;
    flex-direction: column;
    .popup__address {
      display: flex;
      gap: 0.8rem;
      align-items: center;
      &-icon {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: var(--round-full);
        background-color: var(--primary-200);
        display: flex;
        justify-content: center;
        align-items: center;
        > svg {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
      &-text {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        p {
          margin: 0;
        }
        .label-medium{
          &--address {
            color: var(--warning-500)
          }
          &--time {
            color: var(--primary-400)
          }
        }
      }
    }
    .rating-stars {
        display: flex;
        gap: 0.8rem;
    }
  }
  &__tags {
    display: flex;
    gap: 0.4rem;
    overflow-x: scroll;
    .tag {
        flex-shrink: 0;
    }
  }
  &__call {
    .btn {
        justify-content: start;
        padding: 0.8rem 0.2rem;
      }
      .label-large {
        color: var(--primary-700);
        margin: 0;
      }
    }
    &__btns {
      display: flex;
      gap: 0.8rem;
      .btn {
        flex-grow: 1;
    }
  }
}
// transition класики
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px); // трохи нижче
}

.popup-fade-enter-to,
.popup-fade-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>