import React, { useState } from 'react';
import './hamburger-button.css'; // Adjust this path as per your actual file structure

const HamburgerBtn = ({classActive, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`hamburger hamburger--collapse ${classActive}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default HamburgerBtn;
