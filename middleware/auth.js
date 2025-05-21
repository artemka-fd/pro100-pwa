// middleware/auth.js
import { useAuthStore } from '~/stores/authStore';
import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isLoggedIn) {
    return navigateTo('/login');
  }
});