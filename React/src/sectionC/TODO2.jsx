import React from "react";
import { useState } from "react";
import { ShowList } from "./ShowList";
 export function TODO2 ()
 {

    const[text,setText] =useState(" ")
    let[task,setTask] =useState([])
    
    function getTask(event)
    {
       setText(event.target.value) 
    }

    function handleSubmit(){
    setTask((prev)=>[...prev,text])
    setText(" ");


    }
   

    return(
<>
  <h1>TODO APP</h1>
  <label htmlFor="todo"></label>
  <input  onChange={getTask} name="todo"  type="text"value={text} placeholder="Enter task"/>
  <br />
  <button type="submit" onClick={handleSubmit} >ADD TASK</button>
  <ShowList list={task}/>
  </>

)

 }