import React from "react";

import "./About.css";
import aboutimg from "./aboutimg.avif";
import aboutmain from "./aboutmain.avif";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutimg">
        <img src={aboutimg} alt="NEOM" srcset="" height={564} id="nemonimg" />
      </div>
      <div className="aboutMain">
        <div className="aboutContainer">
          <div className="about-content">
            <h2>Our Goals & History</h2>
            <p style={{ marginTop: "11px", marginBottom: "28px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className="about-img">
            <img
              src={aboutmain}
              alt=""
              srcset=""
              width="100%"
              height="100%"
              id="secondimg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
