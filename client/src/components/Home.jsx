import React from 'react'
import '../components/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="card">

        <div className="card-header">
          <div className="card-pic">
            <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
          </div>
          <h5>Remesh</h5>
        </div>

        <div className="card-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkB8s4QZ7iu5JGCRASoKuaAr8bGoSg2b_VIg&s" alt="post-img" />
        </div>

        <div className="card-content">
          <span class="material-symbols-outlined">favorite</span>
          <p>1 Like</p>
          <p>This is amaZing</p>
        </div>

        <div className="add-comment">
        <span class="material-symbols-outlined">favorite</span>
          <input type="text" placeholder="Add a comment..." />
          <button className="comment">Post</button>
        </div>

      </div>
    </div>
  )
}

export default Home