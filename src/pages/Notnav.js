import React, { useState } from "react";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Notnav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st Heading*/}

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="nav-links">
            <li>Motors</li>

            <li>Property for Rent</li>

            <li>Property for Sale</li>

            <li>Classifieds</li>

            <li>Furniture & Garden</li>

            <li>Mobiles & Tablets</li>

            <li>Jobs</li>
            <li>Community</li>
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Notnav;
