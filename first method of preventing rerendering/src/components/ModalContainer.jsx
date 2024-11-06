import React, { useState } from "react";
import Modal from "./Modal";

const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && <Modal close={() => setIsOpen(false)} />}
    </div>
  );
};

export default ModalContainer;
