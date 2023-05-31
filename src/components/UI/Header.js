import React, { useState } from "react";
import { CiSettings, CiMemoPad, CiRead, CiUndo } from "react-icons/ci";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  const showOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h3 style={{ marginLeft: 30 }}>CyberBar</h3>
          <button
            className={styles.settingsButton}
            style={{
              marginRight: 30,
              display: "flex",
              justifyItems: "space-between",
              alignItems: "center",
            }}
            onClick={showOptionsHandler}
          >
            <CiSettings size={18} style={{ marginRight: 5 }} /> Options
          </button>
        </div>
      </div>
      {showOptions && (
        <div className={styles.optionsContainer}>
          <div className={styles.optionsListContainer}>
            <ul style={{ listStyleType: "none" }}>
              <Link to="archive/" style={{ textDecoration: "none" }} onClick={showOptionsHandler}>
                <li className={styles.liStyle}>
                  <CiMemoPad size={22} style={{ marginRight: 5 }} /> Archive <i style={{marginLeft: 20}}>Coming Soon</i>
                </li>
              </Link>
              <Link to="12sdc349kcj9iqpnmxi9w30cmv32/" style={{ textDecoration: "none" }} onClick={showOptionsHandler}>
                <li className={styles.liStyle} disabled>
                  <CiRead size={22} style={{ marginRight: 5 }} /> God Mode  <i style={{marginLeft: 20}}>Coming Soon</i>
                </li>
              </Link>
                <li className={styles.liStyle} onClick={showOptionsHandler}>
                  <CiUndo size={22} color="#FF5335" style={{ marginRight: 5 }} /> <span style={{color: "#FF5335"}}>Log Out</span>
                </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
