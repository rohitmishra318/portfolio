import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">ROHIT MISHRA</span>{" "}
            from <span className="purple">Gwalior, India</span>.
            <br />
            I’m currently a <span className="purple">B.Tech Student</span> in 
            Computer Science at <span className="purple">IIIT Gwalior</span>.
            <br />
            I am a passionate <span className="purple">MERN Stack Developer</span> and 
            competitive programmer with a focus on building scalable web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Open Source Contribution 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Solving problems one commit at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;