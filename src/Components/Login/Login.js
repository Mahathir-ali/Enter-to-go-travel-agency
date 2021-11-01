import React from "react";
import "./Login.css";
import googleImg from "../../Images/download.jpg";
import useAuth from "../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const { signinWithGoogle, setUser, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location?.from || "/dashboard";

  const handleLogin = () => {
    signinWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(url);
      })
      .finally(() => setIsLoading(false))
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1 className="mt-5">SIGN IN TO TRAVEL WITH US</h1>
      <div className="google mt-4">
        <h5 className="pt-4">Please sign in</h5>
        <button onClick={handleLogin}>
          <img src={googleImg} alt="" /> Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
