import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./CheckInScreen.module.css";
import RequireAuth from "../system/RequireAuth";

const CheckInScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname, props]);
  return (
    <div style={{ marginLeft: 50 }}>
      <RequireAuth />
      <h1>CheckIn</h1>
      <h3>Coming Soon 🤩</h3>
    </div>
  );
};

export default CheckInScreen;
