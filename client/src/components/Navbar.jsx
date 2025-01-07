import React, { useContext } from 'react'
import logo from "../../public/logo.png"
import '../components/Navbar.css'
import { Link } from 'react-router-dom'
import { LoginContext } from './context/Context'

const Navbar = () => {

    const { setMoalOpen } = useContext(LoginContext);

    const loginStatus = (login) => {
        const token = localStorage.getItem('jwt');
        if (login || token) {
            return [
                <>
                    <li><Link to='/profile'>Profile</Link></li>
                    <Link to='/createPost'>Create Post</Link>
                    <Link to={""}>
                        <button className='primaryBtn' onClick={() => {setMoalOpen(true); console.log("clicked");
                        }}>Log out</button>
                    </Link>
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
            <Link to='/'><img src={logo} alt="insta-logo" /></Link>
            
            <ul className='nav-menu'>
                {loginStatus()}
            </ul>
        </div>
    )
}

export default Navbar