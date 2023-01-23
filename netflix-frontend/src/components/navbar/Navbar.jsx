import "./navbar.scss"
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

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
          <Icon>
          <SearchIcon/>

          </Icon>
        </div>
      </div>
    </div>
  )
}

export default Navbar;