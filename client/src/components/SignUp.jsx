import React, { useEffect } from 'react'
import logo from "../../public/logo.png"
import '../components/SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='signUp'>
      <div className="form-container">
        <div className="form">
          <img className='signUpLogo' src={logo} alt="insta-logo" />
          <p className='loginPara'>
            Sign up to see photos and videos <br /> from your friends.
          </p>
          <div>
            <input type="email" name='email' id='email' placeholder='Email' />
          </div>
          <div>
            <input type="text" name='name' id='name' placeholder='Full name' />
          </div>
          <div>
            <input type="email" name='username' id='username' placeholder='User name' />
          </div>
          <div>
            <input type="password" name='password' id='password' placeholder='Password' />
          </div>
          <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.
          </p>
          <input type="submit" id='submit-btn' value="Sign up" />
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