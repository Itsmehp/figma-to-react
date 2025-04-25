import React from "react";
import "./teamcards.css";
import { si } from "../../assets";

const TeamCards = ({ image, name, position, description }) => {
  return (
    <div className="team__cards">
      <div className="team__card-intro">
        <div className="team__card-photo">
          <img src={image} alt="team" />
        </div>
        <div className="team__card-info-wrapper">
          <div className="team__card-info">
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
          <a href="" className="team__card-icon">
            <img src={si} alt="social" />
          </a>
        </div>
      </div>
      <div className="team__card-desc">{description}</div>
    </div>
  );
};

export default TeamCards;
