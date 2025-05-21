// stores/userStore.js
import { defineStore } from 'pinia';
import { useCookie } from 'nuxt/app';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null, // Інформація про користувача (UID, email, і т.д.)
    isLoggedIn: false,
  }),
  getters: {
    getUser: (state) => state.user,
    getIsLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    async setUser(user) {
      this.user = user;
      this.isLoggedIn = !!user;
    },
    async clearUser() {
      this.user = null;
      this.isLoggedIn = false;
      // Також можна видалити токен з cookie
      const tokenCookie = useCookie('token');
      tokenCookie.value = null;
    },
    async fetchUser() {
      // Спробувати отримати інформацію про користувача з API або cookie
      // Якщо користувач знайдений, встановити його в state
      // Інакше - очистити state
    },
  },
  persist: true, // Зберігати стан в localStorage
});