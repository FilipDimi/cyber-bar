import React, { useState, useEffect } from "react";
import { VERIFY_TOKEN } from "../../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

import styles from "./Footer.module.css";
import NavBar from "../UI/NavBar";

const Footer = (props) => {
  const [checkLogin] = useMutation(VERIFY_TOKEN);
  const [logged, setLogged] = useState(true);

  useEffect(() => {
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
  }, [logged]);

  if (logged) {
    return <NavBar activePage={props.actPage} />
  } else {
    return <span></span>
  }
};

export default Footer;
