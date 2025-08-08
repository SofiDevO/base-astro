const d = document;

export function HamburgerButton(hamburgerBtn: string, panel: string, menuLink: string, dropdownLink: string): void {
  d.addEventListener("click", (e: Event) => {
    const target = e.target as Element;

    if (
      target?.matches?.(hamburgerBtn) ||
      target?.matches?.(`${hamburgerBtn} *`)
    ) {
      d.querySelector(hamburgerBtn)?.classList.toggle("is-active");
      d.querySelector(panel)?.classList.toggle("is-active");
    }
    if (target?.matches?.(menuLink)) {
      d.querySelector(hamburgerBtn)?.classList.remove("is-active");
      d.querySelector(panel)?.classList.remove("is-active");
    }
  });
}

d.addEventListener("DOMContentLoaded", (e: Event) => {
  HamburgerButton(".hamburger", ".header__menu", ".regular-link", ".dropdown__link");
});