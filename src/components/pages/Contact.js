import React from "react";
import ContactForm from "../Form/ContactForm";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";
import "./contact.css";
import contactjumbo from "../images/contactjumbo.png";

//import image

const Contact = () => {
  return (
    <section className="contact-body">
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${contactjumbo})`,
          backgroundSize: "cover",
        }}
      >
        <Container style={{ background: "transparent" }}>
          <div className="jumbotext">
            <h1>Reach Our Team</h1>
            <p>
              We love to hear your plan and questions, we're glad to help you,
              here are some ways to contact us.
            </p>
            <div className="mail">
              <div><a href="mailto:contact@virtualfintechfair.com">contact@virtualfintechfair.com</a></div>
              <div><a href="mailto:sponsor@virtualfintechfair.com">sponsor@virtualfintechfair.com</a></div>
              <div><a href="mailto:musheer@finstep.asia">musheer@finstep.asia</a></div>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <div>
        <ContactForm className="contactform"/>
      </div>
    </section>
  );
};

export default Contact;
