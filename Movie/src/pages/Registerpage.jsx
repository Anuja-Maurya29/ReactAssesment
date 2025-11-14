import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/auth/authSlice";

export const Registerpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersList = useSelector((state) => state.auth.users);
  

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    pass: "",
  });

  function handleChange(event) {
    setUserForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!userForm.name || !userForm.email || !userForm.pass) {
      alert("All fields are required");
      return;
    }

    const ExistingUser = usersList.find(
      (user) => user.email === userForm.email
    );
    if (ExistingUser) {
      alert("User already exists");
      return;
    }

    dispatch(addUser(userForm));
    alert("Successfully signed up!");
    navigate("/login");
  }

  return (
    <div className="  bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl px-8 py-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Register
        </h2>

        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="border border-gray-300 p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          value={userForm.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="border border-gray-300 p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="pass"
          value={userForm.pass}
          onChange={handleChange}
          placeholder="Enter Password"
          className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already a member?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
