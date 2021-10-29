import React from "react";

const Plan = ({ plan }) => {
  const { Name, description, price, img } = plan;
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
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
