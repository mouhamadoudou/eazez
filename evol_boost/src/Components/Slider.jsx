import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ActionAreaCard from "./Card";
import "./Slider.css";

const ImageSlider = () => {
    const slides = [
        require('../props/template_ecommerce.webp'),
        require('../props/template_website.webp'),
        require('../props/template_application.webp')
    ];
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const descriptions = [
        <ul>Performances ultra-rapides<br/>Paiement sécurisé<br/>Plateforme intuitive pour le client</ul>,
        <ul>Intégration d'éléments 3D<br/>Service web sur mesure<br/>Technologie React.js</ul>,
        <ul>Produit Cross-plateform<br/>Design de l'application<br/>Technologie React Native</ul>
    ]
    const titles = [
        "E-Commerce",
        "Site Vitrine",
        "Application"
    ]

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <AiOutlineLeft className='left-arrow' onClick={prevSlide} />
            <AiOutlineRight className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <ActionAreaCard title={titles[index]} description={descriptions[index]} filepath={slide}/>
                        )}
                        
                    </div>
                );
            })}

        </section>
    );
};

export default ImageSlider;