import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import Error from "./views/Error.jsx";
import SurveyList from "./views/SurveyList.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Survey from "./views/Survey.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
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
