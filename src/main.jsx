import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import { AuthProvider } from "./context/AuthContext.jsx";
import Error from "./views/Error/Error.jsx";
import SurveyList from "./views/SurveyList/SurveyList.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Survey from "./views/Survey/Survey.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import Login from "./views/Login/Login.jsx";
import Home from "./views/Home/Home.jsx";
import AdminHome from "./views/AdminHome/AdminHome";
import AdminQuestion from "./views/AdminQuestion/AdminQuestion";
import AdminAnswers from "./views/AdminAnswers/AdminAnswers";
import { AuthProvider } from "./context/AuthContext";


const MainLayout = ({ noNavbar = false }) => {
	return (
		<>
			{!noNavbar && <Navbar />}
			<Outlet />
		</>
	);
};

// MISE EN PLACE DES ROUTES
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
				path: "/surveys",
				element: <SurveyList />,
			},
		],
	},
	{
		element: <MainLayout noNavbar />,
		errorElement: <Error />,
		children: [
			{
				path: "/admin",
				element: <Login                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      />,
			},
			{
				path: "/admin/home",
				element: <AdminHome />,
			},

			{
				path: "/admin/questions",
				element: <AdminQuestion />,
			},

			{
				path: "/admin/answers",
				element: <AdminAnswers />,
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
		<AuthProvider>
			<RouterProvider router={mainRouter} />
		</AuthProvider>
	</React.StrictMode>
);
