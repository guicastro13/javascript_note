import React from "react";
import presentationImage from "../../assets/images/presentation.png";
import Header from "../../components/header";
import { Button } from "react-bootstrap";
import '../../styles/homeScreen.scss'

function HomeScreen() {
  return (
    <>
      <Header/>
        <div className="container d-flex align-items-center ">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Create notes easily and access when you wants on the cloud</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                  <Button className="btn btn-danger">
                      Register for free now
                  </Button>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={presentationImage}
                className="img-fluid rounded-start"
                alt="Computador apresentando site"
              />
            </div>
          </div>
        </div>
    </>
  );
}

export default HomeScreen;
