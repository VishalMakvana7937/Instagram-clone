import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />+
            <Route path="/profile" element={<Profile />} />+
          </Routes>
          <ToastContainer theme='dark' />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
