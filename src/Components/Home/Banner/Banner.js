import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../../Images/slider/slides_1.png";
import img2 from "../../../Images/slider/slides_2.png";
import img3 from "../../../Images/slider/slides_3.png";
import pic1 from "../../../Images/pic1.png";
import pic2 from "../../../Images/pic2.png";

const Banner = () => {
  return (
    <div className="row mx-1">
      <div className="col-8 col-md-8">
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption>
                <h3>INSPIRING, BEAUTIFUL,BREATHTAKING</h3>
                <p>
                  Many people visit Peru to see the impressive inca ruins of
                  Machu Picchu, which are deservedly a stand-alone destination
                </p>
                <h5>$1000</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />

              <Carousel.Caption>
                <h3>PERFECT YOUR DREAM VACATION</h3>
                <p>
                  Perched on a ridge high above the Sacred Valley and proteced
                  from the invading Spaniards, it survives to this day as the
                  best-preserved relic of Inca civilization
                </p>
                <h5>$ 1200</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />

              <Carousel.Caption>
                <h3>EXPLORE THE WORLD</h3>
                <p>
                  Machu Picchu is one of those places that every single
                  traveller should at least once in their lives.
                </p>
                <h5>$ 1500</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="col-4 col-md-4 pe-1">
        <div className="row mb-3 ">
          <img className="img-fluid" src={pic1} alt="" />
        </div>
        <div className="row">
          <img className="img-fluid" src={pic2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
