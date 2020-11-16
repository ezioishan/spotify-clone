import React from "react";
import './Login.css';
import Logo from './spotify-header-img.jpg';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img src={Logo} alt=""></img>
            {/*Spotify logo */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;