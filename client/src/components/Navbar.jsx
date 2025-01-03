import React from 'react'
import logo from "../../public/logo.png"
import '../components/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const loginStatus = (login) => {
        const token = localStorage.getItem('jwt');
        if (login || token) {
            return [
                <>
                    <li><Link to='/profile'>Profile</Link></li>
                    <Link to='/createPost'>Create Post</Link>
                </>
            ]
        } else {
            return [
                <>
                    <li><Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/signin'>Signin</Link></li>
                </>
            ]
        }
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="insta-logo" />\
            <ul className='nav-menu'>
                {loginStatus()}
            </ul>
        </div>
    )
}

export default Navbar