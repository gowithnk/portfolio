import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../assets/img/profile.jpg";
import "./about.css";
import Button from "react-bootstrap/Button";

function About() {
  return (
    <div id="about">
      <div>
        <h1 className="about__heading text-center  font-details pb-3 pt-3">
          ABOUT ME
        </h1>
        <Container className="about__Container">
          <Row className="pt-3 pb-5 align-items-center">
            <Col className="about__profile" xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Image
                  className="profile__pic justify-content-end"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col className="mb-2" xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <h2>Hi, I am Niranjan kumar</h2>
                <p>
                  A passionate programmer and a Tutor, born and brought up in
                  India. I am a Full Stack Web Developer with React.js, Redux,
                  Express.js, Node.js, and PostgreSQL as my tech stack.
                  <br />
                  Working with the clients, my goal is always driven towards
                  providing amazing experience with the best level of quality
                  and service to them.
                </p>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1t2NH7FXiRSFXz1HS7pNuVHIyDXVsmpUG/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/niranjan.int"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Facebook
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.github.com/gowithnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/niranjan-chourasia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
