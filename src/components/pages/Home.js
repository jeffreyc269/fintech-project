import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import eventsone from "../images/eventsone.png";
import eventstwo from "../images/eventstwo.png";
import eventsthree from "../images/eventsthree.png";
import homeone from "../images/homeone.png";
import hometwo from "../images/hometwo.png";
import homethree from "../images/homethree.png";
import homefour from "../images/homefour.png";
import homefive from "../images/homefive.png";
import peopleSay from "../images/people-say.png";
import partners from "../images/partners.png";
import speakers from "../images/speakers.png";
import { MDBContainer } from "mdbreact";
import "../pages/Home.css";

export default function Home() {
  return (
    <section className="home-body">
      <section className="top">
        <div className="first">
          <h1>
            Virtual <span style={{ color: "#2FB7F1" }}>FinTech</span>
            <br></br> Forum 2021
          </h1>
          <p>Get insight from the best industrial leaders</p>
          <Button className="register" size="lg">
            Register Now
          </Button>
          <Button className="details" size="lg">
            View Details
          </Button>
        </div>
        <div className="second">
          <MDBContainer>
            <div className="embed-responsive embed-responsive-21by9">
              <iframe
                title="YouTube video player"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/Sx7gpFpaAeA"
                allowFullScreen
              ></iframe>
            </div>
          </MDBContainer>
        </div>
      </section>
      <section className="moving">
        <Carousel className="Carousel" fade>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={homeone} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={hometwo} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={homethree} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={homefour} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={homefive} alt="Fith slide" />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="key-events">
        <div className="key-events-title">
          <h1>
            <span style={{ color: "#B3D7E2" }}>Key </span>
            <span style={{ color: "#2FB7F1" }}>Events</span>
          </h1>
          <p>
            A series of exclusively digital events showcasing Fintech companies{" "}
            <br></br>
            from across Asia
          </p>
        </div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={eventsone}
              fluid={true}
              alt="card image"
            />
            <Card.Body>
              <Card.Title as="h2" className="card-title">
                Virtual Fintech Fair 2020 Highlights
              </Card.Title>
              <Card.Text className="card-text">
                Virtual Fintech Fair 2020 featured over 80 thought leaders and
                experts in Fintech and Financial services. We presented 40
                Fintech...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">View Details {">"}</Card.Link>
            </Card.Footer>
          </Card>

          <Card className="card">
            <Card.Img
              variant="top"
              src={eventstwo}
              fluid={true}
              alt="card image"
            />
            <Card.Body>
              <Card.Title as="h2" className="card-title">
                Women and Fintech 2021
              </Card.Title>
              <Card.Text className="card-text">
                Virtual Fintech Fair 2020 featured over 80 thought leaders and
                experts in Fintech and Financial services. We presented 40
                Fintech...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">View Details {">"}</Card.Link>
            </Card.Footer>
          </Card>

          <Card className="card">
            <Card.Img
              variant="top"
              src={eventsthree}
              fluid={true}
              alt="card image"
            />
            <Card.Body>
              <Card.Title as="h2" className="card-title">
                Asia Wealthtech Forum 2021
              </Card.Title>
              <Card.Text className="card-text">
                Virtual Fintech Fair 2020 featured over 80 thought leaders and
                experts in Fintech and Financial services. We presented 40
                Fintech...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">View Details {">"}</Card.Link>
            </Card.Footer>
          </Card>
        </CardDeck>
      </section>
      <section className="speakers">
        <div className="flex">
          <div className="speakers-title">
            <h1>
              <span style={{ color: "#B3D7E2" }}>Featured </span>
              <span style={{ color: "#2FB7F1" }}>Speakers</span>
            </h1>
            <p>
              Over the last year we have showcased over a 100 thought leader
              speakers covering Digital Banking, WealthTech, Women & FinTech,
              InsurTech, <br></br>Islamic Finance, RegTech, Financial Inclusion
              among others.
            </p>
            <Button>View All</Button>
          </div>
          <div className="speaker-img">
            <img src={speakers} alt="" />
          </div>
        </div>
      </section>
      <section className="people-say">
        <div className="people-div">
          <div className="quotes">
            <img src={peopleSay} alt="" />
          </div>
          <div className="quotes">
            <Card style={{ width: "40rem" }}>
              <Card.Body className="people-text">
                <Card.Title>
                  <h1>
                    <span style={{ color: "#B3D7E2" }}>What </span>
                    <span style={{ color: "#2FB7F1" }}>People Say</span>
                    <br></br>
                    <span style={{ color: "#B3D7E2" }}>About VFF</span>
                  </h1>
                </Card.Title>
                <Card.Text>
                  <p>
                    Over 5,000+ delegates and 40+ companies across the world of
                    all sizes has joined Virtual Fintech Fair to explore new
                    business opportunities. Our core values are the heart of all
                    that we do.
                  </p>
                </Card.Text>
                <Button className="people-button" size="lg">
                  View All
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <section className="partners">
        <h1>
          <span style={{ color: "#B3D7E2" }}>Our </span>
          <span style={{ color: "#2FB7F1" }}>Trusted </span>
          <span style={{ color: "#B3D7E2" }}>Partners</span>
        </h1>
        <div>
          <img src={partners} alt="" className="partners-logo" />
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter-div">
          <h1>
            <span style={{ color: "#B3D7E2" }}>Subscribe to our </span>
            <span style={{ color: "#2FB7F1" }}>Newsletter</span>
          </h1>
          <p>
            Get exclusive early bird discount for upcoming VFF event and stay up
            to date with the latest Fintech trend.
          </p>
          <div className="input-group">
            <input
              className="newsletter-email"
              type="email"
              placeholder="    Your Email"
            />
            <span className="">
              <Button className="newsletter-button" size="lg" type="submit">
                Subscribe
              </Button>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
