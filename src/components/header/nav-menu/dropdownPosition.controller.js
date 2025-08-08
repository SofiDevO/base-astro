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
        const isDesktopNow = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktopNow) {
          return;
        }

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
          submenuEl.style.left = "-100%";
          const leftRect = submenuEl.getBoundingClientRect();

          if (leftRect.left < 0) {
            submenuEl.style.left = "100%";
            const overflow = rect.right - viewportWidth + 20;
            submenuEl.style.transform = `translateX(-${overflow}px)`;
          }
        }
        submenuEl.style.display = originalDisplay;
        submenuEl.style.visibility = originalVisibility;
      };

      const showSubsubmenu = () => {
        const isDesktopNow = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktopNow) {
          return;
        }

        adjustPosition();

        subsubmenu.style.opacity = "1";
        subsubmenu.style.pointerEvents = "all";

        const isPositionedLeft = subsubmenu.style.left === "-100%";
        const transformDirection = isPositionedLeft ? "-4rem" : "2.5rem";

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
