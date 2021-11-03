import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Booking.css";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const history = useHistory();
  const uri = `/mybooking`;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleDetail, setSingleDetail] = useState({});

  const url = `https://limitless-dawn-51897.herokuapp.com/plans`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      const plan = details.find((detail) => detail._id === id);
      setSingleDetail(plan);
    }
  }, [details]);

  const handleMyBooking = () => {
    const book = singleDetail;
    book.email = user.email;
    book.userName = user.displayName;
    // console.log(book);

    fetch("https://limitless-dawn-51897.herokuapp.com/addBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(book),
    });
    history.push(uri);
  };

  return (
    <div className=" container">
      <h1 className="p-5">Booking Conformation</h1>
      <div className="book">
        <div className=" booking-detail">
          <div>
            <img className="destination" src={singleDetail.img} alt="" />
          </div>
          <div className="info">
            <h3>Destination: {singleDetail.Name}</h3>
            <p className="p-4">{singleDetail.description}</p>
            <h5>
              Cost: {singleDetail.price} /<small>for 3 Days</small>
            </h5>
          </div>
        </div>
        <div>
          <div className="info-form add-plan">
            <h4 className="text-center mb-2">FILL UP THE FORM</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user.displayName}
                {...register("name", { required: true, maxLength: 20 })}
                placeholder="name"
              />
              <br />
              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              <br />
              <textarea {...register("description")} placeholder="ADDRESS" />
              <br />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />
              <br />
              <input
                defaultValue={singleDetail.price}
                type="number"
                {...register("price")}
                placeholder="MAKE PAYMENT"
              />
              <br />

              <button onClick={handleMyBooking} className="confirm-btn">
                CONFIRM BOOKING
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
