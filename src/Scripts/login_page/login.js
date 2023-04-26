export async function login() {
    // Creates new websocket instance
    const ws = new WebSocket('ws://localhost:8001');

    // Waits for the connection to open
    ws.addEventListener('open', () => {
        console.log('WebSocket connection established.');
        // Tells the server that the client is trying to log in
        ws.send("DAYLY_LOGIN");
    });

    // Looks for incoming messages 
    ws.addEventListener('message', (event) => {
        var message = event.data; 
        console.log(`Message received: ${message}`);
        
        // Checks if the server has asked for the credentials
        if (message === "CREDENTIALS?") {
            // Gets the credentials from the login form
            const getUsername = document.getElementById('userInput');
            const username = getUsername.value; 

            const getPass = document.getElementById('passInput');
            const password = getPass.value;

            // Prepares the data to send to the server
            const credentials = {Username:username, Password:password};
            const data = JSON.stringify(credentials); 

            // Sends data to the server
            ws.send(data); 
        }
      });
}

export default login;