<template>
    <NuxtLayout name="404">
    <div class="error-page">
        <div class="error-page__bg">
        </div>
        <div class="container">
            <div class="display-small">Приїхали...</div>
            <div class="title-medium">Схоже, такої сторінки не існує 😔</div>
            <NuxtLink to="/" class="btn btn--primary">
                <p class="label-large">Повернутись на головну</p>
            </NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup>
    definePageMeta({
        pageTransition: {
            name: 'page'
        }
    })
    document.body.style.overflow = 'hidden'
  </script>
  
  <style lang="scss" scoped>
  .error-page {
    position: relative;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: -3rem;
    &__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('public/img/svg/icons/logo.svg');
        z-index: 1;
        opacity: 0.1;
        transform: rotate(30deg) scale(3);
    }
    .container {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .display-small {
        margin: 4rem 0 2.8rem 0;
    }
    .title-medium {
        margin-bottom: 2.8rem;
    }
    .btn {
        border: none;
    }
  }
  </style>