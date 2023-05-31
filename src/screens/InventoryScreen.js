import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./InventoryScreen.module.css";
import InventoryCollapse from "../components/BigContainers/InventoryCollapse";

const InventoryScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname]);
  return (
    <div style={{marginBottom: 200}}>
      <InventoryCollapse />
    </div>
  );
};

export default InventoryScreen;
