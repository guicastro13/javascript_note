import React from "react";
import presentationImage from "../../assets/images/presentation.png";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import "../../styles/homeScreen.scss";

function HomeScreen() {
  return (
    <>
      <Header />
      <div className="container height-container align-items-center justify-content-center row">
        <div className="ms-5 col-5">
          <h5 className="card-title fs-2">
            Create notes easily and access when you wants on the cloud
          </h5>
          <p className="card-text   fs-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <Link to="/register">
            <button className="btn btn-danger">Register for free now</button>
          </Link>
        </div>
      <div className="col-6">
        <img
          src={presentationImage}
          className="ms-5 img-fluid w-100 rounded-start"
          alt="Computador apresentando site"
          />
      </div>
    </div>
    </>
  );
}

export default HomeScreen;
