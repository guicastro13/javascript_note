import React from "react";
import { Navbar } from "react-bootstrap";
import logoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="navbar navbar-dark bg-danger wh-100 header-height ">
          <div className="container">
            <Link to="/">
              <img className=".navbar-brand w-25 h-auto" src={logoImage} alt="Logo do site" />
            </Link>
            </div>
            <div className="d-flex gap-2 me-5">
              <Link to="/register">
                <button type="button" class="btn btn-outline-light">Register </button>
              </Link>
              <Link to="/login">
                <button type="button" class="btn btn-outline-light">
                  Login
                </button>
              </Link>
            </div>
      </Navbar>
    </>
  );
}

export default Header;
