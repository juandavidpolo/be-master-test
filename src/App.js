import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import Login from './views/login';
import LayoutViews from './views/layoutViews';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LayoutViews />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
