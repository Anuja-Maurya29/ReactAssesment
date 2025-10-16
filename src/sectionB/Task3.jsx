/* ### **3️⃣ State Example**
Create a component `Counter` with:
* A button “Increment Count”
* A paragraph showing `Current Count: <value>`
When button is clicked, increase count by 1.
---*/
 import React from "react";
 import { useState } from "react";

  export function   Counter(){
    const[count,setCount] =useState(0)

    function handleClick(){
setCount(count+1);

    }
 return(
   <>
   <div id="counter" style={{ width:"300px",height:"100px", background:"lightblue"}}>
     <p style={{fontSize:"25px"}}>Counter:{count}</p>
   </div>
    <button onClick={handleClick}>Increase</button>
   </>
 )

 }