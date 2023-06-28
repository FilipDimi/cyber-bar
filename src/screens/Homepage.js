import React, { useRef, useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { VERIFY_TOKEN } from "../GraphQL/Mutations";
import StockCard from "../components/BigContainers/StockCard";
import RequireAuth from "../system/RequireAuth";

const Homepage = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();
  const [checkLogin] = useMutation(VERIFY_TOKEN);
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;

    checkLogin({
      variables: { token: localStorage.getItem("authToken") },
    })
      .then((res) => {
        setLogged(true);
        console.log(res)
      })
      .catch((err) => {
        setLogged(false);
        console.log(err)
      });
  }, [location.pathname, props]);
  
  if (logged === false) {
    return <Navigate to="/login" replace />
  } else {
    return (
      <React.Fragment>
        <StockCard />
      </React.Fragment>
    )
  }
};

export default Homepage;
