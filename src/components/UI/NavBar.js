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

const CustomNavLink = (props) => {
  return (
    <Link to={props.link} className={styles.linkContainer}>
      {props.activeLink === props.compareLink ? (
        <div className={styles.navBarTabVContainer}>
          {props.activeIcon}
          <span style={{ color: "#FF5335", fontSize: 14 }}>{props.name}</span>
        </div>
      ) : (
        <div className={styles.navBarTabVContainer}>
          {props.inactiveIcon}
          <span style={{ color: "#DFE0D4", fontSize: 14 }}>{props.name}</span>
        </div>
      )}
    </Link>
  );
};

const NavBar = (props) => {
  console.log(props.activePage);
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.mainHContainer}>
          {/* Home */}
          <CustomNavLink
            link="/"
            compareLink="/"
            name="Home"
            activeLink={props.activePage}
            activeIcon={<CiHome size={26} color="#FF5335" />}
            inactiveIcon={<CiHome size={26} color="#DFE0D4" />}
          />
          {/* Inventory */}
          <CustomNavLink
            link="inventory/"
            compareLink="/inventory/"
            name="Inventory"
            activeLink={props.activePage}
            activeIcon={<CiBeerMugFull size={26} color="#FF5335" />}
            inactiveIcon={<CiBeerMugFull size={26} color="#DFE0D4" />}
          />
          {/* Bar */}
          <CustomNavLink
            link="bar/"
            compareLink="/bar/"
            name="Bar"
            activeLink={props.activePage}
            activeIcon={<CiBeaker1 size={26} color="#FF5335" />}
            inactiveIcon={<CiBeaker1 size={26} color="#DFE0D4" />}
          />
          {/* CheckIn */}
          <CustomNavLink
            link="discussion/"
            compareLink="/discussion/"
            name="Discussion"
            activeLink={props.activePage}
            activeIcon={<CiChat1 size={26} color="#FF5335" />}
            inactiveIcon={<CiChat1 size={26} color="#DFE0D4" />}
          />
          {/* Bar */}
          <CustomNavLink
            link="checkin/"
            compareLink="/checkin/"
            name="Checkin"
            activeLink={props.activePage}
            activeIcon={<CiBoxes size={26} color="#FF5335" />}
            inactiveIcon={<CiBoxes size={26} color="#DFE0D4" />}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
