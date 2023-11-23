import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { AuthProvider } from "./context/AuthContext.jsx";
import Error from "./views/Error/Error.jsx";
import SurveyList from "./views/SurveyList/SurveyList.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Survey from "./views/Survey/Survey.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./views/Login/Login.jsx";
import Home from "./views/Home/Home.jsx";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const mainRouter = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/administration",
				element: <Login />,
			},
			{
				path: "/surveys",
				element: <SurveyList />,
			},
			{
				path: "/survey/:id",
				element: <Survey />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={mainRouter} />
	</React.StrictMode>
);
