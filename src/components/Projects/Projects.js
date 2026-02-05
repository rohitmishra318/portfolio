import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LeftOverLink"
              description="A food donation and logistics application built with the MERN stack. It connects donors with NGOs to reduce food waste, featuring real-time tracking and a streamlined dashboard for managing donations."
              ghLink="https://github.com/rohit318mishra/LeftOverLink"
              // demoLink="your-demo-url-here"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="InfoCrucible"
              description="A misinformation detection platform that utilizes a RoBERTa NLP model to verify the credibility of news. Built with the MERN stack, it provides users with real-time analysis of textual data."
              ghLink="https://github.com/rohit318mishra/InfoCrucible"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Skinify"
              description="A skincare analysis platform designed to provide personalized recommendations. It uses image processing and data analysis to evaluate skin conditions and suggest suitable routines."
              ghLink="https://github.com/rohit318mishra/Skinify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Renthub"
              description="A property rental platform featuring a built-in recommendation system. Developed with the MERN stack, it helps users find ideal housing based on their preferences and search history."
              ghLink="https://github.com/rohit318mishra/Renthub"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;