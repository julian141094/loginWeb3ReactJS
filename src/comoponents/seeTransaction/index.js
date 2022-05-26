import React, { useState } from "react";
import Modal from "../basics/modal";
import { Container, Row, Col } from "react-bootstrap";

/**
 * @name SeeTransaction
 * @description It's a modal that displays the transaction details
 * @param {*} item
 * @returns A modal with the transaction details.
 */
const SeeTransaction = ({ item }) => {
  const [stateModal, setStateModal] = useState(false);
  return (
    <>
      <Modal
        title="View Transaction Details"
        stateModal={stateModal}
        setStateModal={setStateModal}
      >
        <Container>
          <Row className="rowContainer">
            <Col xs={12}>Hash:</Col>
            <Col xs={12}>
              <span className="textSmall">{item.hash}</span>
            </Col>
          </Row>
          <Row className="rowContainer">
            <Col xs={12}>From:</Col>
            <Col xs={12}>
              <span className="textSmall">{item.from}</span>
            </Col>
          </Row>
          <Row className="rowContainer">
            <Col xs={12}>To:</Col>
            <Col xs={12}>
              <span className="textSmall">{item.to}</span>
            </Col>
          </Row>
          <Row className="rowContainer">
            <Col xs={12}>Value:</Col>
            <Col xs={12}>
              <span className="textSmall">{item.value}</span>
            </Col>
          </Row>
          <Row className="rowContainer">
            <Col xs={12}>Gas:</Col>
            <Col xs={12}>
              <span className="textSmall">{item.gas}</span>
            </Col>
          </Row>
          <Row className="rowContainer">
            <Col xs={12}>BlockHash:</Col>
            <Col xs={12}>
              <span className="textSmall">{item.blockHash}</span>
            </Col>
          </Row>
          <Row className="rowContainer">
            <Col xs={12}>BlockNumber:</Col>
            <Col xs={12}>
              <span className="textSmall">{item.blockNumber}</span>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default SeeTransaction;
