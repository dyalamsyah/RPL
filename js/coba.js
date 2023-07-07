if (
  window.performance &&
  window.performance.navigation.type ===
    window.performance.navigation.TYPE_BACK_FORWARD
) {
  location.reload();
}

elem.addEventListener("touchstart", touchStartHandler, { passive: true });
elem.addEventListener("wheel", wheelHandler, { passive: true });
