import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home" id="Home">

      <div className="content">
        <h1>
          <c>Bienvenue</c> Chez <d>Evol</d> <br />
          Boost
        </h1>

        <a href="#Collection" className="show-me">
          <span>En savoir plus</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
