import React from "react";
import {
    SiMicrosoftoutlook
} from "react-icons/si";
// import { FaPhone } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div
            className={styles.container}
        >
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
            <SiMicrosoftoutlook className={styles.icon} />
            <p style={{color:"white", margin:"auto"}}>sa041328@ucf.edu</p>
            </div>
            {/* <div style={{display:"flex", flexDirection:"row"}}>
            <FaPhone className={styles.icon} />
            <p style={{color:"white",margin:"auto" }}>+1 321-300-5577</p> 
            </div> */}
        </div>
    );
};

export default Footer;