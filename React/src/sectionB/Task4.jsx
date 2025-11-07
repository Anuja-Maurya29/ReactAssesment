/*
### **4️⃣ Event Handling**

Create a component `ColorChanger`:

* A button “Change Color”
* A text `"The box is red"`
* When button is clicked → toggle the box text & background color between red and blue.*/
 import React from "react";
 import { useState } from "react";
 export function  ColorChange(){
    const [colour,setColor]  = useState("red")

    function handleClick(){
       
        if(colour=="red")
        {

            setColor("blue")
        }
        else{
            setColor("red")
        }

    }
    return(
    <>
    <p style={{background:colour ,color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempora.</p>
        <button onClick={handleClick}>Change Color</button>
    </>
)
 }