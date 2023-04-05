import { useState } from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const login=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/api/auth/login",{email,password})
    .then(data=>{
      console.log(data.data)
      localStorage.setItem("user", data.data)
      navigate("/")
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={login}>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
          <button type="submit" className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}