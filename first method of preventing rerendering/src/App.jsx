import React, { useState } from "react";
import Modal from "./components/Modal";
import SlowComponent from "./components/SlowComponent";
import ModalContainer from "./components/ModalContainer";

const App = () => {

    return (
        <div>
            
            <div>Something done here</div>
            <div>Something done here</div>
            <ModalContainer/>
            <SlowComponent />
        </div>
    );
};

export default App;
