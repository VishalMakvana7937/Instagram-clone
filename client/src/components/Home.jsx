import React, { useEffect, useState } from 'react'
import '../components/Home.css'
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

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

  const likePost = (id) => {
    fetch("http://localhost:5000/like", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result
          } else {
            return posts
          }
        })
        setData(newData)
        console.log(result)
      })
  }

  const unlikePost = (id) => {
    fetch("http://localhost:5000/unlike ", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result
          } else {
            return posts
          }
        })
        setData(newData)
        console.log(result)
      })
  }

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
                {/* {
                  post.likes.includes(JSON.parse(localStorage.getItem("user"))._id) ?
                    (<span class="material-symbols-outlined material-symbols-outlined-red" onClick={() => unlikePost(post._id)}>favorite_border</span>) :
                    (<span class="material-symbols-outlined" onClick={() => likePost(post._id)}>favorite</span>)
                } */}
                {
                  post.likes.includes(JSON.parse(localStorage.getItem("user"))._id) ?
                    (<span id='FaRegHeart_icon' onClick={() => unlikePost(post._id)}><FaRegHeart /></span>) :
                    (<span onClick={() => likePost(post._id)}><FaRegHeart /></span>)
                }
                <p>{post.likes.length} Like</p>
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