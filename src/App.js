import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <div className="">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
