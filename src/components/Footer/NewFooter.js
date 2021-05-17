import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../Footer/NewFooter.css";

export function NewFooter() {
  return (
    <div className="foot">
      <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <Link to="/">
                <img src={logo} alt="" className="logo" />
              </Link>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="footer-header">Company</h6>
              <p className="footer-links">
                <a href="/about-us">What we do</a>
              </p>
              <p className="footer-links">
                <a href="/partners">Our partners</a>
              </p>
              <p className="footer-links">
                <a href="/contact">Contact us</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="footer-header">Useful links</h6>
              <p className="footer-links">
                <a href="#!">Upcoming Events</a>
              </p>
              <p className="footer-links">
                <a href="#!">Past Events</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="footer-header">Useful Links</h6>
              <p className="footer-links">
                <a href="#!">Blogs</a>
              </p>
              <p className="footer-links">
                <a href="#!">Terms and conditions</a>
              </p>
              <p className="footer-links">
                <a href="#!">Privacy Policy</a>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8" className="bottom">
              <p className="text-center text-md-center white-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <p>Virtual Fintech Fair. All rights reserved. </p>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}
