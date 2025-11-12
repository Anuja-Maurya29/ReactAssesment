import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";


export function Login() {
  //getting user data from form using state 
  const [credentials, setCredentials] = useState({
    name: "",
    pass: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //getting register user data from  auth store 
  const usersList = useSelector((state) => state.auth.users);

  function handleChange(event) {
    //to set data in aur state from multiple feilds
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleLogin(event) {
    //login function 
    event.preventDefault();

    if (!credentials.name || !credentials.pass) {  //basic validation
      alert("Enter username and password");
      return;
    }

    const valid = usersList.find(   //validating users
      (user) =>
        user.name === credentials.name && user.pass === credentials.pass
    );


    if (!valid) {
      alert("Invalid credentials");
      return; 
    }

    dispatch(setUser(valid));  //setting current logged in user
    navigate("/movies");      
  }

  return (
    <div className=" bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-cover bg-center bg-no-repeat h-screen min-h-screen flex items-center justify-center ">
   

       <form
        onSubmit={handleLogin}
        className="bg-white shadow-md  px-8 py-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center rounded-2xl text-gray-800">
          Login
        </h2>

        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChange}
          placeholder="Enter Username"
          className="border border-gray-300 p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="pass"
          value={credentials.pass}
          onChange={handleChange}
          placeholder="Enter Password"
          className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          New Here{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
     
    </div>
  );
}
