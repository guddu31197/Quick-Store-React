import { useAuth } from 'context/AuthContext';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { toast } from "react-toastify";

export const SignUp = () => {
    const {signUpHandler} = useAuth();
      const [ errorInput, setErrorInput ] = useState("");
      const [formData, setFormData] = useState( {
        userName: "",
        email: "",
        password: "",
      });
      const [confirmPassword, setConfirmPassword] = useState("");
      const submitHandler = () => {
        if(formData.password.length<6 || formData.userName === "" || formData.email === "" || formData.password !== confirmPassword  ) {
          setErrorInput("Invalid Data..")
        }
        else {
          setErrorInput("")
          signUpHandler(formData);
        //   toast.success("LoggedIn successfully");
        }
      };
    return (
        <div className="login-page-container">
          <div className="login-wrapper">
            <h1 className="login-tilte">Sign Up</h1>
            <p className="error-input">{errorInput}</p>
           
            <input
              type="text"
              id="outlined-password-input"
              className="input-box"
              label="user"
              autoComplete="current-password"
              placeholder="Name"
              onInput={(e) => setFormData(prev => ({...prev, userName: e.target.value}))}
              />
            <input
              type="email"
              id="outlined-password-input"
              className="input-box"
              label="user"
              autoComplete="current-password"
              placeholder="Email"
              onInput={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              />
            <input
              type="password"
              label="password"
              id="outlined-password-input"
              className="input-box"
              autoComplete="current-password"
              placeholder="Password"
              onInput={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
            />
            <input
              type="password"
              label="password"
              id="outlined-password-input"
              className="input-box"
              autoComplete="current-password"
              placeholder="Confirm Password"
              onInput={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="login-button"
              onClick={submitHandler}
            >
              Create Account
            </button>
            <Link to="/login"> <p className="new-account">Already have a account! Login</p>  </Link>
          </div>
        </div>
      );
    };
    