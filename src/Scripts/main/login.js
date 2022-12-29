function getToken(){
    //gets token from browser cookie'
    var token = localStorage.getItem("Lif_Token");
    console.log(token);

    //creates new instance of socket
    const socket = new WebSocket('ws://localhost:8000');

    //adds new event listener and requests a token login from server 
    socket.addEventListener('open', function (event) {
    
        socket.send('TOKEN_LOGIN');
        console.log('Connection Established');

    });

    //adds listener for incoming data
    //this function also is where the token verification will take place
    socket.addEventListener('message', function (event) {

        //used for checking if the username was requested after the token has been accepted 
        var requestedUsername = false;

        //used for setting the username in the user section of the topnav
        var username = "";

        //checking if the server has requested the token
        if (event.data === "TOKEN?") {
            //if token has been requested, client will send the token
            socket.send(token);
        };

        //checks if the token was accepted by the server
        if (event.data === "TOKEN_ACCEPTED") {
            //if the server accepted the token, the client will request the username associated with that token
            socket.send("USERNAME?");
            var requestedUsername = true;
        };

        //checks if username has been requested
        if (requestedUsername === true) {
            username = event.data;
            console.log(username);
        };

    });

    //contacts server 
    const contactServer = () => {
        console.log("Initializing...")
        socket.send("Initialize");
    }
}
getToken();