import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Manage_user from "./Pages/Manage_user";
import Footer from "./Components/Footer";
import Add_user from "./Pages/Add_user";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<><Header/><Manage_user/><Footer/></>} />
				<Route path="/add_user" element={<><Header/><Add_user/><Footer/></>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
