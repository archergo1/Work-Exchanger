import React from "react";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const Ab = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open the door!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Shut down</button>
        <div>I AM HERE</div>
      </Modal>
    </div>
  );
};

export default Ab;
