

/**
 * Adjusts the position of sub-submenus (elements with the class `.subsubmenu`) in a navigation menu
 * to ensure they remain within the viewport on desktop screens (min-width: 768px).
 *
 * - On desktop, it checks if the subsubmenu overflows the viewport to the right.
 * - If it does, it repositions the subsubmenu to the left.
 * - If repositioning to the left causes it to overflow the left edge, it repositions it back to the right and applies a transform to keep it visible.
 * - Handles mouseenter and mouseleave events to show and hide the subsubmenu with appropriate styles.
 * - Runs on DOMContentLoaded and window resize events.
 */
function adjustSubsubmenuPosition() {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  if (!isDesktop) {
    return;
  }

  const subsubmenus = document.querySelectorAll(".subsubmenu");

  subsubmenus.forEach((subsubmenu) => {
    const parentItem = subsubmenu.closest(".submenu__item--seccondary");

    if (parentItem) {
      const adjustPosition = () => {
        const viewportWidth = window.innerWidth;

        const submenuEl = subsubmenu;

        const originalDisplay = submenuEl.style.display;
        const originalVisibility = submenuEl.style.visibility;

        submenuEl.style.display = "block";
        submenuEl.style.visibility = "hidden";
        submenuEl.style.left = "100%";
        submenuEl.style.transform = "";

        const rect = submenuEl.getBoundingClientRect();

        if (rect.right > viewportWidth) {
          submenuEl.style.left = "-220%";
          const leftRect = submenuEl.getBoundingClientRect();

          if (leftRect.left < 0) {
            submenuEl.style.left = "100%";
            const overflow = rect.right - viewportWidth + 30;
            submenuEl.style.transform = `translateX(-${overflow}px)`;
          }
        }
        submenuEl.style.display = originalDisplay;
        submenuEl.style.visibility = originalVisibility;
      };

      const showSubsubmenu = () => {
        adjustPosition();

        subsubmenu.style.opacity = "1";
        subsubmenu.style.pointerEvents = "all";

        const isPositionedLeft = subsubmenu.style.left === "-100%";
        const transformDirection = isPositionedLeft ? "-1rem" : "2.5rem";

        const currentTransform = subsubmenu.style.transform;
        if (currentTransform && currentTransform.includes("translateX")) {
          const existingTranslate = currentTransform.match(
            /translateX\(([^)]+)\)/
          );
          if (existingTranslate) {
            const existingValue = existingTranslate[1];
            subsubmenu.style.transform = `translateX(calc(${existingValue} + ${transformDirection}))`;
          }
        } else {
          subsubmenu.style.transform =
            `${currentTransform} translateX(${transformDirection})`.trim();
        }
      };
      const hideSubsubmenu = () => {
        subsubmenu.style.opacity = "";
        subsubmenu.style.pointerEvents = "";
        subsubmenu.style.transform = "";
      };

      parentItem.addEventListener("mouseenter", showSubsubmenu);
      parentItem.addEventListener("mouseleave", hideSubsubmenu);
    }
  });
}
document.addEventListener("DOMContentLoaded", adjustSubsubmenuPosition);

window.addEventListener("resize", adjustSubsubmenuPosition);

export function adjustSubsubmenuPositionOnResize() {
  window.addEventListener("resize", adjustSubsubmenuPosition);
}
