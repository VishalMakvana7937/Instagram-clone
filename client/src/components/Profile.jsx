import React from 'react'
import '../components/Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="profile-frame">

        <div className="profile-pic">
          <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
        </div>

        <div className="profile-data">
          <h1>Canta Coder</h1>
          <div className="profile-info" style={{ display: "flex" }}>
            <p>40 post</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>

      </div>

      <hr style={{ width: "90%", opacity: "0.8", margin: "25px auto", }} />

      <div className='gallery'>
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
      </div>
    </div>
  )
}

export default Profile