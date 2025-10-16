/*## ✅ **Bonus Challenge**

Create a `ToggleMessage` component:

* Initially shows “Good Morning”
* Button toggles it to “Good Night”
* Change background color accordingly (light yellow ↔ dark blue)*/

import React from "react";
import { useState } from "react";
export function ToggleMessage(){
    const [color,setColor]=useState("yellow")

    return(

        <div style={{width:"1200px", height:"300px", background:color}}>
        
        <button onClick={()=>{
            if(color=="yellow")
            {
                setColor("blue")
            }
            else{
                setColor("yellow")
            }
        }}>Toogle</button>
        </div>
    )
}