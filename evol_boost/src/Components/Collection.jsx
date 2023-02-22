import React, { useState, useEffect } from "react";
import "./Collection.css";
import headerImg from "../props/galaxy-nft.jpg";

function Collection() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const collection = document.querySelector(".collection");
      var collection_top = collection.getBoundingClientRect().top;

      if (collection_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`collection ${active && "active"}`} id="Collection">
      <h1>
        Exemple <span>De</span> Prestation
      </h1>

      <div class="textBox">
        <h2>Site e-commerce</h2>
      </div>
      <div class="e-commerce">
        <img src={headerImg} alt="exemple_site" class="exemple_site"/>
        <p class="e-commerce_description">Voici un exemple de site e-commerce que<br></br>nous avons pu développer pour un client.</p>
      </div>

      <div class="textBox2">
        <h3>Site vitrine</h3>
      </div>
      <div class="vitrine">
        <img src={headerImg} alt="exemple_site" class="exemple_site2"/>
        <p class="vitrine_description">Voici un exemple de site vitrine que nous<br></br> avons pu développer pour un client.</p>
      </div>

      <div class="textBox3">
        <h4>Application</h4>
      </div>
      <div class="application">
        <img src={headerImg} alt="exemple_site" class="exemple_site3"/>
        <p class="application_description">Voici un exemple d'application que <br></br>nous avons pu développer pour un client.</p>
      </div>

    </div>
  );
}

export default Collection;