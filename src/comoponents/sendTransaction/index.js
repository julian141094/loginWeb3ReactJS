import React, { useState, useEffect } from "react";
import Modal from "../basics/modal";
import { Form, Button } from "react-bootstrap";
import { hex } from "../../utils";
import useMetaMask from "../../hooks/metaMask";

const SendTransaction = () => {
  const [stateModal, setStateModal] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { account, balance, sendTransaction } = useMetaMask();
  const initalStateForm = {
    from: account[0],
    to: "",
    gas: "",
    gasPrice: "0x9184e72a000", // 10000000000000
    value: "",
  };
  const [transactionData, setTransactionData] = useState({
    ...initalStateForm,
  });

  useEffect(() => {
    if (
      false

      // transactionData.value > balance ||
      // transactionData.value === "0" //||
      // transactionData.gas > balance - Number(transactionData.value) ||
      // transactionData.gas === "0"
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [transactionData]);

  useEffect(() => {
    if (!stateModal) {
      setTransactionData({
        ...initalStateForm,
      });
    }
  }, [stateModal]);

  const submiting = async () => {
    try {
      console.log("lo que se envia =>", transactionData);
      if (
        transactionData.to !== "" &&
        transactionData.gas !== "" &&
        transactionData.value !== ""
      ) {
        const txRef = await sendTransaction({
          ...transactionData,
          from: account[0],
          value: `${hex(parseFloat(transactionData.value))}`,
          gas: `${hex(parseFloat(transactionData.gas))}`,
          // value: "0x29a2241af62c0000",
          // gas: "0x2710",
        });
        setStateModal(false);
      }
    } catch (error) {
      console.log("Error submiting => ", error);
    }
  };

  const handleInputChange = (e) => {
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal
        title="Send Transactions"
        stateModal={stateModal}
        setStateModal={setStateModal}
      >
        <Form>
          <Form.Group className="mb-3" controlId="to">
            <Form.Label>To:</Form.Label>
            <Form.Control
              name="to"
              type="text"
              placeholder=""
              onChange={handleInputChange}
              value={transactionData.to}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="value">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              name="value"
              type="text"
              placeholder=""
              onChange={handleInputChange}
              value={transactionData.value}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="gas">
            <Form.Label>Gas:</Form.Label>
            <Form.Control
              name="gas"
              type="text"
              placeholder=""
              onChange={handleInputChange}
              value={transactionData.gas}
            />
          </Form.Group>
          <Button
            disabled={disableSubmit}
            variant="primary"
            onClick={() => submiting()}
          >
            Send
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default SendTransaction;
