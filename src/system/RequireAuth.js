import React from "react";
import { useQuery } from "@apollo/client";
import { Navigate, useLocation } from "react-router-dom";
import { CHECK_LOGIN } from "../GraphQL/Queries";
import { Loading } from "@nextui-org/react";

const RequireAuth = () => {
  const authed = localStorage.getItem("user_token");
  const location = useLocation();

  // * GraphQL
  const check_login = useQuery(CHECK_LOGIN, {
    variables: {
      token: authed,
    },
  });
  console.log(check_login)
  if (check_login.loading) {
    return (
      <h1 style={{marginTop: 400}}>Loading</h1>
    );
  } else {
    if (check_login.error) {
      return (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      );
    }
    if (check_login.data.currentUser.id) {
      localStorage.setItem("user-id", check_login.data.currentUser.id);
      if (check_login.data.currentUser.isVerified) {
        return <Navigate to="/" replace state={{ path: location.pathname }} />
      }
    }
  }
};

export default RequireAuth;
