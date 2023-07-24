import React from 'react';
import skillsData from "../../data/skills.json";
import "./Skills.css"
import SkillsCard from '../../components/SkillsCard/SkillsCard';
// import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaJava, FaPython } from "react-icons/fa";
// import { 
//   SiNestjs, 
//   SiMysql, 
//   SiMongodb, 
//   SiExpress, 
//   SiNodedotjs, 
//   SiNodemon, 
//   SiDjango,
//   SiLivechat,
//   SiSqlite,
//   SiVisualstudio,
//   SiPycharm,
//   SiNextdotjs,

//   SiC,
//   SiCplusplus,
//   SiJavascript,
//   SiPython,
// } from "react-icons/si";
// import styles from "./Skills.module.css";

// const icons = {
//     React: <FaReact className={styles.icon} style={{ color: "#61DAFB" }} />,
//     CSS: <FaCss3Alt className={styles.icon} style={{ color: "#1572B6" }} />,
//     HTML: <FaHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
//     Bootstrap: (
//         <FaBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
//     ),
//     NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
//     MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
//     Mongodb: <SiMongodb className={styles.icon} style={{ color: "#41b035" }} />,
//     Java : <FaJava className={styles.icon} style={{color:"red"}} />,
//     Express : <SiExpress className={styles.icon} style={{color:"red"}}/>,
//     Nodejs : <SiNodedotjs className={styles.icon} style={{color:"#41b035"}}/>,
//     Nodemon : <SiNodemon className={styles.icon} style={{color:"#41b035"}}/>,
//     Cplusplus : <SiCplusplus className={styles.icon} style={{color:"blue"}}/>,
//     Python : <FaPython className={styles.icon} style={{color:"yellow"}} />,
//     Django : <SiDjango className={styles.icon} style={{color:"black"}}/>,
//     Livechat : <SiLivechat className={styles.icon} style={{color:"green"}}/>,
//     Pycharm: <SiPycharm className={styles.icon} style={{color:"blue"}} />,
//     Visualstudio : <SiVisualstudio className={styles.icon} style={{color:"blue"}}/>,
//     Sqlite : <SiSqlite className={styles.icon} style={{color:"blue"}}/>,
//     SiNextdotjs : <SiNextdotjs className={styles.icon} style={{color:"#E0234E"}}/>
// };

// const programmingLanguagesIcons = {
//     C : <SiC className={styles.icon} style={{color:"#A8B9CC"}}/>,
//     Cplusplus : <SiCplusplus className={styles.icon} style={{color:"#00599C"}}/>,
//     Java : <FaJava className={styles.icon} style={{color:"red" }} />,
//     JavaScript : <SiJavascript className={styles.icon}  style={{ color : "#F7DF1E" }}/>,
//     Python : <SiPython className={styles.icon}  style={{ color : "#3776AB" }} />

// }

// const skillsList = [
//     {
//         label : "C",
//         src : "https://img.icons8.com/?size=512&id=40670&format=png",
//     },
//     {
//         label : "C++",
//         src : "https://img.icons8.com/?size=512&id=40669&format=png",
//     },
//     {
//         label : "Java",
//         src : "https://img.icons8.com/?size=512&id=13679&format=png",
//     },
//     {
//         label : "C Sharp",
//         src : "https://img.icons8.com/?size=512&id=55251&format=png",
//     },
//     {
//         label : "Python",
//         src: 'https://img.icons8.com/?size=512&id=13441&format=png',
//     }, 
//     {
//         label: 'Javascript',
//         src: 'https://img.icons8.com/color/144/000000/javascript.png',
//     }, 
//     {
//         label: 'Typescript',
//         src: 'https://img.icons8.com/color/144/000000/typescript.png',
//     }, 
//     {
//         label: 'HTML5',
//         src: 'https://img.icons8.com/color/144/000000/html-5--v1.png'
//     },
//     {
//         label: 'CSS3',
//         src: 'https://img.icons8.com/color/144/000000/css3.png'
//     }, 
//     {
//         label: 'Node JS',
//         src: 'https://img.icons8.com/color/144/000000/nodejs.png',
//     }, 
//     {
//         label: 'React',
//         src: 'https://img.icons8.com/color/144/000000/react-native.png',
//     }, 
//     {
//         label: 'Express JS',
//         src: 'https://i.ibb.co/9smDM6j/pngegg.png'
//     }, 
//     {
//         label: 'Mongo dB',
//         src: 'https://i.ibb.co/ZVh01dm/rsz-mong2.png'
//     }, 
//     {
//         label: 'React Native',
//         src: 'https://i.ibb.co/7NfB2rt/rn2.png',
//     }, 
//     {
//         label: 'Redux',
//         src: 'https://img.icons8.com/color/144/000000/redux.png',
//     }, 
//     {
//         label: 'Spring boot',
//         src: 'https://i.ibb.co/YNRnftP/pngfind-com-spring-png-535670-1.png'
//     }, 
//     {
//         label: 'NPM',
//         src: 'https://img.icons8.com/color/144/000000/npm.png'
//     }, 
//     {
//         label: 'Yarn',
//         src: 'https://i.ibb.co/GtbG98V/yarn2.png'
//     }, 
//     {
//         label: 'Material UI',
//         src: 'https://img.icons8.com/color/144/000000/material-ui.png'
//     }, 
//     {
//         label: 'Bootstrap',
//         src: 'https://i.ibb.co/zx0Tt9M/bootstrap.png'
//     }, 
//     {
//         label: 'Sass',
//         src: 'https://i.ibb.co/zs6B3yR/sass.png'
//     }, 
// ];

// const techStack = ["React", "CSS", "HTML", "Bootstrap", "NestJS", "MySQL", "Mongodb", "SiNextdotjs"];
// const programmingLanguages = ["C" , "Cplusplus", "Java", "JavaScript", "Python"]

const Skills = () => {
    return (
        <div>
          {skillsData.map((obj, index) => (
            <SkillsCard
              key={index}
              name={obj.name}
              list={obj.list}
            />
          ))}
        </div>
    )
//   return(
//     <>
//         <Row>
//             {skillsList.map(s => (
//                 <Col>
                    
//                         <IconCard key={s.label} src={s.src} />
                    
//                 </Col>
//             ))}
//         </Row> 
//     </>
//   )
};

export default Skills;