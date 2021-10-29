import React from "react";
import "./Plans.css";
import { useEffect } from "react";
import { useState } from "react";
import Plan from "../Plan/Plan";

const Plans = () => {
  const [plans, setPlans] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div className=" container mt-5">
      <h5>Tours</h5>
      <h4 className="mb-4">OTHER DESTINATIONS</h4>
      <div className="plans">
        {plans.map((plan) => (
          <Plan key={plan._id} plan={plan}></Plan>
        ))}
      </div>
    </div>
  );
};

export default Plans;
