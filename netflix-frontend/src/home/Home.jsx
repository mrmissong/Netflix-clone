import React from 'react'
import "./home.scss"
import Navbar from "../components/navbar/Navbar"
const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <img width="100%" src="https://i.imgur.com/dX30jyv.jpg" alt="" />
    </div>
  )
}

export default Home