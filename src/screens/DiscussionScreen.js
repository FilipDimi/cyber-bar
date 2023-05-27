import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./DiscussionScreen.module.css";

const DiscussionScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname]);
  return (
    <div>
      <h1>Discussion</h1>
    </div>
  );
};

export default DiscussionScreen;
