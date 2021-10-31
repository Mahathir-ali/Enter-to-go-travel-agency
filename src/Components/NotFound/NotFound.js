import "./NotFound.css";
import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../Images/404.png";
const NotFound = () => {
  return (
    <div className="notfound">
      <img src={notfound} alt="" />
      <br />
      <Link to="/home">
        <button className="back-btn">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
