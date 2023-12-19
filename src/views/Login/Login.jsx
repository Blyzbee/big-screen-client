import "./Login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isLogged, login, saveToken } from "../../services/AccountAuth";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Login = () => {
	let navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const [errorMsg, setErrorMsg] = useState("");

	const onSubmit = (data) => {
		login(data)
			.then((res) => {
				console.log(res);
				saveToken(res.data.token);
				navigate("/admin/home");
			})
			.catch((error) => {
				console.error("Login error:", error);
				setErrorMsg("Erreur de mot de passe");
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
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							className="form-input"
							{...register("password", { required: true })}
						/>
					</div>
					{errorMsg && <span className="text-error">{errorMsg}</span>}
					<Button type="submit">Connexion</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
