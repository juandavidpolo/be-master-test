import React from "react";
import { Routes, Route } from 'react-router-dom';

import Layout from "./utils/layout";

import Home from "./home";

const LayoutViews = () => {
  return(
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Layout>
  )
}

export default LayoutViews;