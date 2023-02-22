import React, { useEffect } from "react";
import "./Header.css";

function Header() {
  useEffect(() => {
    const text = document.querySelector("header h2");
    text.innerHTML = text.innerHTML
      .split("")
      .map((letter, idx) => `<p style='--x:${idx}'>${letter}</p>`)
      .join("");
  }, []);

  return (
    <header>
      <div className="text">
        <h1>Evol</h1>
        <span>Boost</span>
      </div>
      <h2>Get-ur-evolution !</h2>
    </header>
  );
}

export default Header;
