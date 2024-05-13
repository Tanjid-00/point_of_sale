/* eslint-disable */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/signup/login.css';
import logo from '../../assets/logo.png';

function Login({ onLogin }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.trim() !== '' && password.trim() !== '') {
            onLogin(userName, password);
        } else {
            alert('Invalid username or password!');
        }
    };

    return (
        <div id="body">
            <div id="container">
                <img src={logo} alt="logo" id="logo" />
                <form onSubmit={handleSubmit}>
                    <h3>Sign in</h3>
                    <div className="inp">
                        <label htmlFor="name">userName:</label>
                        <input type="text" name="name" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                    </div>
                    <br />

                    <div className="inp">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    </div>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
