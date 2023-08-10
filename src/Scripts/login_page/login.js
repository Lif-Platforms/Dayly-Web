import Cookies from 'js-cookie';

export async function login(navigate) {
    // Get username and password from page
    const username = document.getElementById('userInput').value; 
    const password = document.getElementById('passInput').value; 
    
    // Login using auth server
    fetch(`${process.env.REACT_APP_AUTH_URL}/login/${username}/${password}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
    })
    .then(data => {
        // Handle the parsed data
        console.log(data);

        // Check the response of the server
        if (data.Status === "Successful") {
            document.getElementById("login_status").innerHTML = "Login Successful!";
            document.getElementById("login_status").style.color = "green";

            // Set cookies to keep user logged in
            Cookies.set('LIF_USERNAME', username, {path: '/'});
            Cookies.set('LIF_TOKEN', data.Token, {path: '/'});

            // Navigate to home page
            navigate('/');
        } else {
            document.getElementById("login_status").innerHTML = "Login Unsuccessful!";
            document.getElementById("login_status").style.color = "red";
        }
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);

        document.getElementById("login_status").innerHTML = "Something Went Wrong!";
        document.getElementById("login_status").style.color = "red";
    });
}

export default login;