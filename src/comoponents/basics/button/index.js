import React from "react";
import { Button } from "react-bootstrap";
import useMetaMask from "../../../hooks/metaMask";

const LoginButton = () => {
  const { connect, isActive } = useMetaMask();
  return (
    <>
      <Button variant="warning" onClick={!isActive ? () => connect() : null}>
        Login
      </Button>
    </>
  );
};

export default LoginButton;
