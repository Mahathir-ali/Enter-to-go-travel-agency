import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ShowBookings from "../ShowBookings/ShowBookings";

const MyBooking = () => {
  const [myBookings, setMyBookings] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  useEffect(() => {
    fetch(`https://limitless-dawn-51897.herokuapp.com/booking/${email}`)
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, []);
  return (
    <div>
      <h1 className="mt-4">YOU HAVE TOTAL {myBookings.length} ORDERS</h1>
      <div className="plans container mt-4">
        {myBookings.map((myBooking) => (
          <ShowBookings
            key={myBooking._id}
            myBooking={myBooking}
          ></ShowBookings>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
