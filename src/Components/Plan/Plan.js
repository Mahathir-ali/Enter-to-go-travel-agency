import React from "react";
import { useHistory } from "react-router";
import "./Plan.css";

const Plan = ({ plan }) => {
  const { Name, description, price, img, _id } = plan;
  const history = useHistory();
  const handleBooking = (id) => {
    const uri = `/booking/${id}`;
    history.push(uri);
  };

  return (
    <>
      <div className="card-group">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Name}</h5>
            <p className="card-text">{description}</p>
            <h5>${price}</h5>
          </div>
          <div className="card-footer">
            <button onClick={() => handleBooking(_id)} className="bookNow">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
