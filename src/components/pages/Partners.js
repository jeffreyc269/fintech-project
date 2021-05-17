import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "../pages/Partners.css";
import diamond from "../images/diamond.png";
import session from "../images/session.png";
import tripple from "../images/tripple.png";
import media from "../images/media.png";
import community from "../images/community.png";

const Partners = () => {
  return (
    <section className="body">
      <section className="partner-jumbo">
        <Jumbotron fluid>
          <Container className="parent">
            <div className="text">
              <h1>Why Partner With Us?</h1>
              <p>
                Virtual FinTech Fair aims to virtually showcase the power of
                Fintech. Partenering with<br></br>us brings a plethora of
                benefits without physical boundaries:
                <br></br>
                <br></br> -Brand exposure through high impact branding with
                digital promotions, pre-events,<br></br>live events, and
                on-demand to over 3000 attendees
                <br></br>
                <br></br> -Networking with the Fintech community and
                collaborating with influencers and<br></br>leaders
                <br></br>
                <br></br> -Interact with decision makers and thought leaders,
                who comprise 80% of the<br></br>attendees
              </p>
              <p>
                If you want to know more about sponsorship and exhibition
                opportunities at<br></br>Virtual FinTech Fair, please contact:{" "}
                <a href="mailto:sponsor@virtualfintechfair.com">
                  sponsor@virtualfintechfair.com
                </a>
              </p>
            </div>
          </Container>
        </Jumbotron>
        <div className="jumbobutton">
          <Link to="/about-us">
            <Button className="know-button">Know more</Button>
          </Link>
        </div>
      </section>
      <section className="partners">
        <section className="diamond">
          <h1>DIAMOND PARTNERS</h1>
          <div>
            <img src={diamond} alt="" />
          </div>
        </section>
        <section className="session">
          <h1>SESSION PARTNERS</h1>
          <div>
            <img src={session} alt="" />
          </div>
        </section>

        <section className="tripple">
          <div className="tripple-partner">
            <div>
              <h1>KNOWLEDGE PARTNER</h1>
            </div>
            <div>
              <h1>PR & COMM. PARTNER</h1>
            </div>
            <div>
              <h1>PR & COMM. PARTNER FOR INDIA</h1>
            </div>
          </div>
          <div>
            <img src={tripple} alt="" />
          </div>
        </section>
        <section className="medias">
          <h1>MEDIA PARTNERS</h1>
          <div>
            <img src={media} alt="" />
          </div>
        </section>
        <section className="community">
          <h1>COMMUNITY PARTNERS</h1>
          <div>
            <img src={community} alt="" />
          </div>
        </section>

        {/* <section>
          <section className="knowledge">
            <h1>KNOWLEDGE PARTNER</h1>
          </section>
          <section className="pr-comm">
            <h1>PR & COMM. PARTNER</h1>
          </section>
          <section className="pr-comm-india">
            <h1>PR & COMM. PARTNER FOR INDIA</h1>
          </section>
        </section> */}
      </section>
      <section className="policy">
        <div className="policy-text">
          <h1>Privacy Policy and Terms of Use</h1>
          <p>
            Asian WealthTech Forum and Virtual Fintech Fair collects and uses
            the information you <br></br>submit on this website and through our third
            party event registration platform as per <br></br>our Terms and Conditions
          </p>
          <div>
            <Link to="/contact">
              <Button className="contactbutton" size="lg">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Partners;
