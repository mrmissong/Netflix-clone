import React,{useEffect, useState} from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton } from '@mui/material';
import axios from 'axios';
const Featured = ({type}) => {
    const [content, setContent]= useState({})
    useEffect(()=>{
        const getRandomContent= async()=>{
            try{
                const res= await axios.get(`http://localhost:8000/api/movies/random?type=${type}`,{
                    headers: {
                      token:
                      "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                  })
                setContent(res.data[0])
            }
            catch(error){
                console.log(error);
            }
            console.log(content)
        }
        getRandomContent()
    },[type])
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="anime">Anime</option>
                    <option value="documentaries">Documentaries</option>
                    <option value="thriller">Thriller</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="horror">Horror</option>
                    <option value="romantic">Romantic</option>
                    <option value="independent">Independent</option>
                    <option value="trending">Trending</option>
                    <option value="availablefordownload">Available For Download</option>
                </select>
            </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="description">{content.desc}</span>
            <div className="buttons">
                <button className="play">
                    <IconButton>
                        <PlayArrowIcon/>
                    </IconButton>
                    <span>Play</span>
                </button>
                <button className="more">
                <IconButton>
                        <InfoOutlinedIcon/>
                    </IconButton>
                    <span>Info</span>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Featured