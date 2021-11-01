import React from "react";
import "./Header.css";
import logo from "../../../Images/logo/travel-logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand className="heading" href="#home">
            Enter To Go
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              {user?.email && <NavLink to="/mybooking">My Booking</NavLink>}
              <NavLink to="/dashboard">Dashboard</NavLink>
            </Nav>

            <img className="user-img" src={user.photoURL} alt="" />
            <h6 className="mt-2 user-name"> {user.displayName}</h6>
            {user?.email ? (
              <Button className=" mx-auto  nav-link " onClick={logOut}>
                Log out
              </Button>
            ) : (
              <Link className=" nav-link mx-3" to="/login">
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
