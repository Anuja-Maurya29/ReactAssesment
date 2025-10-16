/* ### **6️⃣ Rendering Lists**
Create a component `FruitsList`:
const fruits = ["Apple", "Banana", "Mango", "Orange"];
Render each fruit as a list item (`<li>`) with a unique key. */

import React from "react";
// import { useState } from "react";
  export function FruitsList(){
const fruits =["apple","banana","mango"];
    let fruit,key;
    return(
        <>
         <h3>Fruits List</h3>
       <ul>
       {fruits.map((element,keys)=>{
                    fruit = element;
                    key= keys;
                    
                 return  <li>{key}:{fruit}</li>
                })

            }
            {/* <li>{key}:{fruit}</li>  */}
       </ul>
        </>
    )
 }