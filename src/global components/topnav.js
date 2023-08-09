import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getUsername from "../Scripts/utils/get username";
import Logo from "../Assets/Images/Global/dayly logo.png";
import MagnifyingGlass from "../Assets/Images/Global/magnifying-glass.png";
import "../css/global/topnav.css";
import log_out from "../Scripts/utils/log out";

function AccountPanel({ show }) {
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const username = await getUsername();

            setUsername(username);
        }
        fetchData()
    }, [show]);

    let url = `http://localhost:8002/get_pfp/${username}.png`;

    const handle_log_out = () => {
        log_out();
        window.location.reload();
    }

    function handle_sign_in() {
        navigate('/login');
    }

    if (show === true && username !== null) {
        return(
            <div className="account-panel">
                <div className="account-panel-header">
                    <img src={url} alt="" />
                    <h1>{username}</h1>
                </div>
                <hr />
                {/* eslint-disable-next-line */}
                <a href="#">Profile</a>
                {/* eslint-disable-next-line */}
                <a href="#test">Manage Account</a>
                {/* eslint-disable-next-line */}
                <a onClick={handle_log_out}>Log Out</a>
            </div>
        )
    } else if (show === true && username === null) {
        return(
            <div className="account-panel">
                <div className="account-panel-header">
                    <img src={url} alt="" />
                    <h1>Guest</h1>
                </div>
                <hr />
                <button className="sign-in-button" onClick={handle_sign_in}>Sign In</button>
            </div>
        )   
    } 
    return null;
}

function TopNav() {
    const [username, setUsername] = useState('');
    const [panelShow, setPanelShow] = useState(false);
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

      const handle_account_panel = () => {
        setPanelShow(!panelShow);
      }

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
                {/* eslint-disable-next-line */}
                <a onClick={handle_account_panel}><img src={url} alt="Profile Pic" /></a>
                <AccountPanel show={panelShow} />
            </div>
        </nav>
    )
}

export default TopNav;