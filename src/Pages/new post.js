import TopNav from "../global components/topnav";
import placeholderImg from "../Assets/Images/Global/placeholder-image.png";
import "../css/post_page/new post.css";

function NewPost() {
    return(
        <div className="post-page-container">
            <TopNav />
            <div className="post-form">
                <form>
                    <h1>Whats on Your Mind?</h1>
                    <input placeholder="Title" type="title" id="title"/>
                    <br />
                    <textarea placeholder="Description" id="description"/>
                    <br />
                    <button className="post-button" type="button">Post</button>
                </form>
                <div className="image-upload">
                    <button>
                        <img src={placeholderImg} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;