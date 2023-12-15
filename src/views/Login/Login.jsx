import { useEffect, useState } from "react";
import "./Login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isLogged, login, saveToken } from "../../services/AccountAuth";
import Button from "../../components/Button/Button";

const Login = () => {
	let navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const [identify, setIdentify] = useState({
		email: "",
		password: "",
	});

	const onChange = (e) => {
		setIdentify({
			...identify,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (data) => {
		login(data)
			.then((res) => {
				console.log(res);
				saveToken(res.data.token);
				navigate("/admin/home");
			})

			.catch((error) => {
				console.error("Login error:", error);
			});
	};

	if (isLogged()) return <Navigate to="/admin/home" replace />;

	return (
		<div className="login-page">
			<h1>BigScreen</h1>

			<div className="login-form-container">
				<h2>Connexion</h2>

				<form onSubmit={handleSubmit(onSubmit)} className="form-connexion">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							className="form-input"
							{...register("email", { required: true })}
							value={identify.email}
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							className="form-input"
							{...register("password", { required: true })}
							value={identify.password}
							onChange={onChange}
						/>
					</div>

					<Button type="submit">Connexion</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
