import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer } from "mdbreact";
import date from "../images/date.png";
import upcomingspeakers from "../images/upcomingspeakers.png";
import upPartner from "../images/upPartner.png";
import schedule from "../images/schedule.png";
import UpcomingForm from "../Form/UpcomingForm";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  return (
    <section className="upcoming-body">
      <section className="upcoming-info">
        <div className="upcoming-video">
          <MDBContainer>
            <div className="embed-responsive embed-responsive-21by9">
              <iframe
                title="YouTube video player"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/7TCurnvwI20"
                allowFullScreen
              ></iframe>
            </div>
          </MDBContainer>
        </div>
        <div className="info-right">
          <div>
            <img src={date} alt="" />
            <p>Virtual Fintech Forum x Startmeuphk Festival 2021</p>
          </div>
          <div>
            <UpcomingForm className="upcomingform" />
          </div>
        </div>
      </section>
      <section className="overview">
        <div className="overview-title">
          <h1>ABOUT THIS EVENT</h1>
        </div>
        <div>
          <p>
            VFF are delighted to bring to you “Virtual FinTech Forum 2021”, a
            full<br></br> day Fintech conference that will provide insights and
            curated thought <br></br>leadership on the core themes of Fintech
            for Industry 4.0 and Fintech for ESG
            <br></br>& Sustainability.
          </p>
        </div>
      </section>
      <section className="upcoming-speaker">
        <div className="up-speakers-title">
          <h1>SPEAKER LINEUP</h1>
        </div>
        <div className="up-speakers-img">
          <img className="people" src={upcomingspeakers} alt="" />
        </div>
      </section>
      <section className="upcoming-partner">
        <div className="up-partner">
          <div className="partner-title">
            <h1>GOLD PARTNER</h1>
          </div>
          <div className="partner-combo">
            <div>
              <img src={upPartner} alt="" />
            </div>
            <div>
              <p>
                Rapyd is a global Fintech as a Service company. Their Global
                Payments<br></br> Network connects companies to 900+ local
                payment methods in 100 <br></br>countries. They also built the
                infrastructure that allows you to create <br></br>your own
                white-label fintech solutions, issue cards and offer financial
                services.
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="schedule">
        <div>
          <div>
            <h1>SCHEDULE</h1>
          </div>
          <div className="schedule-img">
            <img className="schImg" src={schedule} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default UpcomingEvents;
