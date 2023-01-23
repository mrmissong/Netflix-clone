import "./navbar.scss"
import React,{useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  const [isScrolled, setIsScrolled]=useState(false)
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return ()=> (window.onscroll === null)
  }
  return (
    <div className= {isScrolled ? "navbar scrolled" :"navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          <span>Home</span>
          <span>TvShows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <IconButton>
            <SearchIcon/>
          </IconButton> 
          <span>KIDS</span>
          <IconButton>
            <NotificationsIcon/>
          </IconButton> 
          <img src="https://i.imgur.com/eBs9rma.jpg" alt="" />
          <div className="profile">
          <IconButton>
            <ArrowDropDownIcon/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </IconButton>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Navbar;