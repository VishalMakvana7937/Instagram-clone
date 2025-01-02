import React from 'react'
import '../components/SignIn.css'
import logo from "../../public/logo.png"
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='signIn'>
      <div>
        <div className="loginFrom">
          <img className='signUpLogo' src={logo} alt="insta-logo" />
          <div>
            <input type="email" name='email' id='email' placeholder='Email' />
          </div>
          <div>
            <input type="password" name='password' id='password' placeholder='Password' />
          </div>
          <input type="submit" id='login-btn' value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn