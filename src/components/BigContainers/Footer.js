import React from "react";

import styles from "./Footer.module.css";
import NavBar from "../UI/NavBar";

const Footer = (props) => {
  return (
    <NavBar activePage={props.actPage} />
  );
};

export default Footer;
