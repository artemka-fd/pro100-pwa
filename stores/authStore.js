import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const confirmationResult = ref(null);
  const phoneNumber = ref(null);
  const user = ref(null);
  const isLoggedIn = ref(false);

  function setConfirmationResult(value) {
    confirmationResult.value = value;
  }

  function setPhoneNumber(value) {
    phoneNumber.value = value;
  }

  function setUser(value) {
    user.value = value;
    isLoggedIn.value = !!value;
  }

  function clearConfirmationResult() {
    confirmationResult.value = null;
    phoneNumber.value = null;
  }

  function clearUser() {
    user.value = null;
    isLoggedIn.value = false;
  }

  return {
    confirmationResult,
    phoneNumber,
    user,
    isLoggedIn,
    setConfirmationResult,
    setPhoneNumber,
    setUser,
    clearConfirmationResult,
    clearUser,
  };
}, {
  persist: {
    key: 'authStore',
    storage: localStorage,
  }
});