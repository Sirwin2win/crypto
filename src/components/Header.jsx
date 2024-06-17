import React from "react";
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar'
// import logo from '../assets/images/logo.jpg'
import logo from "../assets/images/wall.jpg";
import { Link } from "react-router-dom";
import "./Styles.css";
import { IoCall } from "react-icons/io5";
import { DatePicker } from "antd";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm bg-gray text-dark navbar-dark mw-full fron"
        id="hh"
      >
        <div className="container-fluid">
          <Nav.Link to="/">
            <img
              src={logo}
              height="70"
              width="70"
              className="rounded-circle mx-5"
              alt="Logo"
            />
          </Nav.Link>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon text-dark"></span>
          </button>
          <div
            className="collapse navbar-collapse text-dark"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <Nav.Link to="/">
                <Link className="tu" to={"/"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/rooms"}>
                  Rooms
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/hotel-info"}>
                  Hotel Info
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/offers"}>
                  Offers
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/gallery"}>
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/location"}>
                  Location
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/dining"}>
                  Dining
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/events"}>
                  Events
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/register"}>
                  Join |
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tu" to={"/login"}>
                  Sign In{" "}
                </Link>
              </Nav.Link>
            </ul>
          </div>
        </div>
      </nav>
      <DatePicker />;
    </div>
  );
};

export default Header;
