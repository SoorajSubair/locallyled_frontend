import React, { useState, useEffect } from 'react'
import './DestinationVideo.css'
import { baseUrl} from '../../../Utils/Urls'
import { useDestination } from '../../../Context/DestinationContext'

function DestinationVideo() {
  
  const destination = useDestination();

  return (
    <>
    <div className="video-main-container">
    <div className='video-container'>
        <div className="video-overlay"></div>
            <img src={`${baseUrl}${destination?.image}`} alt={destination?.name} style={{height:"100%",width:"100%",objectFit:"cover"}}/>
        <div className="content">
            <h1 className='video-heading'>{destination?.name}</h1>
            <p className='video-para'>{destination?.country}</p>
    </div>
</div>
</div>
</>
  )
}

export default DestinationVideo
