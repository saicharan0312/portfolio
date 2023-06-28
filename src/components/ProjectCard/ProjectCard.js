import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaJava, FaPython } from "react-icons/fa";
import { 
  SiNestjs, 
  SiMysql, 
  SiMongodb, 
  SiExpress, 
  SiNodedotjs, 
  SiNodemon, 
  SiCplusplus,
  SiDjango,
  SiLivechat,
  SiSqlite,
  SiVisualstudio,
  SiPycharm,
} from "react-icons/si";
import styles from "./ProjectCard.module.css";

const assets = {
  "Perpetual Crusades": (
    <ImageHolder
      primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.FallbackPerpetualCrusades}
      alt="Perpetual Crusades"
      className="card-img"
    />
  ),
  "Project URefer": (
    <ImageHolder
      primarySource={Asset.ProjectURefer}
      secondarySource={Asset.FallbackProjectURefer}
      alt="Project URefer"
      className="card-img"
    />
  ),
  "HackUMass Website": (
    <ImageHolder
      primarySource={Asset.HackUMassWebsite}
      secondarySource={Asset.FallbackHackUMassWebsite}
      alt="HackUMass Website"
      className="card-img"
    />
  ),
};

const icons = {
  React: <FaReact className={styles.icon} style={{ color: "#61DAFB" }} />,
  CSS: <FaCss3Alt className={styles.icon} style={{ color: "#1572B6" }} />,
  HTML: <FaHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  Bootstrap: (
    <FaBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
  ),
  NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
  Mongodb: <SiMongodb className={styles.icon} style={{ color: "#41b035" }} />,
  Java : <FaJava className={styles.icon} style={{color:"red"}} />,
  Express : <SiExpress className={styles.icon} style={{color:"red"}}/>,
  Nodejs : <SiNodedotjs className={styles.icon} style={{color:"#41b035"}}/>,
  Nodemon : <SiNodemon className={styles.icon} style={{color:"#41b035"}}/>,
  Cplusplus : <SiCplusplus className={styles.icon} style={{color:"blue"}}/>,
  Python : <FaPython className={styles.icon} style={{color:"yellow"}} />,
  Django : <SiDjango className={styles.icon} style={{color:"black"}}/>,
  Livechat : <SiLivechat className={styles.icon} style={{color:"green"}}/>,
  Pycharm: <SiPycharm className={styles.icon} style={{color:"blue"}} />,
  Visualstudio : <SiVisualstudio className={styles.icon} style={{color:"blue"}}/>,
  Sqlite : <SiSqlite className={styles.icon} style={{color:"blue"}}/>
};

const ProjectCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);
  return (
    <Card className={styles.container}>
      {assets[props.title]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack.map((tech, index) => icons[tech])}
        </Card.Text>
        <Card.Text>{props.content}</Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant="primary"
            href={props.liveUrl}
            target="_blank"
          >
            View Live
          </Button>
        ) : null}
        {props.gitHubUrl ? (
          <Button
            className={styles.button}
            variant="dark"
            href={props.gitHubUrl}
            target="_blank"
          >
            View on GitHub
          </Button>
        ) : null}
        {props.description ? (
          <React.Fragment>
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              View Description
            </Button>
            <Modal
              centered
              size="lg"
              show={modalDisplay}
              onHide={handleModalClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>{props.organization}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ textAlign: "center" }}>
                  <h4>{props.title}</h4>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h5>{props.duration}</h5>
                </div>
                <ul>
                  {props.description.map((elem) => (
                    <li>{elem}</li>
                  ))}
                </ul>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
