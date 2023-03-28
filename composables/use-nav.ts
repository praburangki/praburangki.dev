export function useNav() {
  const isMenuOpen = ref(false);

  function openMenu() {
    isMenuOpen.value = true;
    window.addEventListener('resize', closeMenuOnTablet);
  }

  function closeMenu() {
    isMenuOpen.value = false;
    window.removeEventListener('resize', closeMenuOnTablet);
  }

  function toggleMenu() {
    isMenuOpen.value ? closeMenu() : openMenu();
  }

  /**
   * Close screen when the user resizes the window wider than tablet size.
   */
  function closeMenuOnTablet() {
    window.outerWidth >= 768 && closeMenu();
  }

  const route = useRoute();
  watch(() => route.path, closeMenu);

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
}
