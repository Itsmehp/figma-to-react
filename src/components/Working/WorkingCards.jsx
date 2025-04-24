import React, { useState } from "react";
import "./workingcards.css";
import { plus, minus } from "../../assets";

const WorkingCards = ({ index, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const number = (index + 1).toString().padStart(2, "0");

  return (
    <div className={`working__card ${isExpanded ? "expanded" : ""}`}>
      <div className="working__card-header">
        <div className="working__card-left">
          <span className="working__card-index">{number}</span>
          <h3 className="working__card-title">{title}</h3>
        </div>
        <button
          className="working__toggle-btn"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <img src={isExpanded ? minus : plus} alt="toggle icon" />
        </button>
      </div>
      <div
        className={`working__card-desc-wrapper ${isExpanded ? "expanded" : ""}`}
      >
        <p className="working__card-desc">{description}</p>
      </div>
    </div>
  );
};

export default WorkingCards;
