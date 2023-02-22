import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar2.css";
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from "react";

function Navbar2() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <nav className={isSticky ? "fixed" : ""}>
      <div className="logo"></div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );  
}


export default Navbar2;