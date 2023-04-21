// Import Stuff
import React from 'react';
import "../css/login_page/index.css";

// Component for login form
function LoginForm() {
    return(
        <div className='loginForm'>
            <h1>Login With Lif</h1>
            <form>
                <input placeholder='Username' id='userInput'></input>
                <br />
                <input placeholder='Password' id='passInput'></input>
                <br />
                <button type='button'>Login</button>
            </form>
        </div>
    );
}

// Main component for login page
function Login() {
    return(
        <div className='main'>
            <LoginForm />
        </div>
    );
 }

 export default Login;