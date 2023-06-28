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
  FallbackProfessionalHeadshot,
  ProfilePicture,
} from "../../assets";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container
      fluid
      className={styles.container}
      style={{ backgroundColor: "black"  }}
    >
      <Row>
        <ImageHolder
          primarySource={ProfilePicture}
          secondarySource={FallbackProfessionalHeadshot}
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
            {/* <img 
              src={Leetcode} 
              className={styles.icon} 
              style={{ 
                marginTop : "3px", 
                width : "35px",
                height : "33px",
                padding : "3px",
                backgroundColor : "white",
                borderRadius : "3px"
                styles={{ backgroundColor : "white" }} style={{color:"black"}}
              }}  
              alt="leetcode"
            /> */}
            <SiLeetcode className={styles.icon}/> 
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<FaFileDownload className={styles.iconSmall} />}
            href=""
          >
            Resume
          </ProfileButton>
        </Col>
      </Row>
      {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={CICSLogo} logoAlt="University of Massachusetts Amherst"> Undergraduate Course Assistant at Manning CICS </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Tech + Design Member at HackUMass Organizing Team </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Software Developer at HackUMass Organizing Team </ProfileCard>
            </Row> */}
    </Container>
  );
};

export default Home;

// always search before uploading to github saicharan
