import "./App.css";
import React, { useContext } from "react";
import Home from "./pages/home/Home";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Link,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";

import Login from "./pages/login/Login";
import { AuthContext } from "../src/context/authContext/AuthContext";
import NewMovie from "./pages/newProduct/NewMovie";

function App() {
	const { user } = useContext(AuthContext);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" elemment={<Root />}>
				<Route index element={<Home />} />
				<Route
					path="/login"
					element={!user ? <Login /> : <Navigate to="/" />}
				/>

				<Route path="/users" element={user && <UserList />} />
				<Route path="/user/:id" element={user && <User />} />
				<Route path="/newUser" element={user && <NewUser />} />
				<Route path="/movies" element={user && <MovieList />} />
				<Route path="/product/:productId" element={user && <Movie />} />
				<Route path="/newproduct" element={user && <NewMovie />} />
			</Route>
		)
	);

	return (
		<div className="container">
			<RouterProvider router={router} />
		</div>
	);
}
const Root = () => {
	return (
		<>
			<Link to="/">Home</Link>
		</>
	);
};

export default App;
