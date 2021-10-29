import React from "react";
import logo from "../../../Images/logo/travel-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-info">
        <div>
          <h5 className="word">INFO</h5>
          <p>
            <a href="/">About Us</a>
          </p>
          <p>
            <a href="/">Travel</a>
          </p>
          <p>
            <a href="/">Gallery</a>
          </p>
          <p>
            <a href="/">Blog</a>
          </p>
        </div>
        <div>
          <h5 className="word">BLOG</h5>
          <p>
            <a href="/">Explore the world</a>
          </p>
          <p>
            <a href="/">How to travel</a>
          </p>
        </div>
        <div>
          <h5 className="word">NEWSLETTER SIGN UP</h5>
          <p className="address">
            Subscribe now and receive a 20% discount on your next guidebook
            purchase
          </p>
          <input type="email" name="" id="" placeholder="example@email.com" />
          <button className="signup">SIGN UP</button>
        </div>
      </div>
      <hr className="line" />
      <div>
        <div>
          <img className="footer-logo" src={logo} alt="" />
          <div className="text-white">
            <h5 className="word">CONTACT</h5>
            <p className="address">
              Steven Bernson, Attorney at Law 1556 Broadway, New York
            </p>
            <p>
              info@example.com <br />1 800 123 4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
