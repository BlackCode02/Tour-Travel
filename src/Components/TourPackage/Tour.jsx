import React from "react";
import "./Tour.css";
import tourimg from "./tourimg.avif";
import tourboximg1 from "./tourboximg1.avif";
import tourboximg2 from "./tourboximg2.avif";
import tourboximg3 from "./tourboximg3.avif";
import tourboximg4 from "./tourboximg4.avif";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Tour = () => {
  return (
    <>
      <Navbar />
      <div className="tourimg">
        <img
          src={tourimg}
          alt=""
          srcset=""
          height={564}
          style={{ width: "-webkit-fill-available" }}
        />
      </div>
      <div className="tourContainer">
        <p className="tourHeading">Discover Your Next Adventure</p>
        <div className="tourmainContainer">
          <div
            className="tour-box"
            style={{ backgroundColor: " rgb(89, 86, 176)" }}
          >
            <div className="tour-box-content">
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>Desserts</p>
              <div className="tour-transform">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "76px",
                    marginBottom: "65px",
                  }}
                >
                  10 Pie Recipes to Try This Fall
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "normal",
                  }}
                >
                  Make this yours. Click here to edit the text and include any
                  relevant information.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="tour-box-img">
              <img
                src={tourboximg1}
                alt=""
                srcset=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div
            className="tour-box"
            style={{ backgroundColor: "rgb(157, 98, 0)" }}
          >
            <div className="tour-box-content">
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>Drinks</p>
              <div className="tour-transform">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "76px",
                    marginBottom: "40px",
                  }}
                >
                  The Health Benefits of Drinking Tea Daily
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "noe",
                  }}
                >
                  Make this yours. Click here to edit the text and include any
                  relevant information.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="tour-box-img">
              <img
                src={tourboximg2}
                alt=""
                srcset=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="tourmainContainer">
          <div
            className="tour-box"
            style={{ backgroundColor: " rgb(153, 53, 0)" }}
          >
            <div className="tour-box-content">
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>Mains</p>
              <div className="tour-transform">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "76px",
                    marginBottom: "40px",
                  }}
                >
                  A Pasta Hack That Will Transport You to Rome
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "noe",
                  }}
                >
                  Make this yours. Click here to edit the text and include any
                  relevant information.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="tour-box-img">
              <img
                src={tourboximg3}
                alt=""
                srcset=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div
            className="tour-box"
            style={{ backgroundColor: "rgb(63, 118, 82)" }}
          >
            <div className="tour-box-content">
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>Healthy</p>
              <div className="tour-transform">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "76px",
                    marginBottom: "65px",
                  }}
                >
                  Creative Salad Ideas for the Veggie Lover
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "noe",
                  }}
                >
                  Make this yours. Click here to edit the text and include any
                  relevant information.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="tour-box-img">
              <img
                src={tourboximg4}
                alt=""
                srcset=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tour;
