import React from "react";
import "./Plans.css";
import { useEffect } from "react";
import { useState } from "react";
import Plan from "../Plan/Plan";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("https://limitless-dawn-51897.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div className=" container mt-5">
      <h5 className="heading">Tours</h5>
      <h4 className="mb-4 heading">OTHER DESTINATIONS</h4>
      <div className="plans">
        {plans.map((plan) => (
          <Plan key={plan._id} plan={plan}></Plan>
        ))}
      </div>
    </div>
  );
};

export default Plans;
