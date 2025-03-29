import React from "react";
import About from "../Components/About";
import Values from "../Components/Values";
import Facts from "../Components/Facts";
import Feature from "../Components/Feature";
import Testimonial from "../Components/Testimonial";
import BreadCrum from "../Components/BreadCrum";



const AboutPage = () => {
  return (
    <>
    <BreadCrum title="About US"/>
      <About />
      <Values />
      <Facts />
      <Feature />
      <Testimonial />
    </>
  );
};

export default AboutPage;
