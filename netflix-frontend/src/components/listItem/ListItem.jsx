import React,{useState} from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { IconButton } from '@mui/material';
const ListItem = ({index}) => {
  const [isHovered, setIsHovered]=useState(false)
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

 
  return (
    <div className='listItem'
    style={{left:isHovered && index* 225 -50 + index *2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>

      <img src="https://i.imgur.com/rGPmAJc.jpg" alt="" />
      {isHovered && (
      <>
      <video src={trailer} autoPlay={true} loop></video>
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
          <span>51:23 mins </span>
          <span className='limit'> U/A +16 </span>
          <span> 2017 </span>
        </div>
        <div className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </div>
        <div className="genre">Thriller/Sci-fi</div>
      </div> 
      </>

      )}

    </div>
  )
}

export default ListItem