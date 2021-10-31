import "./About.css";
import React from "react";
import guide from "../../Images/tourist.png";

const About = () => {
  return (
    <div className="about container mt-5">
      <div className="about-us">
        <h3 className="heading">Who We Are WHY CHOOSE US</h3>
        <p>
          Researching and organising your own holiday can be a stressful task.
          Let us do the work for you! By choosing us you can save both time and
          money. Our staff always ready to handle any unforeseen situations.
          Welcome to learn the world with us.
        </p>
      </div>
      <div>
        <div>
          <img src={guide} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
