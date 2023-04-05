import React,{useEffect} from 'react';
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider, Navigate} from "react-router-dom"


const App = () => {
    const user= localStorage.getItem("user")
    console.log(user)
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" elemment={<Root/>}>
                <Route index element={user ? <Home/> : <Navigate to="/login"/>}/>  
                <Route path="/movies" element={user && <Home type="movies"/>}/>
                <Route path="/series" element={user &&<Home type="series"/>}/>
                <Route path="/watch" element={user &&<Watch/>}/>
                <Route path='/register' element={!user?<Register/> :<Navigate to="/"/> }/>
                <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>        
            </Route>
        )
    )
    
  return (
    <RouterProvider router={router}/>
  )
}

const Root =()=>{
    return(
        <>
        <Link to="/">Home</Link>
        </>
    )
}
export default App