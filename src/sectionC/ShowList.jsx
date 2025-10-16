import React from "react";
// import { useState } from "react";
  export function ShowList({list}){
    let task;
    return(
       <>
        <h1>List Items</h1>
        <ul>
            {
                list.map((item)=>{
                    task=item;
                    return <li>{task}</li>
                })
                }
        </ul>
       </>
    )
 }