import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Movies from "./Movies";
import {  useState } from "react";

const Loginpage = () => {
  const navigate = useNavigate();

const[data,setData]=useState({
  name:"",
  email:"",
  pass:""
})

function onHandle(event){
  setData((prev)=>({...prev,[event.target.name]:event.target.value}))
}

// function check(event){
// event.preventDefault();

// console.log(data);

//   if((data.name=="Anuja")&&(data.pass==1234)&&(data.email=='Anuja@1234')){
//     alert("welcome")
//   }
//   else{
//     alert("invalid username or passward")
//     navigate('/login')
//   }
// }

  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src="https://cdn.pixabay.com/photo/2024/02/27/02/11/popcorn-8599228_640.png"
            alt="Your Company"
            class="mx-auto h-10 w-auto"
          />
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
            Login in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  border-b-gray-500">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <div>
                <label
                  for="name"
                  class="block text-sm/6 font-medium oklch(90.5% 0.093 164.15)"
                >
                  Enter Name
                </label>

                <div class="mt-2">
                  <input
                  onChange={onHandle}
                  value={data.name}
                    id="name"
                    type="text"
                    name="name"
                    required
                    autocomplete="email"
                    class="block w-full rounded-md border-indigo-400 bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <label
                for="email"
                class="block text-sm/6 font-medium oklch(90.5% 0.093 164.15)"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                onChange={onHandle}
                  value={data.email}
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
                onChange={onHandle}
                  // value={data.pass}
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
                // onClick={check}
                onClick={navigate('/movies')}
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Login in
              </button>

              <button
                onClick={() => navigate("/register")}
                type="button"
                class=" mt-4 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
