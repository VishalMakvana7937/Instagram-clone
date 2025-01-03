import React from 'react'
import '../components/CreatePost.css'

const CreatePost = () => {

    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
        };
    };

    return (
        <div className='createPost'>
            <div className='post-header'>
                <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
                <button id='post-btn'>Share</button>
            </div>
            <div className="main-div">
                <img id='output' src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png' />
                <input type="file" accept=' image/*' onChange={(event) => { loadfile(event) }} />
            </div>
            <div className="details">
                <div className="card-header">
                    <div className="card-pic">
                        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
                    </div>
                    <h5>Ramesh</h5>
                </div>
                <textarea typeof='text' placeholder='Write a caption...'></textarea>
            </div>
        </div>
    )
}

export default CreatePost