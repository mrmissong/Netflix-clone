import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Link,
	RouterProvider,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import axios from "axios";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" elemment={<Root />}>
				<Route index element={<Home />} />
				<Route path="/users" element={<UserList />} />
				<Route path="/user/:id" element={<User />} />
				<Route path="/newUser" element={<NewUser />} />
				<Route path="/movies" element={<MovieList />} />
				<Route path="/product/:productId" element={<Product />} />
				<Route path="/newproduct" element={<NewProduct />} />
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
