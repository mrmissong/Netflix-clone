import React,{useState,useEffect} from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { IconButton } from '@mui/material';
import axios from 'axios';
import {Link} from "react-router-dom"

const ListItem = ({index,item}) => {
  const [isHovered, setIsHovered]=useState(false);
  const[movie, setMovie]= useState({})
  useEffect(() => {
    const getMovie = async()=>{
      try{
        const res= await axios.get("https://netflix-clone-backend-3de4.onrender.com/api/movies/find/"+item,{
          headers: {
            token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        })
        setMovie(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getMovie()
  }, [item]);
 
  return (
    <Link to={{ pathname: `/watch`, movie: movie }}>
    <div className='listItem'
    style={{left:isHovered && index* 225 -50 + index *2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>

      {movie && <img src={movie.img} alt="" />}
      {isHovered && (
      <>
      {movie &&<video src={movie.trailer} autoPlay={true} loop></video>}
      <div className="itemInfo">
        <div className='icons'>
        <IconButton>
          <PlayArrowIcon/>
        </IconButton>
        <IconButton> 
         <AddOutlinedIcon/>
        </IconButton>
        <IconButton>
         <ThumbUpAltOutlinedIcon/>
        </IconButton>
        <IconButton>
         <ThumbDownOutlinedIcon/>
        </IconButton>    
        </div>
        <div className="itemInfoTop">
          {movie && <span>{movie.duration} </span>}
          {movie && <span className='limit'> +U/A{movie.limit} </span>}
          {movie && <span> {movie.year} </span>}
        </div>
        {movie && <div className="description">
          {movie.desc}
        </div>}
        {movie && <div className="genre">{movie.genre}</div>}
      </div> 
      </>
      
      )}

    </div>
    </Link>
  )
}

export default ListItem