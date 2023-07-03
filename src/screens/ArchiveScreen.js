import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ArchiveScreen.module.css";
import RequireAuth from "../system/RequireAuth";

const ArchiveScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    props.setCurPage("");
    firstRender.current = false;
  }, [location.pathname, props]);

  return (
    <div style={{ marginLeft: 50 }}>
      <RequireAuth />
      <h1>Archive</h1>
      <h3>Coming Soon 🤩</h3>
    </div>
  );
};

export default ArchiveScreen;
