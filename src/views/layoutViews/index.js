import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getUser } from "../../utils/complements";

import Layout from "./utils/layout";

import Home from "./home";
import ContentCategory from "./contentCategory";

const LayoutViews = () => {

  const user = getUser();
  const navigate = useNavigate();

  useEffect(()=>{
    if (user === null || user === undefined) {
      navigate("/login")
    }
  },[user])


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