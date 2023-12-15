import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AccountAuth } from '../../services/AccountAuth';

const Login = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

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
    <div className='login-page'>
      <h1>BigScreen</h1>

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
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              className='form-input'
              {...register('password', { required: true })}
            />
          </div>

          <div className='btn-login'>
            <input className='btn-submit' type='submit' value='Connexion' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
