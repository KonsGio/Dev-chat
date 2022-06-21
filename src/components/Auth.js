import React, { useState} from "react";
import Cookies from "universal-cookie";
import axios from 'axios';

import signinImage from '../assets/signup.jpg';
// Firstly  we created our labels and gave them access to App.css with bem methodology
// Then we differentiated sign up and sign in 'divs'
// We added redirection from sign up to sign in and vise versa
const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const handleChange = () => {}
    // const equal to a function 
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign up' : 'Sign in'}</p>
                    <form onSubmit={() => {}}> 
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
                                    type="text"
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
                                    type="text"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        )}
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
        </div>
    )
}

export default Auth