export function useNav() {
  const isDrawerOpen = useState(() => false);

  function openDrawer() {
    isDrawerOpen.value = true;
    window.addEventListener('resize', closeDrawerOnTabletWindow);
  }

  function closeDrawer() {
    isDrawerOpen.value = false;
    window.removeEventListener('resize', closeDrawerOnTabletWindow);
  }

  function toggleDrawer() {
    isDrawerOpen.value ? closeDrawer() : openDrawer();
  }

  /**
   * Close drawer when the user resizes the window wider than tablet size.
   */
  function closeDrawerOnTabletWindow() {
    window.outerWidth >= 768 && closeDrawer();
  }

  const route = useRoute();
  watch(() => route.path, closeDrawer);

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
}
