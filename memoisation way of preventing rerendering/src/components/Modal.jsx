import React from "react";

const Modal = ({ close }) => {
    return (
        <div className="modal">
            <h2>Modal</h2>
            <p>This is a modal</p>
            <button onClick={close}>Close</button>
        </div>
    );
};

export default Modal;
