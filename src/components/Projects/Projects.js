import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="Portfolio"
              description="This full-stack web portfolio, built with JavaScript, HTML, CSS, Bootstrap, and React.js, provides a dynamic and visually appealing presentation of my skills, projects, and achievements."
              ghLink="https://github.com/Akesh0909/Portfolio-React"
              demoLink="https://akesh0909.github.io/Portfolio-React/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="College Management System"
              description="The system provides selective access with proper authen-tication for admin, faculty, and students, offering an interface for quizzes and assessments, along with unrestricted access for students to video lectures and notes."
              ghLink="https://github.com/Akesh0909/College_Management_System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fitness Club"
              description="The website, developed using Node.js, HTML/CSS, JavaScript, and MongoDB, integrates diet plans and exercise resources, offering a holistic approach to fitness and health."
              ghLink="https://github.com/Akesh0909/Fitline-Gym"
              demoLink="https://akesh0909.github.io/FitnessClub/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cryptoverse"
              description="Cryptoverse is a user-friendly web application that immerses users in the dynamic world of cryptocurrency. Providing real-time data, insightful analysis, and interactive features, Cryptoverse offers a comprehensive platform for effortlessly tracking crypto- currency market."
              ghLink="https://github.com/Akesh0909/cryptoverse"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tic-tac-toe"
              description="Tic Tac Toe game crafted with HTML, CSS, and JavaScript. Enjoy intuitive gameplay, responsive design, and a delightful user experience. Challenge friends or play against the AI for classic gaming fun."
             ghLink="https://github.com/Akesh0909"
              demoLink="https://akesh0909.github.io/Tic-tac-toe/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Online Music Player"
              description="Immerse yourself in the world of music with our online player, meticulously crafted using JavaScript. Navigate through a user-friendly interface, create playlists, and discover new tracks effortlessly. Elevate your music experience with smooth playback and personalized features."
              ghLink="https://github.com/Akesh0909/Online_Music_Player"
              demoLink="https://akesh0909.github.io/Online_Music_Player/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
