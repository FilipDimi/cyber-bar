import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./MenuScreen.module.css";

const MenuScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname]);
  return (
    <div>
      <h1>Menu</h1>
      <h3>Coming Soon 🤩</h3>
    </div>
  );
};

export default MenuScreen;
