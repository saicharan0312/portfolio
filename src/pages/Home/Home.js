import React, { useEffect, useState } from "react";
import {
  FaFileDownload,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiLinkedin,
  SiGithub
} from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import {
  ProfilePicture,
} from "../../assets";
import Skills from "../Skills/Skills";
import styles from "./Home.module.css";

const Home = () => {
  const [text, setText] = useState(0);
  const listOfDesignations = [
    "Full Stack Developer",
    "Software Engineer",
    "Student"
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      var rand = Math.floor(Math.random() * 3);
      setText(rand);
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return (
    <React.Fragment>
    <Container
      fluid
      className={styles.container}
      style={{ backgroundColor: "#eaedf0"  }}
    >
      <Row>
        <ImageHolder
          primarySource={ProfilePicture}
          alt="Profile Picture of Sai Charan Reddy Pannala"
          className={styles.professionalHeadshot}
        />
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingOne}`}>
            Sai Charan Reddy Pannala
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={`${styles.typewriter}`}>
            <h1>{ listOfDesignations[text] }</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://github.com/saicharan0312" target="_blank_">
            <SiGithub className={styles.icon} />
          </a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/saicharan0312/" target="_blank_">
            <SiLinkedin className={styles.icon} />
          </a>
        </Col>
        <Col>
          <a href="https://leetcode.com/saicharan0312" target="_blank_">
            <SiLeetcode className={styles.icon}/> 
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<FaFileDownload className={styles.iconSmall} />}
            href="./resume.pdf"
          >
            Resume
          </ProfileButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileButton
            href="https://saicharan0312.github.io/portfolio2/#home"
          >
            Link to New Portfolio
          </ProfileButton>
        </Col>
      </Row>
      <hr
        style={{
        background: "#6F38C5",
        height: "5px",
        border: "none",
        }}
      />
      <div style={{ padding : "15px 65px", margin : "10px", border:"1px solid black" }}>
        <Skills />
      </div>
    </Container>
    </React.Fragment>
  );
};

export default Home;

// always search before uploading to github saicharan
// https://saicharan0312.github.io/portfolio2/#home
