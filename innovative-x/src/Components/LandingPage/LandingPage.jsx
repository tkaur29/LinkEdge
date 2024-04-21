import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import ButtonPrimary from "./ButtonPrimary";
import image1 from "./landing_page_illus.png";
import { Link } from "react-router-dom";

const LandingPage = ({ title, description, features, ctaText }) => {
  return (
    <div>
      <header className="header">
        <Container className="header-container">
          <h1>{title}</h1>
          <p>{description}</p>
          <Link to="/login">
            <ButtonPrimary text="Get Started" />
          </Link>
        </Container>
      </header>
      <section id="features" className="features-section">
        <Container>
        <a href="#">
          <div id="mouse-scroll">
            <div className="mouse">
              <div className="mouse-in"></div>
            </div>
            <div>
              <span className="down-arrow-1"></span>
              <span className="down-arrow-2"></span>
              <span className="down-arrow-3"></span>
            </div>
          </div>
        </a>
          <h2>Key Features</h2>
          <Row className="card-row">
            {features.map((feature, index) => (
              <Col className="card" key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id="cta" className="cta-section">
        <Container>
          <Row className="cta-rows">
            <Col>
              <h2>{ctaText}</h2>
              <ButtonPrimary text={"Let's Connect"} />
            </Col>
            <Col className="image-col">
              <img
                className="landing-img"
                src={image1}
                alt="Landing page img"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 LinkEDGE. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
