import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Auth from "../../comoponents/auth";
import List from "../../comoponents/transactions";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="ColPrimary centerContent">
          <Auth />
          <List />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
