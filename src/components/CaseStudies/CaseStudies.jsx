import React from "react";
import "./casestudies.css";
import { blackgreen } from "../../assets";

export const CaseStudies = () => {
  return (
    <div className="wrapper">
      <div className="services__title">
        <div className="services__heading green-bg">
          <h2>Case Studies</h2>
        </div>
        <div className="services__description">
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
            Success through Our Case Studies
          </p>
        </div>
      </div>

      <div className="case__studies">
        <div className="cases">
          <p className="cases__desc">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="cases__learn">
            <a href="#" className="learn__more">
              Learn More
              <img src={blackgreen} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="cases">
          <p className="cases__desc">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="cases__learn">
            <a href="#" className="learn__more">
              Learn More
              <img src={blackgreen} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="cases">
          <p className="cases__desc">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="cases__learn">
            <a href="#" className="learn__more">
              Learn More
              <img src={blackgreen} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
