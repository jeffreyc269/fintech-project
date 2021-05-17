import React from "react";
import "./ContentHub.css";
import { Card, CardDeck, Button, Carousel } from "react-bootstrap";
import contentimg from "../images/contentimg.png";
import divider from "../images/divider.png";
import pe1 from "../images/pe1.png";
import pe2 from "../images/pe2.png";
import pe3 from "../images/pe3.png";
import guidesimg from "../images/guidesimg.png";
import news1 from "../images/news1.png"
import news2 from "../images/news2.png"
import news3 from "../images/news3.png"

const ContentHub = () => {
  return (
    <>
      <section className="content-body">
        <section className="title">
          <div className="title-text">
            <h1>
              Content <span style={{ color: "#2FB7F1" }}>Hub</span>
            </h1>
          </div>
          <div className="content-first">
            <div>
              <img src={contentimg} alt="" />
            </div>
            <div>
              <Card style={{ width: "500px" }}>
                <Card.Body>
                  <Card.Title>Hong Kong FinTech Whitepaper 2020</Card.Title>
                  <Card.Text>
                    WHub has teamed up with the key players of the startup scene
                    to create the Hong Kong FinTech Ecosystem White Paper 2019.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
        <section className="previous">
          <Card style={{ width: "500px" }}>
            <Card.Body>
              <Card.Title>PREVIOUS EVENTS</Card.Title>
              <img src={divider} alt="" />
              <Card.Text>
                Take a look at our video library to find how we conduct virtual
                fintech conferences while learning about the latest trends in
                digital assets and the evolution of wealth tech.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
        <section className="previous-carousel">
          <Carousel fade>
            <Carousel.Item interval={5000}>
              <CardDeck>
                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={pe1}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={pe2}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={pe3}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardDeck>
                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={pe2}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={pe3}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={pe1}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Carousel.Item>
          </Carousel>
          <div className="previous-events-button">
            <Button size="lg" variant="primary">
              View More
            </Button>
          </div>
        </section>
        <section className="guides">
          <div className="guides-text">
            <h1>GUIDES</h1>
            <img src={divider} alt="" />
          </div>
          <div className="guidesduo">
            <div>
              <img src={guidesimg} alt="" />
            </div>
            <div className="negative">
              <Card style={{ width: "500px" }}>
                <Card.Body>
                  <Card.Title>Hong Kong FinTech Whitepaper 2020</Card.Title>
                  <Card.Text>
                    WHub has teamed up with the key players of the startup scene
                    to create the Hong Kong FinTech Ecosystem White Paper 2019.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
        <section className="news">
        <div className="news-text">
            <h1>NEWS ARTICLES</h1>
            <img src={divider} alt="" />
          </div>
          <Carousel fade>
            <Carousel.Item interval={5000}>
              <CardDeck>
                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={news1}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={news2}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={news3}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardDeck>
                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={news2}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={news3}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={news2}
                    fluid={true}
                    alt="card image"
                  />
                  <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Carousel.Item>
          </Carousel>
          <div className="previous-events-button">
            <Button size="lg" variant="primary">
              View More
            </Button>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContentHub;
