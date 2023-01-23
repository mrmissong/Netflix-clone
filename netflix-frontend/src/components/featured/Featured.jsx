import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton } from '@mui/material';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
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
        <img src="https://i.imgur.com/dX30jyv.jpg" alt="" />
        <div className="info">
            <img src="https://i.imgur.com/m6MD35x.png" alt="" />
            <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis voluptate asperiores voluptatibus incidunt et unde. Voluptate inventore ut, obcaecati harum sapiente libero hic voluptatem veritatis illo rem, maiores repellat.</span>
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