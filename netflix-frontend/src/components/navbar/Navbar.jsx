import "./navbar.scss"
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <IconButton>
            <SearchIcon/>
          </IconButton> 
          <span>KID</span>
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