import React from "react";
import header from "../Resources/header.png";
import "../Style/Content.css";
import Card from "../Components/Card";
import logo1 from "../Resources/logo1.png";
import logo2 from "../Resources/logo2.png";
import logo3 from "../Resources/logo3.png";
import logo4 from "../Resources/logo4.png";
import image from "../Resources/image.jpg";
import image1 from "../Resources/handshake.png";
import image2 from "../Resources/loudspeaker.png";
import image3 from "../Resources/online.png";

function Content() {
  return (
    <>
      <div className="content d-flex justify-content-center flex-column">
        <section className="container d-flex justify-content-center align-items-center">
          <div className="heading d-flex flex-column">
            <span className="text-start fs-5 w-50">
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <h1>We are consulting for your Bussiness Finances</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto odit dolorem exercitationem quae aliquid optio, enim
              beatae labore ut ducimus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam, qui?
            </p>

            <button
              type="button"
              class="btn bg-theme-blue rounded-0 my-3 px-4 btn-custom"
            >
              Start Now
            </button>
          </div>
          <div className="image ">
            <img src={header} alt="" />
          </div>
        </section>
      </div>

      <div className="experience-section my-5">
        <section className="container d-flex justify-content-center align-items-center">
          <div className="heading d-flex flex-column">
            <h2>We are consulting for your Bussiness Finances</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto odit dolorem exercitationem quae aliquid optio, enim
              beatae labore ut ducimus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam, qui?
            </p>

            <button
              type="button"
              class="btn bg-theme-blue rounded-0 my-3 px-4 btn-custom"
            >
              Know More
            </button>
          </div>

          <div className="image w-100 " style={{ position: "relative" }}>
            <button className="btn btn-play rounded-circle fs-1" type="button">
              <i class="bi bi-play-circle-fill"></i>
            </button>
            <img src={image} alt="" className="float-end w-75" />
          </div>
        </section>
        <div className="company-logo container d-flex align-items-center text-center my-5">
          <div className="img-container ">
            <img src={logo1} alt="" className="w-50" />
          </div>
          <div className="img-container">
            <img src={logo2} alt="" className="w-50" />
          </div>
          <div className="img-container">
            <img src={logo3} alt="" className="w-50" />
          </div>
          <div className="img-container">
            <img src={logo4} alt="" className="w-50" />
          </div>
        </div>
      </div>

      <div
        className="services my-5 d-flex flex-column align-items-center py-5"
        style={{ backgroundColor: "#F7FCFF" }}
      >
        <div className="heading m-auto text-center w-25">
          <h2>Our Services</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            aperiam quos est, consequuntur beatae et.
          </span>
        </div>

        <div className="row container my-5 m-md-2 g-md-5">
          <Card image={image1} title="Financial Consulting" />
          <Card image={image2} title="Content Marketing" />
          <Card image={image3} title="Finance Advice" />
        </div>

        <button
          type="button"
          class="btn bg-theme-blue rounded-0 my-3 px-4 btn-custom"
        >
          All Services
        </button>
      </div>

      {/* <div className="newletter">
        <div className="text-content"></div>
        <div className="imput-box">

        </div> 
      </div>*/}
    </>
  );
}

export default Content;
