import React, { useState } from "react";
import Modal from "./components/Modal";
import SlowComponent from "./components/SlowComponent";
import RefactorComponent from "./components/RefactorComponent";

const App = () => {

  return (
    <div>
      <RefactorComponent>
        <div>Something done here</div>
        <div>Something done here</div>
        <SlowComponent />
      </RefactorComponent>
      
    </div>
  );
};

export default App;
