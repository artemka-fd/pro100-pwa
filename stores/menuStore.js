import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', () => {
  const menuOpened = ref(false);

  function getMenuState() {
    return menuOpened.value;
  }

  function setMenuState(state) {
    return menuOpened.value = state
  }

  return { menuOpened, getMenuState, setMenuState};
});
