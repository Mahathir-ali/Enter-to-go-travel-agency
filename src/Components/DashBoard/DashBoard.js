import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    fetch("https://limitless-dawn-51897.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="heading m-5">DASHBOARD</h1>
      <div className="dashboard ">
        <div className="col-lg-4 col-md-6  add">
          <Link to="/add">
            <span>+</span> ADD PLAN
          </Link>
        </div>
        <div className="row">
          <div className="col col-lg-8 col-md-6 ">
            <div>
              {allUser.map((user) => (
                <div className=" users" key={user._id}>
                  <div className="user-info">
                    <div className="text-danger">NAME: {user.userName}</div>
                    <div>
                      E-mail: <span className="text-danger">{user.email}</span>
                    </div>
                  </div>

                  <hr />
                  <p>Destination: {user.Name}</p>
                  <p>Cost: {user.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
