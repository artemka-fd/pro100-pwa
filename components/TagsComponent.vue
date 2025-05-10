<template>
<div class="tags-container-wrapper">
    <div ref="tagsContainer" class="tags-container">
        <span class="tag">Ремонт двигуна</span>
        <span class="tag">Заміна масла</span>
        <span class="tag">Покраска</span>
        <span class="tag">Діагностика ходової</span>
        <span class="tag">Шиномонтаж</span>
        <span class="tag">Заміна фільтрів</span>
        <span class="tag">ТО</span>
        <span class="tag">Ремонт КПП</span>
        <span class="tag">Кузовний ремонт</span>
        <span class="tag">Автоелектрик</span>
        <span class="tag">Ще один тег</span>
        <span class="tag">І ще один, щоб показати прокрутку</span>
    </div>
    <div class="gradient-left" :class="{ 'active': showGradientLeft }"></div>
    <div class="gradient-right" :class="{ 'active': showGradientRight }"></div>
</div>
</template>

<script setup>
const props = defineProps({
    tags: Array
})

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

onMounted(() => {
    if (tagsContainer.value) {
        tagsContainer.value.addEventListener('scroll', handleScroll);
        tagsContainer.value.addEventListener('touchstart', handleTouchStart);
        tagsContainer.value.addEventListener('touchmove', handleTouchMove);
        tagsContainer.value.addEventListener('touchend', handleTouchEnd);
        handleScroll(); // Ініціалізуємо відображення градієнтів при завантаженні
    }
})
</script>

<style lang="scss">
.tags-container-wrapper {
    position: relative;
    overflow: hidden; /* Маскуємо вихід тегів за межі */
    margin-bottom: 2rem;
  }
  
  .tags-container {
    display: flex;
    gap: 0.8rem;
    overflow-x: auto; /* Вмикаємо горизонтальну прокрутку */
    scroll-behavior: smooth; /* Плавна прокрутка */
  
    /* Прибираємо стандартні смуги прокрутки */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
  }
  
  .gradient-left,
  .gradient-right {
    position: absolute;
    top: 0;
    height: 100%;
    width: 4rem; /* Ширина градієнта */
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    pointer-events: none; /* Щоб не заважали свайпу */
  }
  
  .gradient-left {
    left: -0.5rem;
    background: linear-gradient(90deg, rgba(248, 248, 255, 1) 1%, rgba(248, 248, 255, 1) 30%, rgba(248, 248, 255, 0) 100%);
  }
  
  .gradient-right {
    right: -0.5rem;
    background: linear-gradient(270deg, rgba(248, 248, 255, 1) 1%, rgba(248, 248, 255, 1) 30%, rgba(248, 248, 255, 0) 100%);
  }
  
  .gradient-left.active,
  .gradient-right.active {
    opacity: 1;
  }      
</style>