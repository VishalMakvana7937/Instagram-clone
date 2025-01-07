import React, { useEffect, useState } from 'react';
import '../components/Profile.css';
import PostDetails from './PostDetails';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userid } = useParams();
    console.log(userid);

    const [user, setUser] = useState("");
    const [post, setPost] = useState([]);


    //   const toggleDetails = (posts) => {
    //     if (show) {
    //       setShow(false)
    //     } else {
    //       setShow(true)
    //       setPost(posts);
    //       console.log(post);

    //     }
    //   }

    useEffect(() => {
        fetch(`http://localhost:5000/user/${userid}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setUser(result.user)
                setPost(result.post)
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div className="profile">
            <div className="profile-frame">
                <div className="profile-pic">
                    <img
                        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                        alt="profile_img"
                    />
                </div>

                <div className="profile-data">
                    <h1>{user.name}</h1>
                    <div className="profile-info" style={{ display: "flex" }}>
                        <p>{post.length} post</p>
                        <p>40 followers</p>
                        <p>40 following</p>
                    </div>
                </div>
            </div>

            <hr
                style={{
                    width: "90%",
                    opacity: "0.8",
                    margin: "25px auto",
                }}
            />

            <div className="gallery">
                {Array.isArray(post) && post.length > 0 ? (
                    post.map((pic) => (
                        <img
                            key={pic._id}
                            src={pic.photo}
                            className="item"
                            alt="profile_img"
                        // If you need to show post details, uncomment toggleDetails function
                        // onClick={() => toggleDetails(pic)}
                        />
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>

            {/* {
        show && (
          <PostDetails item={post} toggleDetails={toggleDetails} />
        )
      } */}
        </div>
    );
};

export default UserProfile;
