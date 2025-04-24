import React from "react";
import "./working.css";
import WorkingCards from "./WorkingCards";

const cardData = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Strategy",
    description: "Our team develops a tailored plan for your success.",
  },
  {
    title: "Execution",
    description: "We put the strategy into action with expert precision.",
  },
  {
    title: "Analysis",
    description: "We analyze the performance and optimize results.",
  },
];
const Working = () => {
  return (
    <div className="wrapper">
      <div className="services__title">
        <div className="services__heading green-bg">
          <h2>Our Working Process</h2>
        </div>
        <div className="services__description">
          <p>
            Step-by-Step Guide to Achieving <br /> Your Business Goals
          </p>
        </div>
      </div>

      <div className="working__boxes">
        {cardData.map((card, index) => (
          <WorkingCards
            key={index}
            index={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Working;
