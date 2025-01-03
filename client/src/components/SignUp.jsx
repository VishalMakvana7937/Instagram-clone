import React, { useEffect, useState } from 'react'
import logo from "../../public/logo.png"
import '../components/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SignUp = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const handleSignUp = () => {
    // senging data to backend

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        userName: userName,
        password: password
      })
    }).then((response) => response.json())
      .then((data) => {
        if (data.message) {
          notifyA(data.message);
        } else {
          notifyB(data.message);
          navigate("/signin");
        }
        console.log(data)
      })
  }

  return (
    <div className='signUp'>
      <div className="form-container">
        <div className="form">
          <img className='signUpLogo' src={logo} alt="insta-logo" />
          <p className='loginPara'>
            Sign up to see photos and videos <br /> from your friends.
          </p>
          <div>
            <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} id='email' placeholder='Email' />
          </div>
          <div>
            <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} id='name' placeholder='Full name' />
          </div>
          <div>
            <input type="text" name='username' value={userName} onChange={(e) => { setUserName(e.target.value) }} id='username' placeholder='User name' />
          </div>
          <div>
            <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} id='password' placeholder='Password' />
          </div>
          <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.
          </p>
          <input type="submit" id='submit-btn' value="Sign up" onClick={() => { handleSignUp() }} />
        </div>
        <div className="form2">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp