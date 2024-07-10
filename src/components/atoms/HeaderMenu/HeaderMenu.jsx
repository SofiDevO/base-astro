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
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleDropDownEnter = () => {
    setDropdownActive(true);
  };

  const handleDropdownLeave = () => {
    setDropdownActive(false);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="header__menu">
        <ul className={`header__list ${isActive ? "is-active" : ""}`}>
          {headerMainMenu.map((item, index) => (
            <li
              key={index}
              className="header__item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseEnter}
            >
              {item.dropdown ? (
                <a
                  onMouseEnter={handleDropDownEnter}
                  onMouseLeave={handleDropdownLeave}
                  className="header__link header__link--dropdown"
                  href={item.href || "#"}
                >
                  {item.text}
                  <span
                    className={`dropdown__icon  ${dropdownActive ? "  dropdown-active" : " "}`}
                  >
                    <iconify-icon
                      style={{ fontSize: "25px" }}
                      icon="gridicons:dropdown"
                    ></iconify-icon>
                  </span>
                </a>
              ) : (
                <a
                  onClick={closePanel}
                  className="header__link  header__link--regular"
                  href={item.href || "#"}
                >
                  {item.text}
                </a>
              )}

              {item.dropdown && showDropdown && (
                <ul className="dropdown">
                  {item.submenu.map((subItem, subIndex) => (
                    <li className="dropdown__item" key={subIndex}>
                      <a
                        onClick={closePanel}
                        className="header__link dropdow__link"
                        href={subItem.link}
                      >
                        {subItem.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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
