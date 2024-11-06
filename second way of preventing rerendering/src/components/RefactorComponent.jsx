import React, { useState } from "react";
import Modal from "./Modal";

const RefactorComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [x, setX] = useState(0);

  return (
    <>
      <button onClick={() => setX(x + 1)}>Increment</button>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && <Modal close={() => setIsOpen(false)} />}
      {children}
      {x}
    </>
  );
};

export default RefactorComponent;
