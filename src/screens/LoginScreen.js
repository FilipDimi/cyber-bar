import React, { useState } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "../GraphQL/Mutations";
import { USER_ID } from "../GraphQL/Queries";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";

import styles from "./LoginScreen.module.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginUser] = useMutation(LOGIN_USER);
  const [fetchUserId, setFetchUserId] = useState(null);
  const [getId, { loading, data }] = useLazyQuery(USER_ID);

  const onFinish = () => {
    loginUser({
      variables: { username: username, password: password },
    })
      .then((res) => {
        localStorage.setItem("authToken", res.data.tokenAuth.token);
        navigate("../", { replace: true });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const userLoginHandler = () => {
    onFinish();
    getId({variables: { username: username}});
  }

  if (data) {
    setFetchUserId(data.userId.id)
  }

  if (data && fetchUserId === null) {
    localStorage.setItem("userId", data.userId.id)
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.formContainer}>
        <span style={{ fontSize: 20, color: "#fff", marginBottom: 20 }}>
          Log In
        </span>
        <Input
          labelPlaceholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        <Input.Password
          labelPlaceholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <Button
          bordered
          color="warning"
          size="sm"
          onPress={userLoginHandler}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginScreen;
