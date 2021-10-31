import React from "react";
import "./Gallery.css";
import pic1 from "../../Images/gallery/pic1.jpg";
import pic2 from "../../Images/gallery/pic2.jpg";
import pic3 from "../../Images/gallery/pic3.jpg";
import pic4 from "../../Images/gallery/pic4.jpg";
import pic5 from "../../Images/gallery/pic5.jpg";
import pic6 from "../../Images/gallery/pic6.jpg";
import pic7 from "../../Images/gallery/pic7.jpg";
import pic8 from "../../Images/gallery/pic8.jpg";

const Gallery = () => {
  return (
    <>
      <h4 className="mt-5 heading">This Season Main Attraction</h4>
      <div className="gallery mt-5">
        <div className="container items mt">
          <div>
            <div className="gallery-text">
              <h2>GALLERY</h2>
              <p>
                Machu Picchu is one of those places that every single traveller
                should experience at least once in their lives
              </p>
            </div>
          </div>
          <div>
            <div className="row images">
              <div className="col-4">
                <div className="row mb-2">
                  <img src={pic7} alt="" />
                </div>
                <div className="row mb-2">
                  <img src={pic4} alt="" />
                </div>
                <div className="row mb-2">
                  <img src={pic2} alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="row mb-2">
                  <img src={pic6} alt="" />
                </div>
                <div className="row mb-2">
                  <img src={pic1} alt="" />
                </div>
                <div className="row">
                  <img src={pic5} alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="row mb-2">
                  <img src={pic3} alt="" />
                </div>
                <div className="row mb-2">
                  <img src={pic8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
