import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getContentCategory } from '../../../storeReducer/actions';

import { Alert } from "reactstrap";

import ContentDetails from "./contentDetails";

const ContentCategory = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.contentCategory);
  const params = useParams();

  const [isVideoEnd, setVideoEnd] = useState(false);
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({})

  useEffect(() => {
    if (data.name !== params.name){
      dispatch(getContentCategory(params.name))
    }
  }, [data.name])

  function handleVideoEnd(){
    setVideoEnd(true)
  }

  function seeDetails(){
    setDetailsOpen(true)
  }

  return (
    <>
      <div className="custom--view content--view">
        <div className="main--bg">
          <div>
            <img className={isVideoEnd ? "image--bg active" : "image--bg"} src={data.imgBg} alt={data.name} />
            {
              data.isPending === false &&
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
            }
          </div>
        </div>
        <div className="main--content">
          {data && data.movies &&
            <div className="content--movies">
              <div>
                <h4>Peliculas</h4>
              </div>
              <div>
                {data && data.movies && data.movies.length > 0 && data.movies.map((it, i) => {
                  return (
                    <div className="movie--card" key={i} onClick={ev => { seeDetails(); setItemSelected(it) }}>
                      <img src={it.imgBg} alt={it.name} />
                    </div>
                  )
                })}
                {data && data.movies && data.movies.length === 0 &&
                  <Alert color="warning" className="custom--alerts">
                    Lo sentimos no hay nada para ver por ahora
                  </Alert>
                }
              </div>
            </div>
          }
          { data && data.series &&
            <div className="content--series">
              <div>
                <h4>Series</h4>
              </div>
              <div>
                {data && data.series && data.series.length > 0 && data.series.map((it, i) => {
                  return (
                    <div className="movie--card" key={i} onClick={ev => { seeDetails(); setItemSelected(it) }}>
                      <img src={it.imgBg} alt={it.name} />
                    </div>
                  )
                })}
                {data && data.series && data.series.length === 0 &&
                  <Alert color="warning" className="custom--alerts">
                    Lo sentimos no hay nada para ver por ahora
                  </Alert>
                }
              </div>
            </div>
          }
          {data && data.documentaries &&
            <div className="content--documentaries">
              <div>
                <h4>Documentales</h4>
              </div>
              <div>
                {data && data.documentaries && data.documentaries.length > 0 && data.documentaries.map((it, i) => {
                  return (
                    <div className="movie--card" key={i} onClick={ev => { seeDetails(); setItemSelected(it) }}>
                      <img src={it.imgBg} alt={it.name} />
                    </div>
                  )
                })}
                {data && data.documentaries && data.documentaries.length === 0 &&
                  <Alert color="warning" className="custom--alerts">
                    Lo sentimos no hay nada para ver por ahora
                  </Alert>
                }
              </div>
            </div>
          }
        </div>
      </div>
      {isDetailsOpen && isDetailsOpen === true &&
        <ContentDetails
          data={itemSelected}
          changeModalState={ev => (setDetailsOpen(false))}/>
      }
    </>
  )
}

export default ContentCategory;