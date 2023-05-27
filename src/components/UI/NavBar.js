import React from "react";
import { Link } from "react-router-dom";
import {
  CiHome,
  CiBeerMugFull,
  CiBeaker1,
  CiChat1,
  CiBoxes,
} from "react-icons/ci";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.mainHContainer}>
          {/* Home */}
          <Link to="/" className={styles.linkContainer}>
            <div className={styles.navBarTabVContainer}>
              <CiHome size={26} color="#DFE0D4" />
              <span style={{ color: "#DFE0D4", fontSize: 14 }}>Home</span>
            </div>
          </Link>
          {/* Inventory */}
          <Link to="inventory/" className={styles.linkContainer}>
            <div className={styles.navBarTabVContainer}>
              <CiBeerMugFull size={26} color="#FF5335" />
              <span style={{ color: "#FF5335", fontSize: 14 }}>Inventory</span>
            </div>
          </Link>
          {/* Bar */}
          <Link to="bar/" className={styles.linkContainer}>
            <div className={styles.navBarTabVContainer}>
              <CiBeaker1 size={26} color="#DFE0D4" />
              <span style={{ color: "#DFE0D4", fontSize: 14 }}>Inventory</span>
            </div>
          </Link>
          {/* CheckIn */}
          <Link to="discussion/" className={styles.linkContainer}>
            <div className={styles.navBarTabVContainer}>
              <CiChat1 size={26} color="#DFE0D4" />
              <span style={{ color: "#DFE0D4", fontSize: 14 }}>Discussion</span>
            </div>
          </Link>
          {/* Bar */}
          <Link to="checkin/" className={styles.linkContainer}>
            <div className={styles.navBarTabVContainer}>
              <CiBoxes size={26} color="#DFE0D4" />
              <span style={{ color: "#DFE0D4", fontSize: 14 }}>CheckIn</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
