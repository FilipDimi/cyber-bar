import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./InventoryScreen.module.css";
import InventoryCollapse from "../components/BigContainers/InventoryCollapse";
import RequireAuth from "../system/RequireAuth";

const InventoryScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname, props]);

  return (
    <div style={{marginBottom: 200}}>
      <RequireAuth />
      <InventoryCollapse />
    </div>
  );
};

export default InventoryScreen;
