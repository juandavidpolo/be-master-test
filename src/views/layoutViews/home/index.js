import React, {useState} from "react";

import CustomCarousel from "../../../components/CustomCarousel";
import ContentCategories from "../../../components/ContentCategories";

const Home = () => {

  return (
    <div className="custom--view home--view">
      <CustomCarousel />
      <div className="container">
        <ContentCategories/>
      </div>
    </div>
  )
}

export default Home;