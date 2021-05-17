import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import jumboimage from "../images/carousel.png";
import whoweare from "../images/whoweare.png";
import whatwedo from "../images/whatwedo.png";
import howitworks from "../images/howitworks.png";
import "../pages/AboutUs.css";
import divider from "../images/divider.png";
import learn1 from "../images/learn1.png";
import learn2 from "../images/learn2.png";
import learn3 from "../images/learn3.png";
import keypeople1 from "../images/keypeople1.png";
import keypeople2 from "../images/keypeople2.png";

//import image

const AboutUs = () => {
  return (
    <section className="about-body">
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${jumboimage})`,
          backgroundSize: "cover",
        }}
      >
        <Container
          className="jumbo"
          style={{ background: "transparent", color: "white" }}
        >
          <h1>LEARN . CONNECT . INSPIRE</h1>
          <p>
            We aim to run world class Fintech conferences, forums and executive{" "}
            <br></br>training courses focussing on APAC.
          </p>
        </Container>
      </Jumbotron>
      <section className="partone">
        <div className="flex">
          <div className="first">
            <img className="imageone" src={whoweare} alt="" />
          </div>
          <div className="first">
            <Card
              style={{ width: "40rem", color: "white" }}
              className="card-one"
            >
              <Card.Body>
                <Card.Title as="h1">WHO WE ARE</Card.Title>
                <img className="divider" src={divider} alt="" />
                <Card.Text>
                  Virtual Fintech Fair (VFF), co-founded by FinStep Asia and
                  Novsphere Media. <br></br>
                  The launch of VFF in 2020 brought together over 3,000 senior
                  financial services executives from 90 countries around the
                  world to discuss and learn about how to overcome the biggest
                  challenge it has faced since the 2008 financial crisis –
                  COVID-19.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="flex">
          <div className="first">
            <Card
              style={{ width: "40rem", color: "white" }}
              className="card-two"
            >
              <Card.Body>
                <Card.Title as="h1">WHAT WE DO</Card.Title>
                <img className="divider" src={divider} alt="" />
                <Card.Text>
                  Is a series of exclusively digital events showcasing Fintech
                  companies from across Asia and bringing together the brightest
                  minds and thought leaders in the global Fintech community.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="first">
            <img className="imagetwo" src={whatwedo} alt="" />
          </div>
        </div>

        <div className="flex">
          <div className="first">
            <img className="imagetwo" src={howitworks} alt="" />
          </div>
          <div className="first">
            <Card
              style={{ width: "40rem", color: "white" }}
              className="card-three"
            >
              <Card.Body>
                <Card.Title as="h1">HOW IT WORKS</Card.Title>
                <img className="divider" src={divider} alt="" />
                <Card.Text>
                  Asia WealthTech Forum is jointly organized by Virtual FinTech
                  Fair and the Associations of Family Offices in Asia. The Forum
                  is part of Asia Futurist Leadership Summit (AFL Summit).
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <section className="learn">
        <div className="head">
          <h1>WHAT YOU LEARN</h1>
          <img className="head" src={divider} alt="" />
        </div>
        <div>
          <div className="learn-div">
            <div className="learn-card">
              <img src={learn1} alt="" />
              <p className="cardhead">
                Robo-advisory<br></br>
                <br></br>
              </p>
              <p className="cardtext">
                Robo-advisors are digital platforms that provide <br></br>
                automated, algorithm-driven investment services with <br></br>
                little to no human supervision.
              </p>
            </div>
            <div className="learn-card">
              <img src={learn2} alt="" />
              <p className="cardhead">
                GBA Opportunities<br></br>
                <br></br>
              </p>
              <p className="cardtext">
                The GBA development is set to sustain growth and create abundant
                opportunities for companies that are looking to do business with
                or in the region.
              </p>
            </div>
            <div className="learn-card">
              <img src={learn3} alt="" />
              <p className="cardhead">
                ESG Strategies<br></br>
                <br></br>
              </p>
              <p className="cardtext">
                Environmental, social, and governance (ESG) criteria are a set
                of standards for a company’s operations that socially conscious
                investors use to screen potential investments.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="key-people">
        <div className="key-people-head">
          <h1>KEY PEOPLE</h1>
          <div className="key-people-img">
            <img src={keypeople1} alt="" />
            <img src={keypeople2} alt="" />
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="cutext">
          <p>
            Get exclusive early bird discount for upcoming VFF event and stay up
            to date <br></br>with the latest Fintech trend.
          </p>
          <div className="cutext-bottom">
            <Link to="/contact">
              <Button className="aboutbutton" size="lg">Contact us</Button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
