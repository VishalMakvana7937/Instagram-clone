import React from 'react'
import logo from "../../public/logo.png"
import '../components/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="insta-logo" />\
            <ul className='nav-menu'>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/signin'>Signin</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <Link to='/createPost'>Create Post</Link>
            </ul>
        </div>
    )
}

export default Navbar