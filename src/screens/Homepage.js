import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StockCard from "../components/BigContainers/StockCard";

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
      <StockCard />
    </React.Fragment>
  );
};

export default Homepage;
