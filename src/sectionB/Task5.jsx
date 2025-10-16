/* ---
### **5️⃣ Conditional Rendering**
Create a component `LoginStatus`:
* Has a boolean state `isLoggedIn`
* Show `"Welcome Back!"` if true
  otherwise `"Please Login"`
* Add a button `"Toggle Login"` to switch state.*/ 

import React from "react";
import { useState } from "react";

export function LoginStatus()
{
    const[isLoggedIn,setLoggedIn] =useState("false")
const [text,setText] = useState("loging status")
  function handleClick(){

    if(isLoggedIn=="true"){
        setText("Welcome");
        setLoggedIn("false")
    }
    else{
        setText("please login")
        setLoggedIn("true")
    }
  }
    return(
        <>
        <div id="login">
            <p>{text}</p>
       <button onClick={handleClick}>Login</button>
        </div>
        </>
    )
}