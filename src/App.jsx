import React from "react";
import {
  Header,
  CaseStudies,
  ContactUs,
  CTA,
  Footer,
  Navbar,
  Services,
  Teams,
  Testimonials,
  Working,
} from "./components";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <CTA />
      <CaseStudies />
      <Working />
      <Teams />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default App;
