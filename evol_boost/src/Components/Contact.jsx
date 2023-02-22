import React, { useEffect, useState, useRef } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";
import styled from "styled-components";

import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k1itfnr",
        "template_31e628k",
        form.current,
        "Y39aHpq1oT9YYwsap"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setShowPopup(true);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const contact = document.querySelector(".contact");
      var contact_top = contact.getBoundingClientRect().top;

      if (contact_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [showPopup]);

  return (
    <div className={`contact ${active && "active"}`} id="Contact">
      <h1>
        <span>Contactez</span> <b>Nous</b>
      </h1>
      <div class="my_form">
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Prenom Nom" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" placeholder=" Message" />
            <input type="submit" value="Envoyer" />
            {isSent && showPopup && (
              <div className="popup">
                <p>Votre message a été envoyé avec succès !</p>
              </div>
            )}
          </form>
        </StyledContactForm>
      </div>
      <p1>Evol Boost s'occupe de la digitalisation de votre entreprise
        de A à Z. Nous proposons différents types de produits, mais
        nous nous adaptons surtout à la demande du client.<br /><br />
        Contactez-nous pour pouvoir commencer un devis ou bien si vous avez la moindre
        question, notre équipe vous répondra en moins de 24h.</p1>
      <p2>Evol Boost s'occupe de la digitalisation de votre entreprise<br />
        de A à Z. Nous proposons différents types de produits, mais<br />
        nous nous adaptons surtout à la demande du client.<br /><br />
        Contactez-nous pour pouvoir commencer un devis ou bien si vous avez la moindre<br />
        question, notre équipe vous répondra en moins de 24h.</p2>
      <div className="social_media">
        <h2>Nous suivre :</h2>
        <a href="https://www.instagram.com/evol_boost/?hl=fr">
          <BsLinkedin className="linkedin_logo" />
        </a>
        <a href="https://www.instagram.com/evol_boost/?hl=fr">
          <BsInstagram className="insta_logo" />
        </a>
        <a href="https://www.instagram.com/evol_boost/?hl=fr">
          <BsFacebook className="facebook_logo" />
        </a>
      </div>
    </div>
  );
}

export default Contact;

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 20px;
      margin-top: 20px;
      outline: none;
      border-radius: 2px;
      border: none;
      &:focus {
        background: rgba(214, 214, 214);
        transition: 0.2s;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      margin-top: 20px;
      padding: 7px;
      outline: none;
      border-radius: 2px;
      border: none;
      &:focus {
        background: rgba(214, 214, 214);
        transition: 0.2s;
      }
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgba(164, 0, 69);
      color: white;
      border: none;
      text-align: center;
      padding: 0px;
      font-family: "Varela Round", cursive;
      font-size: 16px;
    }
  }
`;