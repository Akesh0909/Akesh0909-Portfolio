import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akesh Yadav </span>
            from <span className="purple"> Haryana, India.</span>
            <br />
            I'm a full-stack developer and Coder 👨🏽‍💻 .
            <br />
            I have built so many real world web applications and apps..
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Coding: Turning imagination into reality." {" "}
          </p>
          <footer className="blockquote-footer">Akesh Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
