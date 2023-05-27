import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Homepage = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();
  console.log("HOME", String(location.pathname))

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname]);

  return (
    <React.Fragment>
      <h1 style={{ marginTop: 100 }}>Home</h1>
    </React.Fragment>
  );
};

export default Homepage;
