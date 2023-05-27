import React, { useState } from "react";
import { CiSettings, CiMemoPad, CiRead, CiUndo } from "react-icons/ci";
import styles from "./Header.module.css";

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
              <li className={styles.liStyle}><CiMemoPad size={22} style={{ marginRight: 5 }} /> Archive</li>
              <li className={styles.liStyle}><CiRead size={22} style={{ marginRight: 5 }} /> God Mode</li>
              <li className={styles.liStyle}><CiUndo size={22} style={{ marginRight: 5 }} /> Log Out</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
