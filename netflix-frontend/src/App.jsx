import React from 'react';
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider} from "react-router-dom"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" elemment={<Root/>}>
                <Route index element={<Home/>}/>
                    <Route path='/movies' element={<Home type="movies"/>}/>
                    <Route path='/series' element={<Home type="series"/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>            
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