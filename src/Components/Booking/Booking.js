import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Booking.css";
const Booking = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleDetail, setSingleDetail] = useState({});

  const url = `http://localhost:5000/plans`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      const plan = details.find((detail) => detail._id == id);
      setSingleDetail(plan);
    }
  }, [details]);

  return (
    <div>
      <h1 className="p-5">Booking Conformation</h1>
      <div className=" container booking-detail">
        <div>
          <img src={singleDetail.img} alt="" />
        </div>
        <div className="info">
          <h3>Destination: {singleDetail.Name}</h3>
          <p className="p-4">{singleDetail.description}</p>
          <h5>
            Cost: {singleDetail.price} /<small>for 3 Days</small>
          </h5>
          <button className="confirm-btn">CONFIRM BOOKING</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
