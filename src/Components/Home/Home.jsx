import React from "react";
import "./Home.css";
import trip1 from "./trip1.avif";
import trip2 from "./trip2.avif";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import memo1 from "./memo1.webp";
import memo2 from "./memo2.webp";
import memo3 from "./memo3.webp";
import memo4 from "./memo4.webp";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="header-img">
        <div className="header-box">
          <h1>
            Journey with Confidence
            <br />
            Travel with Shivaaksh
            <button>Explore Packges</button>
          </h1>
        </div>
      </div>
      <div className="home-heading">
        <h4>Why Choose Shivaaksh Travels</h4>
      </div>
      <div className="home-services">
        <div
          className="home-inner-container"
          style={{
            width: "382px",
            height: "877px",
            backgroundColor: "rgb(39,124,82)",
            color: "#fff",
          }}
        >
          <h3>Affordable Prices</h3>
        </div>
        <div
          className="home-inner-container"
          style={{
            width: "381px",
            height: "706px",
            backgroundColor: "rgb(247, 147, 33)",
            color: "#fff",
          }}
        >
          <h3>Personalized Services</h3>
        </div>
        <div className="home-inner-sub-container" style={{ padding: "0px" }}>
          <div
            className="sub-box"
            style={{
              backgroundColor: "#662E91",
              color: "#fff",
              padding: "55px 23px 0px 23px",
              width: "314px",
              height: "369px",
              marginBottom: "40px",
            }}
          >
            <h3>Hassel Free Booking</h3>
          </div>
          <div
            className="sub-box"
            style={{
              backgroundColor: "rgb(233 116 28)",
              color: "#fff",
              padding: "55px 23px 0px 23px",
              width: "314px",
              height: "299px",
            }}
          >
            <h3>Trusted Travel Partners</h3>
          </div>
        </div>
      </div>
      <div className="home-sub-heading">
        <h3>Your Travel , Our Expertise</h3>
      </div>
      <div className="home-expertise">
        <div
          className="expertise-container"
          style={{ backgroundColor: "rgb(50, 65, 88)" }}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="10 10 180 180"
            viewBox="10 10 180 180"
            height="100"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-label=""
          >
            <g>
              <path
                d="M100 10c-49.706 0-90 40.294-90 90a89.835 89.835 0 0 0 5.358 30.652l53.991 53.991C78.916 188.108 89.237 190 100 190c49.706 0 90-40.294 90-90s-40.294-90-90-90z"
                fill="#FFDF5B"
                data-color="1"
              ></path>
              <path
                d="m94.001 159.99 59.479-59.479a8.45 8.45 0 0 0 0-11.949L111.438 46.52a8.447 8.447 0 0 0-11.948 0l-59.479 59.479c1.469 1.468 1.733 3.666.862 5.438l2.107 2.108-2.134 2.134-2.108-2.108c-1.771.871-3.969.606-5.438-.862l-17.942 17.942c9.072 25.047 28.944 44.919 53.991 53.991L87.291 166.7c-1.468-1.468-1.733-3.666-.862-5.438l-2.108-2.108 2.134-2.135 2.108 2.109c1.771-.872 3.97-.607 5.438.862zm-50.47-41.626 2.134-2.134 4.112 4.113-2.134 2.134-4.112-4.113zm10.911 10.912-4.113-4.113 2.134-2.135 4.112 4.113-2.133 2.135zm2.685 2.685 2.134-2.135 4.114 4.112-2.134 2.136-4.114-4.113zm6.799 6.798 2.134-2.134 4.112 4.113-2.134 2.135-4.112-4.114zm10.911 10.911-4.112-4.113 2.134-2.135 4.112 4.113-2.134 2.135zm6.798 6.799-4.112-4.113 2.134-2.135 4.112 4.113-2.134 2.135z"
                fill="#FFFFFF"
                data-color="2"
              ></path>
              <path
                d="M176.292 23.708c-4.42-4.42-14.135-1.871-18.555 2.549l-22.185 22.185-14.632-2.62a42.042 42.042 0 0 0 2.707-3.083 2.356 2.356 0 0 0-.199-3.118l-2.769-2.769c-.841-.841-2.184-.936-3.118-.2a41.543 41.543 0 0 0-6.932 6.933 2.415 2.415 0 0 0-.226.349l-45.451-8.137-6.216 6.216 54.774 31.159-13.865 15.003c-2.469 2.468-4.682 4.816-6.653 7.156l-21.624-4.645-4.906 4.906 18.192 13.35a41.428 41.428 0 0 0-1.518 4.801c-.472 1.892 1.249 3.614 3.141 3.141 1.681-.42 3.27-.931 4.802-1.518l13.35 18.192 4.906-4.906-4.645-21.624c2.34-1.971 4.688-4.185 7.156-6.653l15.001-13.863 31.159 54.773 6.216-6.216-8.137-45.451c.121-.064.239-.138.35-.226a41.692 41.692 0 0 0 6.932-6.932 2.356 2.356 0 0 0-.199-3.118l-2.769-2.769c-.841-.841-2.184-.936-3.118-.199a41.778 41.778 0 0 0-3.083 2.707l-2.62-14.632 10.462-10.462 11.723-11.723c4.42-4.421 6.969-14.136 2.549-18.556z"
                fill="#0485EB"
                data-color="3"
              ></path>
            </g>
          </svg>
          <p>
            Book domestic and international flights at the best prices with ease
          </p>
        </div>
        <div
          className="expertise-container"
          style={{ backgroundColor: "rgb(26,66,45)" }}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="20 20 160 160"
            viewBox="20 20 160 160"
            height="100"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-label=""
          >
            <g>
              <path
                fill="#E9741C"
                d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z"
                data-color="1"
              ></path>
              <path
                d="M135.8 93.3H80.9c-.6-9.2-8.3-16.5-17.7-16.5h-9.8V66.5c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v71c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-13.4h95.1v13.4c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-28.3c.1-8.7-7.1-15.9-15.9-15.9zM63.2 80.1c7.6 0 13.8 5.8 14.4 13.2H53.5V80.1h9.7zm-9.7 16.5h82.4c7 0 12.7 5.7 12.7 12.7v11.5H53.5V96.6z"
                fill="#FFFFFF"
                data-color="2"
              ></path>
            </g>
          </svg>
          <p>
            Comfortable stays at top-rated hotels and resorts tailored to your
            needs
          </p>
        </div>
        <div
          className="expertise-container"
          style={{ backgroundColor: "rgb(14, 118, 188)" }}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="26.715 12.058 146.57 175.884"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="26.715 12.058 146.57 175.884"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-label=""
          >
            <g>
              <path
                fill="#FFE473"
                d="M124.045 72.946l-13.953-2.028a2.333 2.333 0 0 1-1.758-1.277l-6.24-12.643c-.857-1.736-3.332-1.736-4.188 0l-6.24 12.643a2.334 2.334 0 0 1-1.758 1.277l-13.953 2.028c-1.916.278-2.68 2.632-1.294 3.983l10.096 9.841c.55.536.802 1.309.672 2.067l-2.383 13.896c-.327 1.908 1.675 3.363 3.388 2.462l12.48-6.561a2.333 2.333 0 0 1 2.173 0l12.48 6.561c1.713.901 3.716-.554 3.388-2.462l-2.383-13.896a2.333 2.333 0 0 1 .672-2.067l10.096-9.841c1.385-1.351.62-3.705-1.295-3.983z"
                data-color="1"
              ></path>
              <path
                fill="#FFE473"
                d="M100 12.058c-40.468 0-73.285 32.209-73.285 71.929 0 40.344 32.062 67.921 73.285 103.955 41.223-36.034 73.285-63.612 73.285-103.955 0-39.721-32.817-71.929-73.285-71.929zm0 131.913c-32.385 0-58.628-26.251-58.628-58.628S67.616 26.715 100 26.715c32.385 0 58.628 26.251 58.628 58.628 0 32.377-26.243 58.628-58.628 58.628z"
                data-color="1"
              ></path>
            </g>
          </svg>
          <p>
            Personalized travel plans for families, solo travelers, or groups
          </p>
        </div>
      </div>
      <div
        className="home-heading plans"
        style={{
          margin: "0px",
          padding: "63px 0px 20px 0px",
          backgroundColor: "rgb(248, 247, 241)",
          textAlign: "center",
          fontSize: "19px",
        }}
      >
        <h2 style={{ paddingBottom: "35px" }}>Plan Your Trip Hassle-Free</h2>
      </div>
      <div className="trip-container">
        <div className="trip-box">
          <div
            className="trip-sub-container"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "80px 261px 0px 50px",
            }}
          >
            <p className="serial">01</p>
            <h3>Explore Destinations</h3>
            <p className="des">
              Discover our handpicked destinations and choose your ideal travel
              experience.
            </p>

            <p className="serial">02</p>
            <h3>Customize Your Itinerary</h3>
            <p className="des">
              Tailor your trip with personalized itineraries designed to suit
              your preferences.
            </p>

            <p className="serial">03</p>
            <h3>Embark on Your Journey</h3>
            <p className="des">
              Set off on a memorable adventure with our seamless booking
              process.
            </p>
          </div>
          <div
            className="trip-sub-container container2"
            style={{ position: "relative" }}
          >
            <img
              src={trip1}
              alt=""
              className="trip1"
              srcset=""
              style={{ width: "444px", height: "672px" }}
            />
            <img
              src={trip2}
              alt=""
              srcset=""
              className="trip2img"
              style={{
                width: "303px",
                height: "303px",
                position: "absolute",
                right: "175px",
                bottom: "280px",
                zIndex: "10",
              }}
            />
          </div>
        </div>
      </div>
      <div className="storeimg-container"></div>
      <div className="stores">
        <div className="stories-head">
          <h2>
            Travelers
            <br />
            Stories
          </h2>
        </div>
        <div className="stories-slider-container">
          <marquee behavior="" direction="up" style={{ whiteSpace: "normal" }}>
            <div className="cards">
              <p className="cardTitle">
                "Shivaaksh Travels made my trip unforgettable. The attention to
                detail and personalization was beyond my expectations."
              </p>
              <p className="cardName">Riya Patel</p>
            </div>
            <div className="cards">
              <p className="cardTitle">
                "I had an amazing experience with Shivaaksh Travels. They
                ensured a hassle-free trip with excellent customer support."
              </p>
              <p className="cardName">Michael Johnson</p>
            </div>
            <div className="cards">
              <p className="cardTitle">
                "I highly recommend Shivaaksh Travels for their professionalism
                and dedication in curating a perfect travel itinerary."
              </p>
              <p className="cardName">Sophia Clark</p>
            </div>
            <div className="cards">
              <p className="cardTitle">
                "I highly recommend Shivaaksh Travels for their professionalism
                and dedication in curating a perfect travel itinerary."
              </p>
              <p className="cardName">Sophia Clark</p>
            </div>
          </marquee>
        </div>
      </div>
      <div className="home-sub-heading">
        <h3>Memories in the Making</h3>
      </div>
      <div className="memories-container">
        <div className="memorise-images">
          <div className="memo-conatiner">
            <div className="memo2" style={{ height: "235px" }}>
              <img
                src={memo2}
                className="memimg"
                alt=""
                width={353}
                height={235}
              />
            </div>
            <div className="memories-box">
              <img
                src={memo3}
                className="memimg"
                alt=""
                width={105}
                height={159}
              />
              <img
                src={memo4}
                className="memimg"
                alt=""
                width={238}
                height={159}
              />
            </div>
          </div>
          <img
            src={memo1}
            style={{ Width: "610px", height: "404px" }}
            alt=""
            className="memimg last"
            srcset=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
