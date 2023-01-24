import React from 'react'
import "./watch.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            Home
            <ArrowBackIcon/>
        </div>
        <video className='video' autoPlay progress controls src="https://www.veed.io/view/8d52e88b-a36a-4b1c-80f9-e7891be623c2?panel=share"></video>
    </div>
  )
}
export default Watch