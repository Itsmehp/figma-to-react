import React from "react";
import "./services.css";
import ServicesCard from "./Servicescard";
import { I1, I2, I3, I4, I5, I6, blackgreen, whiteblack } from "../../assets";

const servicesData = [
  {
    image: I1,
    title: "Search Engine",
    title2: "Optimization",
    link: "#",
    arrow: blackgreen,
    variant: "grey",
  },
  {
    image: I5,
    title: "Pay-per-click",
    title2: "advertising",
    link: "#",
    arrow: blackgreen,
    variant: "green",
  },
  {
    image: I4,
    title: "Social media",
    title2: "Marketing",
    link: "#",
    arrow: whiteblack,
    variant: "black",
  },
  {
    image: I6,
    title: "Email",
    title2: "Marketing",
    link: "#",
    arrow: blackgreen,
    variant: "grey",
  },
  {
    image: I3,
    title: "Content",
    title2: "Creation",
    link: "#",
    arrow: blackgreen,
    variant: "green",
  },
  {
    image: I2,
    title: "Analytics and",
    title2: "tracking",
    link: "#",
    arrow: whiteblack,
    variant: "black",
  },
];
const Services = () => {
  return (
    <div className="wrapper">
      <div className="services__title">
        <div className="services__heading green-bg">
          <h2>Services</h2>
        </div>
        <div className="services__description">
          <p>
            At our digital marketing agency, we offer a range of services to{" "}
            <br />
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </div>
      <div className="services__grid">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
