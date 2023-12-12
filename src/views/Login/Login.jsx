import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AccountAuth } from '../../services/AccountAuth';

const Login = () => {
	let navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const [identify, setIdentify] = useState({
		email: '',
		password: '',
	});

	const onChange = (e) => {
		setIdentify({
		...identify,
		[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (data) => {

		AccountAuth.login(data)
		.then((res) => {
		console.log(res);
		AccountAuth.saveToken(res.data.token);
		navigate('/admin/home');
		})

		.catch((error) => {
		console.error('Login error:', error);
		});
	};

	return (
		<div className='form-layout'>
		<div className='login-form-container'>
			<h2>Connexion</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='form-connexion'>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
					type='email'
					name='email'
					className='form-input'
					{...register('email', { required: true })}
					value={identify.email}
					onChange={onChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
					type='password'
					name='password'
					className='form-input'
					{...register('password', { required: true })}
					value={identify.password}
					onChange={onChange}
					/>
				</div>

				<div className='btn-login'>
					<input type='submit' value='Connexion' />
				</div>
			</form>
		</div>
		</div>
	);
};

export default Login;
