import React from "react";
import "./servicescard.css";
const Servicescard = ({ image, title, title2, link, arrow, variant }) => {
  return (
    <div className={`services__card ${variant}`}>
      <div className="services__p1">
        <div className="services__content">
          <h3 className={`services__title2 ${variant}`}>{title}</h3>
          <h3 className={`services__title2 ${variant}`}>{title2}</h3>
        </div>
        <div className="services__learn">
          <a href={link} className={`learn__more ${variant}`}>
            <img src={arrow} alt="arrow" />
            Learn More
          </a>
        </div>
      </div>
      <div className="services__illustration">
        <img src={image} alt={title} className="service__image" />
      </div>
    </div>
  );
};

export default Servicescard;
