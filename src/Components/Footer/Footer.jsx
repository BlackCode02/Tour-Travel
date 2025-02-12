import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main-conatiner">
          <div className="footer-conatiner foot-up-box">
            <div className="footer-content">
              <h5>CONTACT US</h5>
              <p>
                <Link to="tel:+917011429663">+91 701 142 9663</Link>
              </p>
              <p>
                <Link to="mailto:Shivaakshtravels@gmail.com">
                  Shivaakshtravels@gmail.com
                </Link>
              </p>
            </div>
            <div
              className="footer-content"
              style={{
                borderLeft: "1px solid #fff",
                borderRight: "1px solid #fff",
              }}
            >
              <h5>ADDRESS</h5>
              <p>
                <Link
                  target="_blank"
                  to="https://www.google.com/maps/place/P.za+della+Signoria,+12,+50122+Firenze+FI,+Italy/@43.7698405,11.254907,20z/data=!4m20!1m13!4m12!1m6!1m2!1s0x132a5400557fce11:0x77ef65e61406784a!2sP.za+della+Signoria,+12,+50122+Firenze+FI,+Italy!2m2!1d11.2552101!2d43.7698604!1m3!2m2!1d11.2552316!2d43.7698604!3e0!3m5!1s0x132a5400557fce11:0x77ef65e61406784a!8m2!3d43.7698604!4d11.2552101!16s%2Fg%2F11f3zphnxj?entry=ttu"
                >
                  Piazza Della Signoria, 12
                  <br />
                  21562 . Firenze . Italy
                </Link>
              </p>
            </div>
            <div className="footer-content" style={{ marginTop: "-10px" }}>
              <h5>Opening hours</h5>
              <p>
                <Link
                  target="_blank"
                  to="https://www.google.com/maps/place/P.za+della+Signoria,+12,+50122+Firenze+FI,+Italy/@43.7698405,11.254907,20z/data=!4m20!1m13!4m12!1m6!1m2!1s0x132a5400557fce11:0x77ef65e61406784a!2sP.za+della+Signoria,+12,+50122+Firenze+FI,+Italy!2m2!1d11.2552101!2d43.7698604!1m3!2m2!1d11.2552316!2d43.7698604!3e0!3m5!1s0x132a5400557fce11:0x77ef65e61406784a!8m2!3d43.7698604!4d11.2552101!16s%2Fg%2F11f3zphnxj?entry=ttu"
                >
                  Everyday : From 12.30 To 23.00
                </Link>
              </p>
            </div>
          </div>
          <div className="footer-conatiner footerbottom">
            <div className="footer-section">
              <hr />
            </div>
            <div className="footer-section">
              <h4 style={{ minWidth: "max-content" }} className="footername">
                SHIVAAKSH TRAVELS
              </h4>
            </div>
            <div className="footer-section">
              <hr />
            </div>
          </div>
          <div className="foot-ico footer-conatiner">
            <div className="footer-icons">
              <Link to="#">
                <i class="bi bi-facebook"></i>
              </Link>
              <Link to="#">
                <i class="bi bi-twitter"></i>
              </Link>
              <Link to="#">
                <i class="bi bi-linkedin"></i>
              </Link>
              <Link to="#">
                <i class="bi bi-instagram"></i>
              </Link>
            </div>
            <div className="footer-icons reserved">
              @2024 ALL RIGHTS ARE RESERVED
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
