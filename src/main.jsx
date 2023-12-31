import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Error from "./views/Error/Error.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Survey from "./views/Survey/Survey.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./views/Login/Login.jsx";
import Home from "./views/Home/Home.jsx";
import AdminHome from "./views/AdminHome/AdminHome";
import AdminQuestion from "./views/AdminQuestion/AdminQuestion";
import AdminAnswers from "./views/AdminAnswers/AdminAnswers";
import ParticipantAnswersView from "./views/ParticipantAnswersView/ParticipantAnswersView.jsx";

const MainLayout = ({ noNavbar = false }) => {
	return (
		<>
			{!noNavbar && <Navbar />}
			<main className={noNavbar ? "no-navbar" : ""}>
				<Outlet />
			</main>
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
				path: "/answers/:id",
				element: <ParticipantAnswersView />,
			},
			{
				path: "/survey/:id",
				element: <Survey />,
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
		],
	},
	{
		element: <MainLayout noNavbar />,
		errorElement: <Error />,
		children: [
			{
				path: "/admin",
				element: <Login />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={mainRouter} />
	</React.StrictMode>
);
