import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getUsername from "../Scripts/utils/get username";
import Logo from "../Assets/Images/Global/dayly logo.png";
import MagnifyingGlass from "../Assets/Images/Global/magnifying-glass.png";
import "../css/global/topnav.css";

function TopNav() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function handle_post_button() {
        navigate("/create");
    }

    // function for redirecting to search page with search query
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            console.log("Hello World");
        }
    }

    // Gets username for user
    useEffect(() => {
        async function fetchData() {
          const username = await getUsername();
          setUsername(username);
        }
        fetchData();
      }, []);

      // Url to profile pic
      let url = `http://localhost:8002/get_pfp/${username}.png`;
    return(
        <nav>
            <div className="topnav-logo">
                <a href="/"><img src={Logo} alt="Dayly Logo" /></a>
            </div>
            <div className="topnav-search">
                <img src={MagnifyingGlass} alt="Search Icon" />
                <input type="text" placeholder="Search Dayly" onKeyDown={handleKeyPress} id="search-box" /> 
            </div>  
            <div className="topnav-post">
                <button onClick={handle_post_button}>Create</button>
            </div>
            <div className="topnav-account">
                <a href="#test"><img src={url} alt="Profile Pic" /></a>
            </div>
        </nav>
    )
}

export default TopNav;