import React from "react";
import { Button, Modal } from "react-bootstrap";

/**
 * @name CustomModal
 * @description It's a function that takes in a bunch of props and returns a modal with a button that toggles the
 * modal
 * @param NodeReact children
 * @param string title
 * @param string textButton
 * @param boolean stateModal
 * @param function setStateModal
 * @returns A custom modal component that can be used to display a modal with a title, body, and close
 * button.
 */
const CustomModal = ({
  children,
  title = "",
  textButton = "+",
  stateModal = false,
  setStateModal,
}) => {
  const handleClose = () => setStateModal(false);
  const handleShow = () => setStateModal(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {textButton}
      </Button>

      <Modal
        show={stateModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
