import React, { useState, useEffect } from 'react';

import { CustomModal } from '../../../components/CustomModal';

import { Badge } from 'reactstrap';

const ContentDetails = ({ data, changeModalState }) => {

  const [details, setDetails] = useState({})

  useEffect(()=>{
    if(data && data.details){
      setDetails(data.details);
    }
  },[data])

  return(
    <CustomModal
      changeModalState={changeModalState}
      submitLabel="Ver Ahora"
      cancelLabel="Cerrar"
      width="60vw"
      heigth="300px">
      <div className='content--details'>
        {/*<img className='details--bg' src={data.imgBg}/>*/}
        <div className='details--info'>
          <div className='categories--details'>
            {details && details.categories && details.categories.length > 0 &&
              details.categories.map((it, i) => (<span key={i}><b>{it}</b></span>))}
          </div>
          <div>
            <Badge color="secondary">
              {details.year}
            </Badge>
            <Badge color="secondary">
              {details.duration}
            </Badge>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}

export default ContentDetails;