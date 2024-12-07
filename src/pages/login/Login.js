import { useAuth } from 'context/AuthContext';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'

export const Login = () => {

    function setGuestCredential(event) {
        event.preventDefault();
        setEmail("rocky23@gmail.com");
        setPassword("rocky2301");
      }

    const { loginHandler, setPassword, setEmail, email, password } = useAuth();

    const loginButton = ({event,email, password}) => {
        event.preventDefault();
        loginHandler( {email, password});
    }

return (
  <div className="login-page-container">
    <div className="login-wrapper">
      <h1 className="login-tilte">Login</h1>
      <input 
        type="text"
        id="outlined-password-input"
        className="input-box"
        label="user"
        autoComplete="current-password"
        placeholder="User Name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
      <input 
        type="password"
        label="password"
        id="outlined-password-input"
        className="input-box"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        onChange = {(e) => setPassword(e.target.value)} 
         />
      <button className="demo-login-button"
        onClick={(e) => setGuestCredential(e)}
      >
        Login with guest user
      </button>
      <button className="login-button" onClick = {(event) => loginButton({event, email, password})} >Login</button>
    <Link to='/signup'>Create a new Account</Link>
    </div>
  </div>
);
};

