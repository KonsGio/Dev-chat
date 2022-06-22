import React, { useState} from "react";
import Cookies from "universal-cookie";
import axios from 'axios';

import signinImage from '../assets/signup.jpg';
// Firstly  we created our labels and gave them access to App.css with bem methodology
// Then we differentiated sign up and sign in 'divs'
// We added redirection from sign up to sign in and vise versa
// Created initial states and then built the calls from users
// Submit and login handlers (async methods)

const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}
const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
// Get data from form submission
        const { fullName, username, password, phoneNumber, avatarURL } = form;
        const URL = 'http://localhost:5000/auth';
// Request to the backend to different URL each time dependent on login or signup
        const {data: {token, userId, hashedPassword}} = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`,{
            username, password, fullName, phoneNumber, avatarURL,
        });
// Store data that we get back into cookies
        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup){
        cookies.set('phoneNumber', phoneNumber);
        cookies.set('avatarURL', avatarURL);
        cookies.set('hashedPassword', hashedPassword);
        }
// after cookies we reload the browser
        window.location.reload();
    }
// const equal to a function 
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign up' : 'Sign in'}</p>
                    <form onSubmit={handleSubmit}> 
                        {isSignup && (
                            // signup full name
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor = "fullname">Full Name</label>
                                <input 
                                    name="fullname"     
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        )}
                        {/* sign up username */}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor = "username">Username</label>
                                <input 
                                    name="username"     
                                    type="text"
                                    placeholder="username"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor = "phoneNumber">Phone number</label>
                                <input 
                                    name="phoneNumber"     
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor = "avatarURL">Avatar URL</label>
                                <input 
                                    name="avatarURL"     
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor = "password">Password</label>
                                <input 
                                    name="password"     
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                            {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor = "confirmPassword">Confirm Password</label>
                                <input 
                                    name="confirmPassword"     
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button>{isSignup ? "Sign up" : "Sign in"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup 
                            ? "Already have an account?"
                            : "You don't have an account! Create one "
                            }
                            <span onClick={switchMode}>
                                {isSignup ? 'Sign in' : 'Sign Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth__form-container-image">
                <img src={signinImage} alt='sign in' />
            </div>
        </div>
    )
}

export default Auth