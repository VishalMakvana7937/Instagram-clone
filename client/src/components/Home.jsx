import React, { useEffect, useState } from 'react'
import '../components/Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem('jwt')

    if (!token) {
      navigate("/signup");
    }

    fetch("http://localhost:5000/allposts", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err))

  }, []);

  return (
    <div className='home'>
      {
        data.map((post) => {
          return (
            <div className="card">
              <div className="card-header">
                <div className="card-pic">
                  <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="profile_img" />
                </div>
                <h5>{post.postedBy.name}</h5>
              </div>

              <div className="card-image">
                <img src={post.photo} alt="post-img" />
              </div>

              <div className="card-content">
                <span class="material-symbols-outlined">favorite</span>
                <p>1 Like</p>
                <p>{post.body}</p>
              </div>

              <div className="add-comment">
                <span class="material-symbols-outlined">favorite</span>
                <input type="text" placeholder="Add a comment..." />
                <button className="comment">Post</button>
              </div>
            </div>
          )
        })
      } 
    </div>
  )
}

export default Home