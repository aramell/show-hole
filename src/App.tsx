import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';  
import Register from './Register';
import Dashboard from './Dashboard';
import './App.css'
import Verify from './Verify';

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/verify" element={<Verify />} />
        </Routes>    
    </>
  )
}

export default App
