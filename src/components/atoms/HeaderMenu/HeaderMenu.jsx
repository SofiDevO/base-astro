import { useState } from "react";
import { headerMainMenu } from "@src/data/navMenu";
import "./HeaderMenu.css";
import HamburgerBtn from "../HamburgerButton/HamburgerButton";

const HeaderMenu = () => {
  // panel debe desplegarse al hacer click en el botonHamburgerMenu
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };
  const closePanel = () => {
    setIsActive(false);
  };

  return (
    <>
      <nav className="header__menu">
        <ul className={`header__list ${isActive ? "is-active" : ""}`}>
          {headerMainMenu.map((item, index) => (
            <li
              key={index}
              className="header__item"
            >
              <a
                onClick={closePanel}
                className="header__link  header__link--regular"
                href={item.href || "#"}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <HamburgerBtn
        classActive={isActive ? "is-active" : ""}
        onClick={toggleActive}
      />
    </>
  );
};

export default HeaderMenu;
