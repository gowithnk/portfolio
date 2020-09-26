import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../assets/img/profile.jpg";
import "./about.css";
import Button from "react-bootstrap/Button";
import Devider from "../components/Devider/devider";

function About() {
  return (
    <div id="about">
      <Devider />
      <div>
        <h1 className="about__heading text-center">About</h1>
        <Container className="about__Container">
          <Row>
            <Col className="about__profile" xs={12} md={6}>
              <Image src={Profile} thumbnail />
            </Col>
            <Col className="about__description" xs={12} md={6}>
              <h2>Hi, I am Niranja kumar</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto necessitatibus error unde aut enim quae laboriosam
                perferendis excepturi provident! Voluptas commodi optio minima
                reprehenderit incidunt architecto inventore minus, delectus
                distinctio sint ad voluptatibus cupiditate rerum facilis facere
                aliquam laboriosam iusto soluta sunt, possimus eveniet? Modi
                debitis aliquam corrupti, laboriosam quidem, quaerat temporibus
                similique ex rerum molestias suscipit, sit voluptatem eveniet
                possimus saepe omnis? Odio consequuntur officiis repellendus at
                aut! Ratione facere neque a vel unde suscipit possimus. Modi,
                similique aliquam!
              </p>
              <Row>
                <Col>
                  <Button variant="outline-primary">Primary</Button>{" "}
                  <Button variant="outline-secondary">Secondary</Button>{" "}
                  <Button variant="outline-success">Success</Button>{" "}
                  <Button variant="outline-warning">Warning</Button>{" "}
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
