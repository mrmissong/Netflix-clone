import React from 'react'
import "./watch.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Watch = () => {
  const location = useLocation()
  const movie = location.movie;
  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
            Home
            <ArrowBackIcon/>
        </div>
        </Link>
        <video className='video' autoPlay progress controls src={movie.video}></video>
    </div>
  )
}
export default Watch