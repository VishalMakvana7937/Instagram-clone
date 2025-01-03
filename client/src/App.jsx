import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './components/CreatePost'
import { LoginContext } from './components/context/Context'
import { useState } from 'react'

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <LoginContext.Provider value={{ setIsLogin }}>
            <Navbar login={isLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createPost" element={<CreatePost />} />
            </Routes>
            <ToastContainer theme='dark' />
          </LoginContext.Provider>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
