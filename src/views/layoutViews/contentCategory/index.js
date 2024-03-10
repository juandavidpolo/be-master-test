import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getContentCategory } from '../../../storeReducer/actions';

const ContentCategory = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.contentCategory);
  const params = useParams();

  const [isVideoEnd, setVideoEnd] = useState(false)

  useEffect(() => {
    if (!data.loadedFirstTime){
      dispatch(getContentCategory(params.name))
    }
  }, [])

  function handleVideoEnd(){
    setVideoEnd(true)
  }

  return (
    <div className="custom--view content--view">
      <div className="main--bg">
        <div>
          <img className={isVideoEnd ? "image--bg active" : "image--bg"} src={data.imgBg} alt={data.name} />
          <video className={isVideoEnd ? "video--bg" : "video--bg active"}
            onEnded={ev => { handleVideoEnd() }}
            width="100%"
            height="auto"
            loop={false}
            autoPlay={true}
            muted={true}
            playsInline={true}>
            <source src={data.vidBg} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="main--content">
      </div>
    </div>
  )
}

export default ContentCategory;