import React, { useState } from "react";
import "./Gallary.css";
import feedback from "./feeback.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Gallary = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleFeedbackClick = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px 0px" }}>Media Gallary</h1>
      <div className="gallary-container">
        <div className="gaalary-sub-box">
          <img src={feedback} width={100} height={100} alt="" />
          <h4 className="gallaryTital">The Great Things.</h4>
          <p className="gallaryDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            labore nulla a veniam assumenda. Placeat incidunt reprehenderit
            magni corporis illum ipsam dol
          </p>
        </div>
        <div className="gaalary-sub-box">
          <img src={feedback} width={100} height={100} alt="" />
          <h4 className="gallaryTital">The Great Things.</h4>
          <p className="gallaryDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            labore nulla a veniam assumenda
          </p>
        </div>
        <div className="gaalary-sub-box">
          <img src={feedback} width={100} height={100} alt="" />
          <h4 className="gallaryTital">The Great Things.</h4>
          <p className="gallaryDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            labore nulla a veniam assumenda. Placeat incidunt reprehenderit
            magni corporis illum ipsam doloribus odit. Adipisci ab incidunt
            repudiandae, eos facere commodi!
          </p>
        </div>
        <div className="gaalary-sub-box">
          <img src={feedback} width={100} height={100} alt="" />
          <h4 className="gallaryTital">The Great Things.</h4>
          <p className="gallaryDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            labore nulla a veniam assumenda. Placeat incidunt reprehenderit
            magni corporis illum ipsam doloribus odit. Adipisci ab incidunt
            repudiandae, eos facere commodi!
          </p>
        </div>
        <div className="gaalary-sub-box">
          <img src={feedback} width={100} height={100} alt="" />
          <h4 className="gallaryTital">The Great Things.</h4>
          <p className="gallaryDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            labore nulla a veniam assumenda. Placeat incidunt reprehenderit
            magni corporis illum ipsam doloribus odit. Adipisci ab incidunt
            repudiandae, eos facere commodi!
          </p>
        </div>
        <div className="gaalary-sub-box">
          <img src={feedback} width={100} height={100} alt="" />
          <h4 className="gallaryTital">The Great Things.</h4>
          <p className="gallaryDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            labore nulla a veniam assumenda. Placeat incidunt reprehenderit
            magni corporis illum ipsam doloribus odit. Adipisci ab incidunt
            repudiandae, eos facere commodi!
          </p>
        </div>
      </div>

      <button id="feedback-btn" onClick={handleFeedbackClick}>
        Send A Feedback With Us !!
      </button>
      {/* Feeback Form */}
      {showFeedbackForm && (
        <div className="feedback-form">
          <form action="">
            <input type="text" name="" placeholder="Your name" id="" />
            <input type="text" name="" placeholder="Add title" id="" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Add description"
            ></textarea>
            <input type="file" name="" id="" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Gallary;
