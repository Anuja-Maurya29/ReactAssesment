
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";


export default function Navbar() {
// getting current user from auth store 
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">MovieApp</div>
      <div className="space-x-4">
        
        {user ? (
          <>
          <input type="text"
          placeholder="Search here"
          className="bg-white text-gray-800 gap-2 w-xl" />
            <Link to="/movies">Movies</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
            
          </>
        )}
      </div>
    </nav>
  );
}
