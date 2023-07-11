// Import Stuff
import React, { useEffect } from 'react';
import "../css/login_page/index.css";
import { login } from "../Scripts/login_page/login"

// Component for login form
function LoginForm() {
    return(
        <div className='loginForm'>
            <div className='formContainer'>
                <h1>Login With Lif</h1>
                <form>
                    <label for='userInput'>Username</label>
                    <input placeholder='Enter your Username' id='userInput'></input>
                    <br />
                    <label for='userInput'>Password</label>
                    <input placeholder='Enter your Password' id='passInput' type='password'></input>
                    <br />
                    <button type='button' onClick={login}>Login</button>
                </form>
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