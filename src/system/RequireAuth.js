import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Navigate, useLocation } from "react-router-dom";
import { VERIFY_TOKEN } from "../GraphQL/Mutations";
import { Loading } from "@nextui-org/react";

const RequireAuth = () => {
  const authed = localStorage.getItem("authToken") ? localStorage.getItem("authToken") : "1qw3s";
  const location = useLocation();

  // * GraphQL
  const check_login = useMutation(VERIFY_TOKEN, {
    variables: {
      token: authed,
    },
  });

  if (check_login.loading) {
    return (
      <h1 style={{marginTop: 400}}>Loading</h1>
    );
  } else {
    if (check_login.error) {
      return (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      );
    } else {
      return <Navigate to="/" replace state={{ path: location.pathname }} />
    }
  }
};

export default RequireAuth;
