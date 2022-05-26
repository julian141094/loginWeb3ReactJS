import React from "react";
import { Card } from "react-bootstrap";
import LoginButton from "../../comoponents/basics/button";
// import Logo from "../basics/logo";
// import Fox from "../basics/logo/fox";
import useMetaMask from "../../hooks/metaMask";

const Auth = () => {
  const { isActive } = useMetaMask();
  return !isActive ? (
    <Card style={{ width: "18rem" }} className="rounded">
      <Card.Body>
        <Card.Title>Please LogIn with MetaMask</Card.Title>
        <div className="logoContainer centerContent">
          <img
            src="images/metamask.svg"
            alt="MetaMask"
            width="200"
            height="200"
          />
        </div>
        {/* <Logo /> */}
        {/* <Fox /> */}
        <div className="loginButtonContainer">
          <LoginButton />
        </div>
      </Card.Body>
    </Card>
  ) : null;
};

export default Auth;
