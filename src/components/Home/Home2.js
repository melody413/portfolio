import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🚀 I am a highly skilled <b className="purple">AI Engineer</b> with over <b className="purple">8 years of experience</b> in building intelligent, scalable solutions using cutting-edge technologies.
              <br />
              <br />
              My core expertise includes:
              <ul>
                <li>
                  ✅ <b className="purple">Machine Learning & Deep Learning</b> (Computer Vision, NLP, Generative AI, LLMs)
                </li>
                <li>
                  ✅ <b className="purple">AI Tools & Frameworks</b> (TensorFlow, PyTorch, Hugging Face, LangChain, PySpark, Pinecone, Weaviate)
                </li>
                <li>
                  ✅ <b className="purple">Full Stack Development</b> (Python, Java, TypeScript, FastAPI, Django, React, Node.js)
                </li>
                <li>
                  ✅ <b className="purple">Cloud & DevOps</b> (AWS, Azure, Kubernetes, Docker, Kafka, Jenkins, CI/CD)
                </li>
              </ul>
              <br />
              Passionate about <b className="purple">LLMs, NLP, and AI-driven automation</b>, I thrive on solving complex challenges and pushing the boundaries of what's possible with modern AI.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{borderRadius: "50%"}} src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/melody413"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
