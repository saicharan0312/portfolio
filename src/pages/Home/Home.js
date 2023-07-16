import React from "react";
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
  return (
    <React.Fragment>
    <Container
      fluid
      className={styles.container}
      style={{ backgroundColor: "black"  }}
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
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            Full Stack Developer, Software Engineer, Student
          </span>
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
      <div style={{ padding : "15px 65px", margin : "10px" }}>
        <Skills />
      </div>
    </Container>
    </React.Fragment>
  );
};

export default Home;

// always search before uploading to github saicharan
