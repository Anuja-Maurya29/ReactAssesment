// import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Registerpage = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [users, setUser] = useState({
    name: "",
    email: "",
    Pass: "",
  });

  function handleOnchange(event) {
    // console.log(event);
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function check() {
    setUserList((prev) => [...prev, users]);
    navigate('/register')
  }
  // console.log(userList);

  useEffect(() => {
    const Users = JSON.stringify(userList);
    localStorage.setItem("users", Users);
  }, [userList]);

  return (
    <>
      <Header />
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src="https://cdn.pixabay.com/photo/2024/02/27/02/11/popcorn-8599228_640.png"
            alt="Your Company"
            class="mx-auto h-10 w-auto"
          />
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
            Register yourself here!
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm/6 font-medium oklch(90.5% 0.093 164.15)"
              >
                Enter Name
              </label>

              <div class="mt-2">
                <input
                  onChange={handleOnchange}
                  id="name"
                  type="text"
                  name="name"
                  required
                  autocomplete="email"
                  class="block w-full rounded-md border-indigo-400 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium oklch(90.5% 0.093 164.15)"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  onChange={handleOnchange}
                  id="email"
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  class="block w-full rounded-md border-indigo-400 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium oklch(90.5% 0.093 164.15)"
                >
                  Password
                </label>
                <div class="text-sm"></div>
              </div>
              <div class="mt-2">
                <input
                  onChange={handleOnchange}
                  id="password"
                  type="password"
                  name="password"
                  required
                  autocomplete="current-password"
                  class=" border-solid border-b-gray-500 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base   text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-black-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={check}
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Register
              </button>

              <button
                onClick={() => navigate("/")}
                type="submit"
                class=" mt-4 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Back Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registerpage;
