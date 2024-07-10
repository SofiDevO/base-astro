const d = document;
export function HamburgerButton(hamburgerBtn, panel, menuLink, dropDownLink) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(hamburgerBtn) || e.target.matches(`${hamburgerBtn} *`)) {
      d.querySelector(hamburgerBtn).classList.toggle("is-active");
      d.querySelector(panel).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink) || e.target.matches(dropDownLink)) {
      d.querySelector(panel).classList.remove("is-active");
    }
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  HamburgerButton(".hamburger", ".header__list", ".regular-link", ".dropdow__link");
});
