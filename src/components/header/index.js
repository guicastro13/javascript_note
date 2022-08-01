import React from "react";
import { Navbar } from "react-bootstrap";
import logoImage from "../../assets/images/logo.png";
import '../../styles/header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="py-0">
        <nav className="navbar navbar-dark bg-danger w-100 ">
          <div className="d-flex justify-content-between w-100">
            <Link to="/"> 
              <img className="ps-5 w-25" src={logoImage} alt="Logo do site"/>
            </Link>
            <div className="collapse navbar-collapse w-75 d-flex pe-5 justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="disable">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Navbar>
    </>
  );
}

export default Header;
