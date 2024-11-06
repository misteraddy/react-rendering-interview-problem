import React, { useState } from "react";
import Modal from "./components/Modal";
import SlowComponent from "./components/SlowComponent";
import useModalDialog from "./hooks/useModalDialog";

const App = () => {

    const { isOpen , open , close} = useModalDialog();

    return (
        <div>
            <button onClick={open}>Open modal</button>
            {isOpen && <Modal close={close} />}
            <div>Something done here</div>
            <div>Something done here</div>
            <SlowComponent />
        </div>
    );
};

export default App;
