import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getHomeCarousel } from "../../../storeReducer/actions";

import CustomCarousel from "../../../components/CustomCarousel";
import CardCategories from "../../../components/CardCategories";

const Home = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);

  const [carouselItems, setCarouselItems] = useState([])

  console.log("test: ", data, carouselItems)


  useEffect(()=>{
    if (!data.carouselRequested){
      dispatch(getHomeCarousel());
    }
  })

  useEffect(()=>{
    if (data && data.carouselContent && data.carouselContent.length > 0){
      setCarouselItems(data.carouselContent)
    }
  }, [data.carouselContent])

  return (
    <div className="custom--view home--view">
      <CustomCarousel items={carouselItems}/>
      <div className="container">
        <CardCategories />
      </div>
    </div>
  )
}

export default Home;