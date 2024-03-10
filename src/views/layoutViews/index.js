import React from "react";
import { Routes, Route } from 'react-router-dom';

import Layout from "./utils/layout";

import Home from "./home";
import ContentCategory from "./contentCategory";

const LayoutViews = () => {
  return(
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/content/:name" element={<ContentCategory/>}/>
      </Routes>
    </Layout>
  )
}

export default LayoutViews;