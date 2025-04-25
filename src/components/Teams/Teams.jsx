import React from "react";
import "./teams.css";
import { pp } from "../../assets";
import TeamCards from "./TeamCards";

const teamData = [
  {
    image: pp,
    name: "John Doe",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: pp,
    name: "John Doe",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: pp,
    name: "John Doe",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: pp,
    name: "John Doe",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: pp,
    name: "John Doe",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: pp,
    name: "John Doe",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
];

const Teams = () => {
  return (
    <div className="wrapper">
      <div className="services__title">
        <div className="services__heading green-bg">
          <h2>Team</h2>
        </div>
        <div className="services__description">
          <p>
            Meet the skilled and experienced team behind our <br />
            successful digital marketing strategies
          </p>
        </div>
      </div>
      <div className="team__grid">
        {teamData.map((tCards, index) => (
          <TeamCards
            key={index}
            image={tCards.image}
            name={tCards.name}
            position={tCards.position}
            description={tCards.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
