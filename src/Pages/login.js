// Import Stuff
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../css/login_page/index.css";
import { login } from "../Scripts/login_page/login"
import Lif_logo from "../Assets/Images/Global/Lif-Logo.png";

// Component for login form
function LoginForm() {
    // Create a useNavigate instance
    const navigate = useNavigate();

    return(
        <div className='loginContainer'>
            <div className='loginForm'>
                <div className='formContainer'>
                    <img src={Lif_logo} alt='Lif Logo' />
                    <h1>Login With Lif</h1>
                    <form>
                        <label for='userInput'>Username</label>
                        <input placeholder='Enter your Username' id='userInput'></input>
                        <br />
                        <label for='passInput'>Password</label>
                        <input placeholder='Enter your Password' id='passInput' type='password'></input>
                        <br />
                        <button type='button' onClick={() => login(navigate)}>Login</button>
                    </form>
                    <span id='login_status' />
                </div>
            </div>
        </div>
    );
}

// Main component for login page
function Login() {
    // Changes the page title
    useEffect(() => {
        document.title = 'Dayly | Login';
      }, []);

    return(
        <div className='main'>
            <LoginForm />
        </div>
    );
 }

 export default Login;