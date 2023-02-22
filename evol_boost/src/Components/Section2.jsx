import React, { useEffect, useState } from "react";
import "./Section2.css";
import ImageSlider from "./Slider"
import ActionAreaCard from "./Card";
import img_ecommerce from "../props/template_ecommerce.webp"
import img_vitrine from "../props/template_website.webp"
import img_application from "../props/template_application.webp"

function Details() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const section2 = document.querySelector(".section2");
      var section2_top = section2.getBoundingClientRect().top;

      if (section2_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`section2 ${active && "active"}`} id="Section2">
      <div className="text-content">
        <div className="text text1">
          <h1>
            Creation de <span>Web site</span>
          </h1>
          <h2>
            Équipez-vous d’un site efficace et rentable !
						Vous souhaitez informer, diffuser de l’information, gagner de nouveaux prospects ou vendre des biens ? 
						Notre équipe est disponible pour construire ensemble la solution qui vous permettra d’atteindre vos objectifs.
          </h2>
        </div>

        <div className="text text2">
          <h1>
            <span>Application</span> Web & Mobile
          </h1>
          <h2>
            Vous souhaitez accentuer ou créer un avantage concurrentiel, améliorer l’efficacité et les conditions 
					  de travail de vos équipes. Nous développons des solutions et des applications web sur-mesure, basées
						sur les dernières technologies, garantissant une souplesse d’utilisation, de fiabilité et d'évolutivité
          </h2>
        </div>
      </div>
      <div class="card_container">
        <div class="card1"><ActionAreaCard title={"E-Commerce"} description={<ul>Performances ultra-rapides<br/>Paiement sécurisé<br/>Plateforme intuitive pour le client</ul>} filepath={img_ecommerce}/></div>
        <div class="card2"><ActionAreaCard title={"Site Vitrine"} description={<ul>Intégration d'éléments 3D<br/>Service web sur mesure<br/>Technologie React.js</ul>} filepath={img_vitrine}/></div>
        <div class="card3"><ActionAreaCard title={"Application"} description={<ul>Produit Cross-plateform<br/>Design de l'application<br/>Technologie React Native</ul>} filepath={img_application}/></div>
      </div>
      <div class="slider">
        <ImageSlider className="slider_component"/>
      </div>
    </div>
  );
}

export default Details;