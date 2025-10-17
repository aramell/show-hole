import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';  
import Register from './Register';
import './App.css'

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Roboto:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <>
    <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>    
    </>
  )
}

export default App
