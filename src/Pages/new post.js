import TopNav from "../global components/topnav";
import placeholderImg from "../Assets/Images/Global/placeholder-image.png";
import "../css/post_page/new post.css";
import React, { useState, useRef, useEffect } from 'react';
import getUsername from "../Scripts/utils/get username";
import getToken from "../Scripts/utils/get token";

function SignInPrompt() {
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

  useEffect(() => {
    // Gets the user token
    const token = getToken();

    if (token) {
      setShowSignInPrompt(false);
    } else {
      setShowSignInPrompt(true)
    }
  })

  if (showSignInPrompt) {
    return(
      <div className="sign-in-prompt">
        <div className="sign-in-popup">
          
        </div>
      </div>
    )
  }
}

function NewPost() {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const storedImage = localStorage.getItem('selectedImage');
        if (storedImage) {
        setSelectedImage(storedImage);
        }
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
        setSelectedImage(reader.result);
        localStorage.setItem('selectedImage', reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  async function handle_post() {
    if (selectedImage) {
      const formData = new FormData();
      const fileInput = fileInputRef.current;
      const file = fileInput.files[0];
  
      formData.append('file', file, file.name); // Include the filename
  
      formData.append('title', document.getElementById('title').value);
      formData.append('description', document.getElementById('description').value);
  
      console.log(formData);
  
      // Gets auth information
      const username = await getUsername();
      const token = await getToken(); 
  
      fetch(`http://localhost:8004/new_post/${username}/${token}`, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle any error that occurred during the request
        console.error(error);
      });
    }
  }  
  
    return (
        <div className="post-page-container">
            <TopNav />
            <div className="post-form">
                <form>
                    <h1>What's on Your Mind?</h1>
                    <input placeholder="Title" type="title" id="title" />
                    <br />
                    <textarea placeholder="Description" id="description" />
                    <br />
                    <button className="post-button" type="button" onClick={handle_post}>Post</button>
                </form>
                <div className="image-upload">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                    />
                    <button onClick={handleButtonClick}>
                        {selectedImage ? (
                            <img src={selectedImage} alt="" />
                        ) : (
                            <img src={placeholderImg} alt="" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewPost;