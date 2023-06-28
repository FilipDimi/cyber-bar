import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StockCard from "../components/BigContainers/StockCard";
import RequireAuth from "../system/RequireAuth";

const Homepage = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname, props]);

  return (
    <React.Fragment>
      <StockCard />
    </React.Fragment>
  );
};

export default Homepage;
