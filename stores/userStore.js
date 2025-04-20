// stores/user.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  async function fetchUser() {
    if (user.value) return; // Уникаємо повторних запитів
    const { data } = await useFetch('/api/user');
    user.value = data.value;
  }

  return { user, fetchUser };
});
