import React, { useState } from 'react';
import './LoginPage.css';
import ButtonPrimary from './ButtonPrimary';
import loginUser from '../../utils/LoginUser';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };
  if(localStorage.getItem('username'))
    {
      window.location.href = 'dashboard'
    }
  return (
    
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form className="login-form" onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <ButtonPrimary type='submit' text = "Login"/>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;