import React, { useEffect, useState } from 'react';
import '../components/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:5000/myposts", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProfile(result);
        console.log(result);
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
          <h1>{JSON.parse(localStorage.getItem("user")).name}</h1>
          <div className="profile-info" style={{ display: "flex" }}>
            <p>40 post</p>
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
        {Array.isArray(profile) && 
          profile.map((pic) => (
            <img
              key={pic._id}
              src={pic.photo}
              className="item"
              alt="profile_img"
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
