import React, { useState } from "react";
import Modal from "./components/Modal";
import SlowComponent from "./components/SlowComponent";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open modal</button>
            {isOpen && <Modal close={() => setIsOpen(false)} />}
            <div>Something done here</div>
            <div>Something done here</div>
            <SlowComponent />
        </div>
    );
};

export default App;
