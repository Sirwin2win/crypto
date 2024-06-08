import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import wall from "../assets/images/bg6.jpg";
// import '../index.css'
import "./Styles.css";

const Navi = () => {
  return (
    <div className="text-white men">
      <Navbar expand="lg" data-bs-theme="dark">
        {/* <Navbar.Brand href="#home" >Destre</Navbar.Brand> */}
        <Navbar.Brand>
          <Link to={"/"}>
            {" "}
            <img src={wall} id="pic" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navin text-center">
            <Nav.Link>
              <Link className="tu" to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="tu" to={"/news"}>
                News
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="tu" to={"/dashboard"}>
                Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="tu" to={"/login"}>
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
