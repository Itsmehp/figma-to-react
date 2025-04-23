import React from "react";
import "./cta.css";
import { cta } from "../../assets";
const CTA = () => {
  return (
    <div className="wrapper">
      <div className="cta">
        <div className="cta__description">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="cta__button">Get your free proposal</button>
        </div>
        <div className="cta__illustration">
          <img src={cta} alt="call to action button" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
