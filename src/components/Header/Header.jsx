import React from "react";
import "./header.css";
import { hero, c1, c2, c3, c4, c5, c6 } from "../../assets";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header__content">
          <h1 className="header__heading">
            Navigating the <br /> digital landscape <br /> for success
          </h1>
          <p className="header__description">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="header__button">Book a Consultation</button>
        </div>
        <div className="header__image">
          <img src={hero} alt="Digital Marketing Illustration" />
        </div>
      </div>
      <div className="wrapper">
        <div className="header__company">
          <img src={c1} alt="Digital Marketing Illustration" />
          <img src={c2} alt="Digital Marketing Illustration" />
          <img src={c3} alt="Digital Marketing Illustration" />
          <img src={c4} alt="Digital Marketing Illustration" />
          <img src={c5} alt="Digital Marketing Illustration" />
          <img src={c6} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </header>
  );
};

export default Header;
