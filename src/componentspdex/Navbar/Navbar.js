import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="items">Home</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>
          </ul>
        )}

        <h1 onClick={toggleNav} className="btn">
          PDexplore
        </h1>
      </nav>
    </div>
  );
}
