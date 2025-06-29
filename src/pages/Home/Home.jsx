import React from "react";
import Banner from "../../Components/Banner/Banner";
import Projects from "../../Components/Projects/Projects";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Skills from "../../Components/Skills/Skills";
import ContactInfo from "../../Components/Contact/ContactInfo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Home;
