import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';

import Login from './views/Login';
import Home from './views/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
