// import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return(
        <>
        <h1
        className="text-6xl font-bold mb-6 drop-shadow-lg"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        >
        Show Hole
      </h1>

      {/* Subtitle */}
      <p className="text-xl font-bold mb-6 drop-shadow-lg">Helping you find your next great movie or show</p>
   

      {/* Login Button */}
      <button
        className="px-8 py-4 bg-white text-emerald-700 font-semibold text-lg rounded-2xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        
        >
            <Link to="/login">
                Login
        </Link>
      </button>
      <button
        className="px-8 py-4 bg-white text-emerald-700 font-semibold text-lg rounded-2xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        
        >
            <Link to="/register">
                Register
        </Link>
      </button>
          </>
    );
}

export default HomePage;
